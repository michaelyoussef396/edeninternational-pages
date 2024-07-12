// components/Button.tsx
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href: string;
  text: string;
  locale: string;
}

const Button: React.FC<ButtonProps> = ({ href, text, locale }) => {
  const getLocalizedLink = (path: string) => `/${locale}${path}`;

  return (
      <a href={getLocalizedLink(href)} className="bg-red-600 text-white py-2 px-4 rounded">{text}</a>
  );
};

export default Button;
