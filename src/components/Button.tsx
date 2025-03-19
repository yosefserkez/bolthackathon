import React from 'react';
import { motion } from 'framer-motion';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  disabled = false,
  icon,
  iconPosition = 'left',
  type = 'button',
}) => {
  const baseStyles = 'font-display inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 relative overflow-hidden';
  
  const variantStyles = {
    primary: 'bg-electric-purple text-white hover:bg-opacity-90 border-2 border-electric-purple shadow-lg shadow-electric-purple/20',
    secondary: 'bg-neon-cyan text-space-blue hover:bg-opacity-90 border-2 border-neon-cyan shadow-lg shadow-neon-cyan/20',
    outline: 'bg-transparent border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10',
    ghost: 'bg-transparent text-neon-cyan hover:bg-space-blue/30',
  };
  
  const sizeStyles = {
    sm: 'text-sm py-1.5 px-3 gap-1.5',
    md: 'text-base py-2.5 px-5 gap-2',
    lg: 'text-lg py-3 px-6 gap-2.5',
  };
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`;
  
  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </>
  );
  
  const buttonAnimation = {
    tap: { scale: 0.98 },
    hover: { 
      y: -3,
      boxShadow: variant !== 'ghost' ? '0 10px 15px -3px rgba(138, 43, 226, 0.3)' : 'none'
    }
  };
  
  if (href && !disabled) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        whileHover="hover"
        whileTap="tap"
        variants={buttonAnimation}
      >
        {buttonContent}
      </motion.a>
    );
  }
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      whileHover="hover"
      whileTap="tap"
      variants={buttonAnimation}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button; 