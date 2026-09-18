import MainHeader from '@/components/main-header/main-header';
import './globals.css';

export const metadata = {
  title: 'Afterhours Music Reviews',
  description: 'Music Reviews, shared by a music-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
     
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
