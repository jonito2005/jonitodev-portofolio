import { useEffect } from 'react';
import { gsap } from '../utils/gsap-config';

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // Implementasi smooth scroll sederhana dengan GSAP
    let scrollTween = gsap.to(window, {
      duration: 0.5,
      scrollTo: { y: "#smooth-content", autoKill: true },
      ease: "power2.out"
    });

    const handleWheel = (e) => {
      e.preventDefault();
      let delta = e.deltaY;
      let scrollAmount = delta * 1.5; // Adjust multiplier for speed
      
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: window.scrollY + scrollAmount, autoKill: true },
        ease: "power2.out"
      });
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      scrollTween.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
};

export default SmoothScroll; 