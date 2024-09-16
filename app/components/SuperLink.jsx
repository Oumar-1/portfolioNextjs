'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

function SuperLink({ className, children, mx, my, href, ...props }) {
  const LinkRef = useRef(null);
  const [cor, setCor] = useState({
    x: mx,
    y: my,
  });
  useEffect(() => {
    if (LinkRef.current === null) return;
    const rect = LinkRef.current.getBoundingClientRect();
    setCor(() => {
      return {
        x: mx - rect.left,
        y: my - rect.top - 10,
      };
    });
  }, [mx, my]);
  return (
    <Link
      className={`group relative block overflow-hidden rounded font-mono uppercase shadow-soft shadow-secondary/20 ${className} px-4 py-2 sm:px-6 sm:py-3`}
      href={href}
      ref={LinkRef}
      {...props}
    >
      <span
        style={{
          left: cor.x,
          top: cor.y,
        }}
        className='absolute -left-full -top-full -z-10 aspect-square w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-secondary to-accent blur-md'
      />
      {children}
    </Link>
  );
}

export default SuperLink;
