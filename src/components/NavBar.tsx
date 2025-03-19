import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { Menu, X } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'About', href: '#about' },
    { title: 'Prizes', href: '#prizes' },
    { title: 'Judges', href: '#judges' },
    { title: 'Sponsors', href: '#sponsors' },
    { title: 'FAQ', href: '#faq' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        ease: 'easeOut'
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const mobileNavLinkVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? ' backdrop-blur-xs shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="flex items-center"
          >
            <h1 className="text-stellar-white font-display text-2xl font-bold">
              <span className="text-neon-cyan">HACKATHON</span>.DEV
            </h1>
          </a>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex items-center space-x-8"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.title}
                href={link.href}
                className="text-stellar-white/90 hover:text-neon-cyan font-medium transition-colors duration-200"
                variants={linkVariants}
              >
                {link.title}
              </motion.a>
            ))}
            <motion.div variants={linkVariants}>
            <Button 
              size="lg" 
              variant="outline" 
              href="#register"
              className="border-white/20 text-white hover:bg-white/5 transition-all"
            >
              Register Now
            </Button>
            </motion.div>
          </motion.nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-stellar-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 top-[68px] bg-space-blue/95 backdrop-blur-lg z-40 md:hidden"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  className="text-stellar-white/90 hover:text-neon-cyan text-2xl font-medium"
                  variants={mobileNavLinkVariants}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.title}
                </motion.a>
              ))}
              <motion.div variants={mobileNavLinkVariants}>
                <Button variant="primary" size="lg" href="#register">Register Now</Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar; 