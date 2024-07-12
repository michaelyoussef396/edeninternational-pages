import * as React from 'react';

interface AppointmentEmailTemplateProps {
  appointmentType: string;
  scheduleType: string;
  appointmentDate: Date | null;
  appointmentTime: string;
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
}

export const AppointmentEmailTemplate: React.FC<AppointmentEmailTemplateProps> = ({
  appointmentType,
  scheduleType,
  appointmentDate,
  appointmentTime,
  formData,
}) => (
  <div>
    <h1>New Appointment Request</h1>
    <p><strong>Appointment Type:</strong> {appointmentType}</p>
    <p><strong>Schedule Type:</strong> {scheduleType}</p>
    <p><strong>Appointment Time:</strong> {appointmentTime}</p>
    <p><strong>First Name:</strong> {formData.firstName}</p>
    <p><strong>Last Name:</strong> {formData.lastName}</p>
    <p><strong>Email:</strong> {formData.email}</p>
    <p><strong>Phone:</strong> {formData.phone}</p>
  </div>
);