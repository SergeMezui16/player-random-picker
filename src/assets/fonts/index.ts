import localFont from 'next/font/local';
export const euroStile = localFont({
  src: './EurostileBold.ttf',
  display: 'swap',
  variable: '--font-euro-stile',
});

export const europa = localFont({
  src: './europa.ttf',
  display: 'swap',
  variable: '--font-europa',
});

export const ubuntu = localFont({
  src: './Ubuntu-Regular.ttf',
  weight: '500',
  display: 'swap',
  variable: '--font-ubuntu',
  style: 'mono',
});
