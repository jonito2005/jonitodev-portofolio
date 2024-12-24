import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from '../utils/gsap-config';
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(ScrambleTextPlugin);

const Hero = () => {
  const greetingRef = useRef(null);
  const roleRef = useRef(null);

  useEffect(() => {
    const greetings = [
      "Hai, Saya JonitoDev",
      "Hello, I'm JonitoDev",
      "Halo, Saya JonitoDev",
      "こんにちは、JonitoDevです"
    ];

    const roles = [
      "FullStack Developer & UI/UX Designer",
      "Web Developer Expert",
      "Mobile App Developer",
      "Software Engineer"
    ];

    let currentGreeting = 0;
    let currentRole = 0;

    const scrambleGreeting = () => {
      gsap.to(greetingRef.current, {
        duration: 0.5,
        scrambleText: {
          text: greetings[currentGreeting],
          chars: "0123456789!@#$%^&*",
          revealDelay: 0.5,
          speed: 0.3
        }
      });
      currentGreeting = (currentGreeting + 1) % greetings.length;
    };

    const scrambleRole = () => {
      gsap.to(roleRef.current, {
        duration: 0.5,
        scrambleText: {
          text: roles[currentRole],
          chars: "0123456789!@#$%^&*",
          revealDelay: 0.5,
          speed: 0.3
        }
      });
      currentRole = (currentRole + 1) % roles.length;
    };

    const interval = setInterval(() => {
      scrambleGreeting();
      scrambleRole();
    }, 1500);

    // Initial animation
    scrambleGreeting();
    scrambleRole();

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="beranda" className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 ref={greetingRef} className="text-4xl sm:text-6xl font-bold text-gray-100 mb-4">
              Hai, Saya JonitoDev
            </h1>
            <p ref={roleRef} className="text-xl sm:text-2xl text-gray-400 mb-8">
              FullStack Developer & UI/UX Designer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center space-x-4 mt-8"
          >
            <a
              href="#projek"
              className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-lg transition-colors duration-300"
            >
              Lihat Projek
            </a>
            <a
              href="#kontak"
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors duration-300"
            >
              Hubungi Saya
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;