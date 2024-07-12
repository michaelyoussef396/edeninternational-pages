import AppointmentForm from "./AppointmentForm";
import { useTranslations } from 'next-intl';

const PointCalc = () => {
  const t = useTranslations('pointCalc');

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 p-4 border-r md:border-r-0 md:border-b border-gray-200">
          <h2 className="text-2xl font-bold text-center md:text-left">{t('otherUsefulLinks')}</h2>
          <ul className="space-y-2 mt-4 text-center md:text-left">
            <li className="flex items-center justify-center md:justify-start">
              <span className="text-red-500 mr-2">✔</span>
              <a href="/migration" className="text-red-500 hover:underline">{t('migration')}</a>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <span className="text-red-500 mr-2">✔</span>
              <a href="/temporary-skill-shortage-tss-visa-subclass-482" className="text-red-500 hover:underline">{t('tssVisa')}</a>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <span className="text-red-500 mr-2">✔</span>
              <a href="/training-visa-subclass-407" className="text-red-500 hover:underline">{t('trainingVisa')}</a>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <span className="text-red-500 mr-2">✔</span>
              <a href="/skilled-independent-visa" className="text-red-500 hover:underline">{t('independentVisa')}</a>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <span className="text-red-500 mr-2">✔</span>
              <a href="/skilled-nominated-visa" className="text-red-500 hover:underline">{t('nominatedVisa')}</a>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <span className="text-red-500 mr-2">✔</span>
              <a href="/skilled-work-regional-visa" className="text-red-500 hover:underline">{t('regionalVisa')}</a>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <span className="text-red-500 mr-2">✔</span>
              <a href="/sponsored-jobs" className="text-red-500 hover:underline">{t('sponsoredJobs')}</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-2/3 p-4 mt-8 md:mt-0">
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
};

export default PointCalc;
