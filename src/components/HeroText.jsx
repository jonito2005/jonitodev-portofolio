import { useEffect, useRef, useState } from 'react';
import { gsap, scrambleText } from '../utils/gsap-config';
import Lottie from 'lottie-react';
import animationData from '../assets/lottie/coding.json';

const HeroText = () => {
  const [isLoading, setIsLoading] = useState(true);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const loaderRef = useRef(null);
  const lottieRef = useRef(null);

  // Data logo bahasa pemrograman
  const programmingLogos = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "React",
      className: "floating-logo-1"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      alt: "Node.js",
      className: "floating-logo-2"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
      className: "floating-logo-3"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      alt: "TypeScript",
      className: "floating-logo-4"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      alt: "Python",
      className: "floating-logo-5"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
      alt: "Tailwind CSS",
      className: "floating-logo-6"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      alt: "HTML5",
      className: "floating-logo-7"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      alt: "CSS3",
      className: "floating-logo-8"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      alt: "PHP",
      className: "floating-logo-9"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      alt: "MySQL",
      className: "floating-logo-10"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      alt: "MongoDB",
      className: "floating-logo-11"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      alt: "Git",
      className: "floating-logo-12"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      alt: "Docker",
      className: "floating-logo-13"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      alt: "Next.js",
      className: "floating-logo-14"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      alt: "Vue.js",
      className: "floating-logo-15"
    },
    {
      src: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/laravel.svg",
      alt: "Laravel",
      className: "floating-logo-16"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      alt: "Bootstrap",
      className: "floating-logo-17"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      alt: "Sass",
      className: "floating-logo-18"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      alt: "PostgreSQL",
      className: "floating-logo-19"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      alt: "Redis",
      className: "floating-logo-20"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
      alt: "Nginx",
      className: "floating-logo-21"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
      alt: "Webpack",
      className: "floating-logo-22"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      alt: "GraphQL",
      className: "floating-logo-23"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      alt: "Firebase",
      className: "floating-logo-24"
    }
  ];

  useEffect(() => {
    const tl = gsap.timeline();

    // Loading Animation
    tl.to(loaderRef.current, {
      duration: 2,
      width: "100%",
      ease: "power2.inOut"
    })
    .to(loaderRef.current, {
      duration: 0.5,
      opacity: 0,
      onComplete: () => setIsLoading(false)
    });

    // Animasi logo melayang
    programmingLogos.forEach((_, index) => {
      gsap.to(`.floating-logo-${index + 1}`, {
        y: "random(-20, 20)", 
        x: "random(-20, 20)",
        rotation: "random(-15, 15)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2
      });
    });

    // Lottie and Text Animations
    tl.set([titleRef.current, subtitleRef.current, lottieRef.current], {
      opacity: 0,
      y: 50
    })
    .to(lottieRef.current, {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "back.out(1.7)"
    })
    .to(titleRef.current, {
      duration: 0.8,
      opacity: 1,
      y: 0,
      ease: "back.out(1.7)"
    }, "-=0.5")
    .add(scrambleText(titleRef.current, {
      text: "Hai, Saya JonitoDev",
      duration: 2,
      scrambleText: {
        chars: "アイウエオカキクケコサシスセソタチツテト",
        speed: 0.3,
        revealDelay: 0.5
      }
    }), "-=0.3")
    .to(subtitleRef.current, {
      duration: 0.8,
      opacity: 1,
      y: 0,
      ease: "back.out(1.7)"
    }, "-=1")
    .add(scrambleText(subtitleRef.current, {
      text: "FullStack Developer & UI/UX Designer",
      duration: 1.5,
      scrambleText: {
        chars: "アイウエオカキクケコサシスセソタチツテト",
        speed: 0.3,
        revealDelay: 0.3
      }
    }), "-=0.5");

  }, []);

  return (
    <>
      {isLoading && (
        <div className="loader-container">
          <div className="loader-text">Loading...</div>
          <div className="loader-bar">
            <div ref={loaderRef} className="loader-progress"></div>
          </div>
        </div>
      )}
      
      <div className="hero-text relative">
        {/* Logo-logo melayang */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {programmingLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className={`absolute w-12 h-12 opacity-20 ${logo.className}`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `translate(-50%, -50%) scale(${0.8 + Math.random() * 0.4})`
              }}
            />
          ))}
        </div>

        <div ref={lottieRef} className="lottie-container relative z-10">
          <Lottie 
            animationData={animationData}
            loop={true}
            autoplay={true}
            rendererSettings={{
              preserveAspectRatio: 'xMidYMid slice'
            }}
            style={{ 
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              margin: '0 auto'
            }}
          />
        </div>
        <h1 ref={titleRef} className="hero-title relative z-10 px-4 text-2xl md:text-4xl lg:text-5xl">
          &nbsp;
        </h1>
        <h2 ref={subtitleRef} className="hero-subtitle relative z-10 px-4 text-lg md:text-xl lg:text-2xl">
          &nbsp;
        </h2>
      </div>
    </>
  );
};

export default HeroText; 