'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';
import { useTranslations } from 'next-intl';

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('languages');

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <label className='border-2 rounded'>
      <p className='sr-only'>Change language</p>
      <select
        value={locale}
        className='bg-transparent py-2'
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value='en'>{t('en')}</option>
        <option value='ar'>{t('ar')}</option>
        <option value='hi'>{t('hi')}</option>
        <option value='fr'>{t('fr')}</option>
        <option value='es'>{t('es')}</option>
        <option value='it'>{t('it')}</option>
        <option value='hr'>{t('hr')}</option>
        <option value='tr'>{t('tr')}</option>
        <option value='mt'>{t('mt')}</option>
        <option value='de'>{t('de')}</option>
        <option value='ph'>{t('fil')}</option>
        <option value='kr'>{t('ko')}</option>
        <option value='cmn'>{t('cmn')}</option>
        <option value='si'>{t('si')}</option>
        <option value='sr'>{t('sr')}</option>
        <option value='pi'>{t('pi')}</option>
      </select>
    </label>
  );
}
