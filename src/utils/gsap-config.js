// Karena GSAP sudah di-load via CDN, kita bisa langsung akses dari window
const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;
const TextPlugin = window.TextPlugin;

// Register plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Fungsi helper untuk scramble text
const scrambleText = (target, options = {}) => {
  const defaults = {
    text: target.innerText,
    duration: 1,
    ease: "none",
    scrambleText: {
      chars: "!<>-_\\/[]{}—=+*^?#________",
      speed: 0.3,
      revealDelay: 0.5,
      tweenLength: false
    }
  };

  return gsap.to(target, {
    ...defaults,
    ...options,
    text: options.text || target.innerText
  });
};

export { gsap, ScrollTrigger, scrambleText }; 