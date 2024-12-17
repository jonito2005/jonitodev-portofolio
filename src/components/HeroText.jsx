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
      
      <div className="hero-text">
        <div ref={lottieRef} className="lottie-container">
          <Lottie 
            animationData={animationData}
            loop={true}
            autoplay={true}
            rendererSettings={{
              preserveAspectRatio: 'xMidYMid slice'
            }}
            style={{ 
              width: 400,
              height: 400,
              margin: '0 auto'
            }}
          />
        </div>
        <h1 ref={titleRef} className="hero-title">
          &nbsp;
        </h1>
        <h2 ref={subtitleRef} className="hero-subtitle">
          &nbsp;
        </h2>
      </div>
    </>
  );
};

export default HeroText; 