import React from 'react';
import footerLinks from './footerLinks';

function Footer() {
  // Split the links array into two parts
  const firstHalf = footerLinks.slice(0, Math.ceil(footerLinks.length / 2)); // First 6
  const secondHalf = footerLinks.slice(Math.ceil(footerLinks.length / 2)); // Last 6

  return (
    <div className='text-white flex flex-col md:flex-row justify-around relative z-10'>
      <div className='flex flex-col gap-8'>
        <h1 className='text-2xl font-bold mb-4'>Let there be change</h1>

        <div className="grid grid-cols-2 ">
          <div className="flex flex-col gap-4">
            {firstHalf.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="hover:underline transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {secondHalf.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="hover:underline transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <p>© 2024 Accenture. All Rights Reserved.</p>
      </div>

      <div>Animation</div>
    </div>
  );
}

export default Footer;
