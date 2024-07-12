"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentForm = () => {
  const [step, setStep] = useState<number>(1);
  const [appointmentType, setAppointmentType] = useState<string>("");
  const [scheduleType, setScheduleType] = useState<string>("");
  const [appointmentDate, setAppointmentDate] = useState<Date | null>(null);
  const [appointmentTime, setAppointmentTime] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleNext = async () => {
    if (step === 1) {
      setStep(2);
    } else {
      setLoading(true);
      setSuccess('');
      setError('');
      try {
        const response = await fetch('/api/send/appointments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            appointmentType,
            scheduleType,
            appointmentDate,
            appointmentTime,
            formData,
          }),
        });

        if (response.ok) {
          setSuccess('Appointment scheduled successfully!');
          setFormData({ firstName: '', lastName: '', email: '', phone: '' });
          setAppointmentType('');
          setScheduleType('');
          setAppointmentDate(null);
          setAppointmentTime('');
          setStep(1);
        } else {
          const result = await response.json();
          setError(result.error || 'Error scheduling appointment');
        }
      } catch (error) {
        setError('Error scheduling appointment');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const times = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  return (
    <div className="container mx-auto my-16 px-4">
      <div className="flex justify-center items-center mb-8">
        <div className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
              step === 1 ? "bg-red-500" : "bg-gray-300"
            }`}
          >
            1
          </div>
          <span className="ml-2 text-gray-700">Appointment Schedule</span>
        </div>
        <div className="w-4 h-0.5 bg-gray-300 mx-2" />
        <div className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
              step === 2 ? "bg-red-500" : "bg-gray-300"
            }`}
          >
            2
          </div>
          <span className="ml-2 text-gray-700">Personal Information</span>
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Appointment Schedule</h2>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                value="Phone"
                checked={appointmentType === "Phone"}
                onChange={(e) => setAppointmentType(e.target.value)}
              />
              Phone or Online Consultation
            </label>
            <label>
              <input
                type="radio"
                value="Face"
                checked={appointmentType === "Face"}
                onChange={(e) => setAppointmentType(e.target.value)}
              />
              Face to Face Consultation
            </label>
          </div>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                value="Professional"
                checked={scheduleType === "Professional"}
                onChange={(e) => setScheduleType(e.target.value)}
              />
              Professional Development - RPL
            </label>
            <label>
              <input
                type="radio"
                value="Migration"
                checked={scheduleType === "Migration"}
                onChange={(e) => setScheduleType(e.target.value)}
              />
              Migration Team
            </label>
            <label className="ml-4">
              <input
                type="radio"
                value="Admission"
                checked={scheduleType === "Admission"}
                onChange={(e) => setScheduleType(e.target.value)}
              />
              Admission Team
            </label>
          </div>
          <div>
            <label>Choose Date & Time</label>
            <div className="flex space-x-4">
              <DatePicker
                selected={appointmentDate}
                onChange={(date) => setAppointmentDate(date)}
                className="border p-2 rounded"
                placeholderText="Select Date"
              />
              <select
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                className="border p-2 rounded"
              >
                <option value="">Select Time</option>
                {times.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            onClick={handleNext}
            className="bg-red-500 text-white px-4 py-2 rounded"
            disabled={loading}
          >
            {loading ? "Loading..." : "Next"}
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Personal Information</h2>
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
              required
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
              required
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
              required
            />
          </div>
          <button
            onClick={handleNext}
            className="bg-red-500 text-white px-4 py-2 rounded"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      )}

      {success && <p className="text-green-500 mt-4">{success}</p>}

    </div>
  );
};

export default AppointmentForm;
