import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CountdownTimer from '../components/CountdownTimer';
import Button from '../components/Button';
import { ArrowRight, Code, Globe, Award, DollarSign } from 'lucide-react';
import gsap from 'gsap';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  
  // Assuming the hackathon is 3 months from now
  const hackathonDate = new Date();
  hackathonDate.setMonth(hackathonDate.getMonth() + 3);
  
  // SVG data for star icon
  const starIconSvg = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nMWVtJyBoZWlnaHQ9JzFlbScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEgMjEuOSc+PHBhdGggZD0nTTI0LjEgMTkuM2MtNC43IDAtNy0yLjctNy02LjFzMy4yLTcuNyA3LjktNy43IDcgMi43IDcgNi4xLTMuMiA3LjctNy45IDcuN1ptLjItNC4zYzEuNiAwIDIuNy0xLjUgMi43LTMuMXMtLjgtMi0yLjItMi0yLjcgMS41LTIuNyAzLjEuOCAyIDIuMiAyWk0zNyAxOWgtNC45bDQtMTguMkg0MWwtNCAxOC4xWicvPjxwYXRoIGQ9J005LjYgMTkuM2MtMS41IDAtMy0uNS0zLjgtMS43TDUuNSAxOSAwIDIxLjkuNiAxOSA0LjYuOGg0LjlMOC4xIDcuMmMxLjEtMS4yIDIuMi0xLjcgMy42LTEuNyAzIDAgNC45IDEuOSA0LjkgNS41cy0yLjMgOC4zLTcgOC4zWm0xLjktNy4zYzAgMS43LTEuMiAzLTIuOCAzcy0xLjctLjMtMi4yLS45bC44LTMuM2MuNi0uNiAxLjItLjkgMi0uOSAxLjIgMCAyLjIuOSAyLjIgMi4yWicgc3R5bGU9J2ZpbGwtcnVsZTpldmVub2RkJy8+PHBhdGggZD0nTTQ2LjEgMTkuM2MtMi44IDAtNC45LTEtNC45LTMuM3MwLS43LjEtMWwxLjEtNC45aC0yLjJsMS00LjJoMi4ybC44LTMuNkw0OS43IDBsLS42IDIuMy0uOCAzLjZINTFsLTEgNC4yaC0yLjdsLS43IDMuMnYuNmMwIC42LjQgMS4xIDEuMiAxLjFzLjYgMCAuNy0uMXYzLjljLS41LjQtMS40LjUtMi4zLjVaJy8+PC9zdmc+";
  
  
  // Create star particles that stay throughout the site
  useEffect(() => {
    if (!starsRef.current) return;
    
    const starsContainer = starsRef.current;
    const starsCount = 70; // Reduced for more minimalist look
    
    for (let i = 0; i < starsCount; i++) {
      // Create image element for star
      const starImg = document.createElement('img');
      starImg.src = starIconSvg;
      starImg.className = 'absolute z-0';
      
      // Random position, size and opacity
      const size = Math.random() * 22 + 4; // Smaller stars
      const posX = Math.random() * 100;
      const posY = Math.random() * 400; // Extended vertical range for scrolling effect
      const opacity = Math.random() * 0.6 + 0.1; // More subtle
      const rotation = Math.random() * 360;
      
      starImg.style.width = `${size}px`;
      starImg.style.height = `${size}px`;
      starImg.style.left = `${posX}%`;
      starImg.style.top = `${posY}%`;
      starImg.style.opacity = `${opacity}`;
      starImg.style.filter = 'brightness(1.5) saturate(0) invert(1)'; // Make white stars
      starImg.style.transform = `rotate(${rotation}deg)`;
      
      starsContainer.appendChild(starImg);
      
      // Animate each star with subtle movement
      gsap.to(starImg, {
        motionPath: {
          path: [{x: 0, y: 0}, 
                 {x: 25, y: -25},
                 {x: 50, y: 0},
                 {x: 25, y: 25},
                 {x: 0, y: 0}],
          curviness: 1.5
        },
        rotation: `${rotation + 360}`,
        opacity: gsap.utils.random(0.1, 0.5),
        duration: gsap.utils.random(20, 40),
        repeat: -1,
        ease: "none",
        delay: Math.random() * 5,
      });

      // Create 2-3 smaller companion stars
      // for (let j = 0; j < Math.floor(Math.random() * 2) + 1; j++) {
      //   const smallStarImg = document.createElement('img');
      //   smallStarImg.src = starIconSvg;
      //   smallStarImg.className = 'absolute z-0';
        
      //   const smallSize = size * 0.4;
      //   const offsetX = Math.random() * 30 - 15;
      //   const offsetY = Math.random() * 30 - 15;
        
      //   smallStarImg.style.width = `${smallSize}px`;
      //   smallStarImg.style.height = `${smallSize}px`;
      //   smallStarImg.style.left = `${parseFloat(starImg.style.left) + offsetX}%`;
      //   smallStarImg.style.top = `${parseFloat(starImg.style.top) + offsetY}%`;
      //   smallStarImg.style.opacity = `${opacity * 0.7}`;
      //   smallStarImg.style.filter = 'brightness(1.5) saturate(0) invert(1)';
        
      //   starsContainer.appendChild(smallStarImg);

      //   gsap.to(smallStarImg, {
      //     motionPath: {
      //       path: [{x: 0, y: 0},
      //              {x: 15, y: -15},
      //              {x: 30, y: 0},
      //              {x: 15, y: 15},
      //              {x: 0, y: 0}],
      //       curviness: 1.5
      //     },
      //     rotation: 360,
      //     opacity: gsap.utils.random(0.05, 0.3),
      //     duration: gsap.utils.random(15, 30),
      //     repeat: -1,
      //     ease: "none",
      //     delay: Math.random() * 3,
      //   });
      // }
    }
    
    return () => {
      while (starsContainer.firstChild) {
        starsContainer.removeChild(starsContainer.firstChild);
      }
    };
  }, []);
  
  // Create spotlight effect that follows scroll position
  useEffect(() => {
    if (!spotlightRef.current) return;
    
    const spotlight = spotlightRef.current;
    
    // Listen to scroll events to update spotlight position
    const handleScroll = () => {
      // Calculate spotlight position based on scroll
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      const yPosition = 20 + scrollPercent * 60; // Move spotlight down as user scrolls
      
      // Update spotlight position
      spotlight.style.background = `radial-gradient(
        circle at 50% ${yPosition}%, 
        rgba(138, 43, 226, 0.15) 0%, 
        rgba(0, 255, 255, 0.08) 20%, 
        transparent 60%
      )`;
    };
    
    // Mouse move event for additional reactivity
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      
      // Get current background
      const currentBg = spotlight.style.background;
      // Extract current y position percentage
      const currentYMatch = currentBg.match(/at\s+(\d+\.?\d*)%\s+(\d+\.?\d*)%/);
      const currentY = currentYMatch ? parseFloat(currentYMatch[2]) : 50;
      
      // Update spotlight with x position from mouse, keeping y from scroll
      spotlight.style.background = `radial-gradient(
        circle at ${50 + (x - 0.5) * 20}% ${currentY}%, 
        rgba(138, 43, 226, 0.15) 0%, 
        rgba(0, 255, 255, 0.08) 20%, 
        transparent 60%
      )`;
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial position
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
    hidden: { 
      y: 30, 
      opacity: 0,
      filter: "blur(5px)"
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 0.5
      }
    }
  };
  
  const statsItems = [
    { icon: <Code className="text-neon-cyan w-6 h-6" />, value: '7h', label: 'Coding Marathon' },
    { icon: <Globe className="text-neon-cyan w-6 h-6" />, value: 'Global', label: 'Participation' },
    { icon: <Award className="text-neon-cyan w-6 h-6" />, value: '$1M+', label: 'in Prizes' },
  ];
  
  // Scroll-based parallax animations
  const { scrollYProgress } = useScroll({
    target: sectionRef
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  
  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen overflow-hidden">
      {/* Black background */}
      <div className="fixed inset-0 bg-black z-0" />
      
      {/* Subtle star particles */}
      <div ref={starsRef} className="fixed inset-0 overflow-hidden" />
      
      {/* Spotlight effect that follows scroll */}
      <div ref={spotlightRef} className="fixed inset-0 z-[2]" />
      
      {/* Grid lines for futuristic effect - very subtle */}
      <div className="fixed inset-0 z-[3] opacity-5" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, rgba(0, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} 
      />
      
      {/* Falling dollar animations container */}
      {/* <div ref={dollarsRef} className="fixed inset-0 overflow-hidden z-[4] pointer-events-none" /> */}
      
      {/* Hero content - centered with enhanced animation */}
      <motion.div 
        className="relative z-[10] container mx-auto px-4 py-20 md:py-40 flex justify-center items-center"
        style={{ 
          opacity: heroOpacity,
          scale: heroScale,
          y: heroY
        }}
      >
        <motion.div
          className="text-center max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Top tag */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <div className="inline-block px-4 py-2 rounded-full bg-[#1E1E2E]/40 border border-[#383850]/30 backdrop-blur-sm">
              <p className="text-white/90 font-mono text-sm tracking-wider">
                <a href="https://bolt.new" target="_blank" rel="noopener noreferrer" className="text-neon-cyan font-semibold">bolt.new</a> presents
              </p>
            </div>
          </motion.div>
          
          {/* Main headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 md:mb-5 leading-none tracking-tight"
          >
            The World's <span className="text-6xl md:text-8xl lg:text-9xl">Largest</span>
            <div className="inline-block relative mx-2">
              <span className="relative z-10 text-neon-cyan text-6xl md:text-8xl lg:text-9xl">Hackathon</span>
              <div className="absolute -inset-1 bg-neon-cyan/10 blur-md rounded-lg z-0">
              </div>
            </div>
          </motion.h1>
          
          
          {/* Main description with prizes highlight */}
          <motion.div variants={itemVariants} className="mb-8 relative">
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of developers around the globe to set the world record for the most web apps built in 24 hours.
            </p>
             {/* Stats items */}
             <div
            className="grid grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto my-10"
          >
            {statsItems.map((item, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center p-3 md:p-5 rounded-lg bg-[#121224]/50 border border-[#2A2A40]/30 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(0, 255, 255, 0.3)',
                  transition: { duration: 0.2 }
                }}
              >
                <div className="rounded-full bg-[#1A1A30]/90 p-2 mb-2">
                  {item.icon}
                </div>
                <div className="text-xl md:text-2xl font-display font-bold text-neon-cyan">{item.value}</div>
                <div className="text-white/70 text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>
          </motion.div>
          
          {/* Register and learn more buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16"
          >
            <Button 
              size="lg" 
              variant="outline" 
              href="#register"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
              className="bg-neon-cyan/80 hover:bg-white/5 transition-all text-black shadow-lg shadow-neon-cyan/20 hover:shadow-xl hover:shadow-neon-cyan/30 transition-all"
            >
              Register Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              href="#about"
              className="border-white/20 text-white hover:bg-white/5 transition-all"
            >
              Learn More
            </Button>
          </motion.div>
          
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 