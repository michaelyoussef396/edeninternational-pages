import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { AppointmentEmailTemplate } from '@/components/AppointmentEmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { appointmentType, scheduleType, appointmentDate, appointmentTime, formData } = await req.json();

    const emailContent = AppointmentEmailTemplate({
      appointmentType,
      scheduleType,
      appointmentDate: appointmentDate ? new Date(appointmentDate) : null,
      appointmentTime,
      formData,
    });

    const textContent = `
      Appointment Type: ${appointmentType}
      Schedule Type: ${scheduleType}
      Appointment Date: ${appointmentDate ? new Date(appointmentDate).toDateString() : 'N/A'}
      Appointment Time: ${appointmentTime}
      First Name: ${formData.firstName}
      Last Name: ${formData.lastName}
      Email: ${formData.email}
      Phone: ${formData.phone}
    `;

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['info.edeninternational@gmail.com'],
      subject: 'New Appointment Request',
      react: emailContent,
      text: textContent,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
  }
}
