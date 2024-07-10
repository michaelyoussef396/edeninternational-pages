"use client";
import React from "react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ href, text, onClick }) => {
  return (
    <Link href={href} passHref>
      <div className="relative inline-block" onClick={onClick}>
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 rounded-lg p-[3px]" />
        <div className="relative px-8 py-2 bg-transparent rounded-[6px] text-white group transition duration-200 hover:bg-red-500">
          {text}
        </div>
      </div>
    </Link>
  );
};

export default Button;
