import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Linkedin, Github, Heart } from 'lucide-react';

const FooterSection: React.FC = () => {
  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Prizes', href: '#prizes' },
    { label: 'Judges', href: '#judges' },
    { label: 'Sponsors', href: '#sponsors' },
    { label: 'Register', href: '#register' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Terms', href: '#terms' },
    { label: 'Privacy', href: '#privacy' },
  ];
  
  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com' },
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com' },
  ];
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-space-blue relative overflow-hidden pt-16 pb-8">
      {/* Background glow elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-electric-purple/30" />
      <div className="absolute -top-40 right-1/3 w-96 h-96 rounded-full bg-electric-purple/10 blur-[120px] z-0" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-12">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-display font-bold text-stellar-white mb-4">
              <span className="text-neon-cyan">HACKATHON</span>.DEV
            </h2>
            <p className="text-stellar-white/70 mb-6">
              The World's Largest Hackathon, bringing together developers from around the globe to set a record for the most web apps built in 7 hours.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-cosmic-black/50 rounded-full text-stellar-white/80 hover:text-neon-cyan hover:bg-cosmic-black/70 transition-colors duration-200"
                  whileHover={{ y: -3 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <h3 className="text-lg font-display font-bold text-neon-cyan mb-4">Event</h3>
                <ul className="space-y-2">
                  <li><a href="#about" className="text-stellar-white/70 hover:text-neon-cyan transition-colors duration-200">About</a></li>
                  <li><a href="#prizes" className="text-stellar-white/70 hover:text-neon-cyan transition-colors duration-200">Prizes</a></li>
                  <li><a href="#judges" className="text-stellar-white/70 hover:text-neon-cyan transition-colors duration-200">Judges</a></li>
                  <li><a href="#sponsors" className="text-stellar-white/70 hover:text-neon-cyan transition-colors duration-200">Sponsors</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-display font-bold text-neon-cyan mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-stellar-white/70 hover:text-neon-cyan transition-colors duration-200">FAQ</a></li>
                  <li><a href="#" className="text-stellar-white/70 hover:text-neon-cyan transition-colors duration-200">Guidelines</a></li>
                  <li><a href="#" className="text-stellar-white/70 hover:text-neon-cyan transition-colors duration-200">Schedule</a></li>
                  <li><a href="#" className="text-stellar-white/70 hover:text-neon-cyan transition-colors duration-200">Support</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-display font-bold text-neon-cyan mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-stellar-white/70 hover:text-neon-cyan transition-colors duration-200">Terms</a></li>
                  <li><a href="#" className="text-stellar-white/70 hover:text-neon-cyan transition-colors duration-200">Privacy</a></li>
                  <li><a href="#" className="text-stellar-white/70 hover:text-neon-cyan transition-colors duration-200">Cookies</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-display font-bold text-neon-cyan mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li><a href="mailto:info@hackathon.dev" className="text-stellar-white/70 hover:text-neon-cyan transition-colors duration-200">info@hackathon.dev</a></li>
                  <li><a href="#" className="text-stellar-white/70 hover:text-neon-cyan transition-colors duration-200">Press Kit</a></li>
                  <li><a href="#" className="text-stellar-white/70 hover:text-neon-cyan transition-colors duration-200">Partnerships</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-electric-purple/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stellar-white/50 text-sm mb-4 md:mb-0">
            &copy; {currentYear} The World's Largest Hackathon. All rights reserved.
          </p>
          <p className="text-stellar-white/50 text-sm flex items-center">
            Made with <Heart className="w-4 h-4 text-vibrant-pink mx-1" /> by <a href="https://bolt.new" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline ml-1">bolt.new</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection; 