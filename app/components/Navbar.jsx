'use client';
import SuperLink from './SuperLink';
import { useState } from 'react';

export default function Navbar() {
  const [contrdinates, setCordinated] = useState({
    mx: 0,
    my: 0,
  });
  function handleMouseMove(ev) {
    setCordinated(() => ({
      mx: ev.clientX,
      my: ev.clientY,
    }));
  }
  const links = [
    {
      href: 'showcase',
      content: 'Showcase',
    },
    {
      href: 'contact',
      content: 'Contact Me',
    },
  ];
  return (
    <ul
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setCordinated((_) => ({ mx: 0, my: 0 }))}
      className='relative mx-auto mt-4 flex w-fit gap-3 rounded bg-black/30 px-8 py-3 tracking-wider shadow-softer shadow-light/10 sm:gap-6 sm:px-12 sm:py-4'
    >
      {links.map((link) => (
        <li key={link.href} className='text-md sm:text-xl'>
          <SuperLink {...contrdinates} href={link.href}>
            {link.content}
          </SuperLink>
        </li>
      ))}
    </ul>
  );
}
