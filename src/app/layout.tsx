// app/layout.tsx
import 'animate.css'; // Import animate.css globally
import './globals.css'; // Import your global styles
import { ReactNode } from 'react';

export const metadata = {
  title: 'My Next.js App',
  description: 'A cool Next.js app using the new app directory',
};

interface LayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
         <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
