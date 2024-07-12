"use client";
import { logos } from '@/constants/index';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const ScrollingLogos: React.FC = () => {
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (logosRef.current) {
        logosRef.current.style.transition = 'transform 2s ease-in-out'; // Adjust transition duration to 2 seconds
        logosRef.current.style.transform = 'translateX(-20%)';

        const timeout = setTimeout(() => {
          if (logosRef.current && logosRef.current.firstChild) {
            const firstChild = logosRef.current.firstChild as HTMLElement;
            logosRef.current.appendChild(firstChild);
            logosRef.current.style.transition = 'none';
            logosRef.current.style.transform = 'translateX(0)';
          }
        }, 2000); // Match this timeout duration to the transition duration

        return () => clearTimeout(timeout);
      }
    }, 4000); // Adjust the interval to 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 bg-gray-100">
      <div className="max-w-6xl mx-auto overflow-hidden">
        <div ref={logosRef} className="flex">
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-1/5 px-4">
              <Image width={170} height={180} src={logo} alt={`Logo ${index + 1}`} className="h-24 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingLogos;
