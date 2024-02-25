// import createMiddleware from 'next-intl/middleware';

import { NextRequest } from 'next/server';

// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: ['en', 'fr'],

//   // Used when no locale matches
//   defaultLocale: 'en',
// });

// export const config = {
//   // Match only internationalized pathnames
//   matcher: ['/', '/(fr|en)/:path*'],
// };

let locales = ['en-US', 'nl-NL', 'nl'];

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  console.log('ee');
  return request.headers.get('Accept-Language') ?? 'fr';
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    '/',
  ],
};
