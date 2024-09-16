import { Open_Sans } from 'next/font/google';
import './style.css';

const openSans = Open_Sans({ subsets: ['greek'] });

export const metadata = {
  title: 'Oumar Portfolio',
  description: 'Oumar Portfolio ',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='select-none bg-dark text-light'>
      <body className={`${openSans.className} font-[Open_Sans]`}>
        {children}
      </body>
    </html>
  );
}
