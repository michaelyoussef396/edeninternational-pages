import { Metadata } from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import "@/app/globals.css"
import { locales } from '@/config';
import {unstable_setRequestLocale} from 'next-intl/server';
import TopNav from '@/components/TopNav';
import { LocaleLayoutProps } from '@/types';
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export const metadata: Metadata = {
  title: "Eden International",
  description: "Generated by create next app",
};
export default async function LocaleLayout({
  children,
  params: { locale }
}: LocaleLayoutProps) {
  unstable_setRequestLocale(locale);
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <TopNav />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

