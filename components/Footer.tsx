"use client";
import React from 'react';
import { CiInstagram } from "react-icons/ci";
import { FaTwitter, FaFacebookSquare, FaTiktok } from "react-icons/fa";
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { images } from '@/constants/images';

interface FooterProps {
  locale: string;
}

const Footer: React.FC<FooterProps> = ({ locale }) => {
  const t = useTranslations('footer');

  const getLocalizedLink = (path: string) => `/${locale}${path}`;

  return (
    <footer className="bg-black text-white py-12 bg-cover bg-center bg-no-repeat">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start p-3">
            <Image src={images.logo} alt="Eden International" width={200} height={100} />
            <a href="mailto:info.edeninternational@gmail.com">
              <p className="mt-4">info.edeninternational@gmail.com</p>
            </a>
            <p className="mt-2">+61 452 031 982</p>
            <div className="flex mt-4 space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61561459479275"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-heroRed"
              >
                <FaFacebookSquare size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@eden.internationall"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-heroRed"
              >
                <FaTiktok size={24} />
              </a>
              <a
                href="https://www.instagram.com/eden.internationall/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-heroRed"
              >
                <CiInstagram size={24} />
              </a>
            </div>
          </div>
          <div className='flex flex-col items-center md:items-start mt-9'>
            <ul className='text-lg'>
              <li className="mb-2">
                <a href={getLocalizedLink("/Professional-year")} className="hover:text-heroRed">{t('explore')}</a>
              </li>
              <li className="mb-2">
                <a href={getLocalizedLink("/affiliate-institutions")} className="hover:text-heroRed">{t('affiliates')}</a>
              </li>
              <li>
                <a href={getLocalizedLink("/contact-us")} className="hover:text-heroRed">{t('contactUs')}</a>
              </li>
            </ul>
          </div>
          <div className='flex flex-col items-center md:items-start mt-9'>
            <ul className='text-lg'>
              <li className="mb-2">
                <a href={getLocalizedLink("/point-calculation")} className="hover:text-heroRed">{t('usefulLinks')}</a>
              </li>
              <li className="mb-2">
                <a href={getLocalizedLink("/student-visa")} className="hover:text-heroRed">{t('studentVisa')}</a>
              </li>
              <li>
                <a href={getLocalizedLink("/migration")} className="hover:text-heroRed">{t('migration')}</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-semibold mb-4">{t('recentProjects')}</h2>
            <div className="grid grid-cols-3 gap-2">
              <Image src={images.Footer1} alt="Project 1" width={64} height={64} />
              <Image src={images.Footer2} alt="Project 2" width={64} height={64} />
              <Image src={images.Footer3} alt="Project 3" width={64} height={64} />
              <Image src={images.Footer4} alt="Project 4" width={64} height={64} />
              <Image src={images.Footer5} alt="Project 5" width={64} height={64} />
              <Image src={images.Footer6} alt="Project 6" width={64} height={64} />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>{t('copyRights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
