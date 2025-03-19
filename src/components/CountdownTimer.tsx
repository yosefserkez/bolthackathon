import React from 'react';
import Countdown from 'react-countdown';
import { motion } from 'framer-motion';

type CountdownTimerProps = {
  targetDate: Date;
  className?: string;
};

type TimeUnit = {
  value: number;
  label: string;
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, className = '' }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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

  // Renderer for the countdown
  const renderer = ({ days, hours, minutes, seconds, completed }: { days: number; hours: number; minutes: number; seconds: number; completed: boolean }) => {
    if (completed) {
      return <div className="text-center text-neon-cyan font-display text-2xl">The hackathon is live!</div>;
    }

    const timeUnits: TimeUnit[] = [
      { value: days, label: 'Days' },
      { value: hours, label: 'Hours' },
      { value: minutes, label: 'Minutes' },
      { value: seconds, label: 'Seconds' }
    ];

    return (
      <motion.div 
        className={`flex flex-wrap justify-center gap-4 md:gap-6 ${className}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {timeUnits.map((unit, index) => (
          <motion.div 
            key={unit.label} 
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-electric-purple/20 rounded-xl blur-xl"></div>
              <div className="relative bg-space-blue/80 border border-electric-purple/50 backdrop-blur-sm rounded-xl p-3 md:p-5 min-w-[80px] md:min-w-[100px] flex items-center justify-center">
                <span className="font-display text-3xl md:text-5xl font-bold text-neon-cyan animate-glow">
                  {unit.value.toString().padStart(2, '0')}
                </span>
              </div>
            </div>
            <span className="mt-2 text-sm md:text-base font-medium text-stellar-white/70">{unit.label}</span>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <Countdown date={targetDate} renderer={renderer} />
  );
};

export default CountdownTimer; 