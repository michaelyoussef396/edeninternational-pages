import { InvertedContentSectionProps } from '@/types';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

const InvertedContentSection: React.FC<InvertedContentSectionProps> = ({
  title,
  highlightText,
  content,
  imageSrc,
  backgroundImageSrc,
}) => {
  const sectionStyle = backgroundImageSrc
    ? {
        backgroundImage: `url(${backgroundImageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {};

  return (
    <div
      className={`flex flex-col md:flex-row-reverse items-center justify-center py-8 px-4 md:px-16 bg-black text-white`}
      style={sectionStyle}
    >
      <div className="w-full md:w-1/2 text-center md:text-left md:pr-8 mb-8 md:mb-0 flex-shrink-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 break-words">
          {title} <span className="text-red-500">{highlightText}</span>
        </h1>
        <p className="text-lg leading-relaxed">{content}</p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-start flex-shrink-0">
        <Image
          src={imageSrc}
          alt={highlightText}
          width={400}
          height={300}
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default InvertedContentSection;
