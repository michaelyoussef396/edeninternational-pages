import React from 'react';
import { ReusableMigrationVisaProps } from '@/types';



const ReusableMigrationVisa: React.FC<ReusableMigrationVisaProps> = ({ data }) => {
  return (
    <div className="container mx-auto px-4 md:px-20 py-12">
      <h2 className="text-4xl font-bold text-center mb-8">{data.title}</h2>
      <p className="mb-4 text-center md:text-left">{data.description}</p>
      {data.sections.map((section, index) => (
        <div key={index}>
          <h3 className="text-2xl font-bold mb-4 text-center md:text-left">{section.heading}</h3>
          {section.subSections?.map((subSection, subIndex) => (
            <div key={subIndex}>
              <h4 className="text-xl font-bold mb-2 text-center md:text-left">{subSection.subHeading}</h4>
              {subSection.details.map((detail, detailIndex) => (
                <div key={detailIndex}>
                  <p className="mb-2 text-center md:text-left"><strong>{detail.title}</strong></p>
                  <p className="mb-4 text-center md:text-left">{detail.content}</p>
                </div>
              ))}
            </div>
          ))}
          {section.listItems && (
            <ul className="list-disc list-inside mb-4 text-center md:text-left">
              {section.listItems.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          )}
          {section.note && <p className="mb-4 text-center md:text-left">{section.note}</p>}
          {section.content && <p className="mb-4 text-center md:text-left">{section.content}</p>}
        </div>
      ))}
    </div>
  );
};

export default ReusableMigrationVisa;
