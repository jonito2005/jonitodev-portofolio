import { useEffect, useRef } from 'react';
import { scrambleText } from '../utils/gsap-config';

const YourComponent = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // Contoh penggunaan basic
    scrambleText(textRef.current);

    // Atau dengan opsi kustom
    scrambleText(textRef.current, {
      text: "Text Baru",
      duration: 2,
      ease: "power2.inOut",
      scrambleText: {
        chars: "アイウエオカキクケコサシスセソタチツテト", // Karakter Jepang
        speed: 0.4,
        revealDelay: 0.7
      }
    });
  }, []);

  return (
    <div>
      <h1 ref={textRef}>Text Awal</h1>
    </div>
  );
};

export default YourComponent; 