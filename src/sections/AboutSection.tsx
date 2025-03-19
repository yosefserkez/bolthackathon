import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Users, Trophy, Calendar } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };
  
  const featureItems = [
    {
      icon: <Zap className="w-8 h-8 text-neon-cyan" />,
      title: "7-Hour Coding Sprint",
      description: "A day of intense coding to build and deploy a functioning web app from scratch.",
    },
    {
      icon: <Users className="w-8 h-8 text-neon-cyan" />,
      title: "Global Participation",
      description: "Connect with developers around the world in a massive collaborative event.",
    },
    {
      icon: <Trophy className="w-8 h-8 text-neon-cyan" />,
      title: "World Record Attempt",
      description: "Be part of history as we try to set a world record for the most web apps created in 24 hours.",
    },
    {
      icon: <Calendar className="w-8 h-8 text-neon-cyan" />,
      title: "Virtual Event",
      description: "Participate from anywhere in the world. All you need is a computer and an internet connection.",
    },
  ];
  
  return (
    <section id="about" className="relative py-10 md:py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/images/globe-bg.svg')] bg-no-repeat bg-center opacity-10 z-0" />
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-stellar-white mb-6">
              Setting a <span className="text-neon-cyan text-4xl md:text-6xl">World Record</span> Together
            </h2>
            <p className="text-lg text-stellar-white/70 max-w-3xl mx-auto">
              The World's Largest Hackathon is not just a competition—it's a global movement to showcase the collective power of developers. We're aiming to set the world record for the sheer number of web apps built in a single day.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {featureItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex p-6 rounded-xl bg-space-blue/30 border border-electric-purple/20 backdrop-blur-sm hover:border-electric-purple/40 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(138, 43, 226, 0.3)' }}
              >
                <div className="mr-5 p-3 bg-space-blue rounded-lg self-start">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-stellar-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stellar-white/70">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            className="text-center p-8 md:p-10 rounded-2xl bg-gradient-to-br from-space-blue/60 to-electric-purple/20 border border-electric-purple/30"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-stellar-white mb-4">
              How It Works
            </h3>
            <p className="text-lg text-stellar-white/80 mb-6 max-w-3xl mx-auto">
              Join thousands of developers for a 24-hour virtual hackathon where everyone builds their own web app. Submit your creation to be counted toward our record-breaking goal, and compete for a share of over $1 million in prizes across multiple categories.
            </p>
            <div className="inline-flex items-center py-2 px-4 rounded-full bg-stellar-white/10 text-neon-cyan font-medium">
              <span className="mr-2">Date:</span> <span className="font-bold">TBD - Coming Soon</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 