import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    // Ensure that EmailTemplate returns a ReactElement
    const emailContent = React.createElement(EmailTemplate, { name, email, phone, message });

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['info.edeninternational@gmail.com'],
      subject: 'New Contact Form Submission',
      react: emailContent, // Use the ReactElement here
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
