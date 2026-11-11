import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import './globals.css';

const vazir = Vazirmatn({
  subsets: ['arabic', 'latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-vazir',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'کُنج | فروشگاه کتاب، کتاب صوتی و پادکست',
  description: 'کنج، کتابخانه شخصی شما با بیش از ۱۰ هزار کتاب الکترونیکی و صوتی در موضوعات گوناگون',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazir.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={vazir.className}>
        {children}
      </body>
    </html>
  );
}

