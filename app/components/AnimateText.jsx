'use client';
import React, { useState, useEffect, useRef } from 'react';

const AnimateText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  function animate() {
    let iteration = 0;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split('')
          .map((letter, index) => {
            if (index < Math.floor(iteration)) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join(''),
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 4;
    }, 30);
  }

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <span
      onMouseOver={animate}
      onClick={animate}
      className={`inline-block w-16 font-mono uppercase text-accent sm:w-24 ${className}`}
    >
      {displayText}
    </span>
  );
};

export default AnimateText;
