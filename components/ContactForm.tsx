"use client"
import { FC, useState } from 'react';
import { useTranslations } from 'next-intl'; // Adjust this import based on your specific library

const ContactForm: FC = () => {
  const t = useTranslations('contactForm'); // Load translations from 'en.json' (assuming it's configured with 'en' locale)
  
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSuccess(t('successMessage')); // Use translated success message
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        const result = await response.json();
        setError(result.error || t('errorMessage')); // Use translated error message
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setError(t('errorMessage')); // Use translated error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-8">
          {t('title')}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-4 items-center">
            <input
              type="text"
              name="name"
              placeholder={t('namePlaceholder')}
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded border"
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t('emailPlaceholder')}
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded border"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder={t('phonePlaceholder')}
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 rounded border"
            />
            <textarea
              name="message"
              placeholder={t('messagePlaceholder')}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded border"
              required
            />
            <button
              type="submit"
              className="bg-red-500 text-white font-bold py-2 px-4 rounded"
              disabled={loading}
            >
              {loading ? t('sendingButton') : t('submitButton')}
            </button>
          </div>
        </form>
        {success && <p className="text-green-500 mt-4">{success}</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </section>
  );
};

export default ContactForm;
