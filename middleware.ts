import createMiddleware from 'next-intl/middleware';
import { locales } from './config';

export default createMiddleware({
  locales,
  defaultLocale: 'en',
});

export const config = {
  matcher: ['/', '/(ar|en|hi|fr|es|it|hr|tr|mt|de|fil|ko|cmn|si|sr|kur|pl)/:path*']
};
