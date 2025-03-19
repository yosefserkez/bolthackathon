import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../components/Button';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const RegisterSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    experience: '',
    interests: '',
    hearAbout: '',
  });
  
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setSubmissionStatus('success');
    
    // In a real app, you would do something like:
    // try {
    //   await submitFormToAPI(formState);
    //   setSubmissionStatus('success');
    // } catch (error) {
    //   setSubmissionStatus('error');
    // }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
  
  const formFieldClass = 'bg-cosmic-black/50 border border-electric-purple/30 rounded-lg p-3 text-stellar-white w-full focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-colors duration-200';
  const labelClass = 'text-stellar-white/90 font-medium mb-2 block';
  
  return (
    <section id="register" className="relative py-20 md:py-32 bg-cosmic-black overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute -top-40 right-1/4 w-96 h-96 rounded-full bg-electric-purple/10 blur-[120px] z-0" />
      <div className="absolute -bottom-40 left-1/4 w-96 h-96 rounded-full bg-neon-cyan/10 blur-[120px] z-0" />
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-stellar-white mb-6">
              Register for the <span className="text-neon-cyan">Hackathon</span>
            </h2>
            <p className="text-lg text-stellar-white/70 max-w-3xl mx-auto">
              Join thousands of developers from around the world to set a world record and compete for over $1 million in prizes.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <div className="p-6 md:p-8 rounded-2xl bg-space-blue/30 border border-electric-purple/30 backdrop-blur-sm h-full">
                <h3 className="text-2xl font-display font-bold text-stellar-white mb-6">
                  Why Participate?
                </h3>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="bg-electric-purple/20 p-2 rounded-lg mr-4 mt-1">
                      <CheckCircle className="w-5 h-5 text-neon-cyan" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stellar-white text-lg mb-1">Win Big Prizes</h4>
                      <p className="text-stellar-white/70">Compete for a share of over $1M in prizes across multiple categories.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-electric-purple/20 p-2 rounded-lg mr-4 mt-1">
                      <CheckCircle className="w-5 h-5 text-neon-cyan" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stellar-white text-lg mb-1">Build Your Portfolio</h4>
                      <p className="text-stellar-white/70">Create a cool project to showcase your skills to future employers.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-electric-purple/20 p-2 rounded-lg mr-4 mt-1">
                      <CheckCircle className="w-5 h-5 text-neon-cyan" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stellar-white text-lg mb-1">Network with Peers</h4>
                      <p className="text-stellar-white/70">Connect with developers from around the world who share your passion.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-electric-purple/20 p-2 rounded-lg mr-4 mt-1">
                      <CheckCircle className="w-5 h-5 text-neon-cyan" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stellar-white text-lg mb-1">Set a World Record</h4>
                      <p className="text-stellar-white/70">Be part of history by participating in the largest hackathon ever.</p>
                    </div>
                  </li>
                </ul>
                
                <div className="p-4 rounded-lg bg-electric-purple/10 border border-electric-purple/30 mb-4">
                  <p className="text-neon-cyan font-medium">
                    Registration is free and open to developers of all experience levels.
                  </p>
                </div>
                
                <p className="text-stellar-white/70 italic text-sm">
                  * After registering, you'll receive further details about the event schedule, rules, and submission process.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              {submissionStatus === 'success' ? (
                <div className="p-8 rounded-2xl bg-space-blue/30 border border-electric-purple/30 backdrop-blur-sm text-center h-full flex flex-col items-center justify-center">
                  <div className="p-4 bg-neon-cyan/10 rounded-full inline-block mb-6">
                    <CheckCircle className="w-16 h-16 text-neon-cyan" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-stellar-white mb-4">
                    Registration Successful!
                  </h3>
                  <p className="text-stellar-white/70 max-w-md mx-auto mb-8">
                    Thank you for registering for the World's Largest Hackathon! We've sent a confirmation to your email with more details. Get ready to make history!
                  </p>
                  <Button 
                    variant="outline" 
                    href="#"
                    onClick={() => setSubmissionStatus('idle')}
                  >
                    Register Another Participant
                  </Button>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit} 
                  className="p-6 md:p-8 rounded-2xl bg-space-blue/30 border border-electric-purple/30 backdrop-blur-sm"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className={labelClass}>Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        placeholder="John Doe"
                        className={formFieldClass} 
                        value={formState.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        placeholder="john@example.com"
                        className={formFieldClass} 
                        value={formState.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="experience" className={labelClass}>Experience Level</label>
                    <select 
                      id="experience" 
                      name="experience" 
                      required
                      className={formFieldClass} 
                      value={formState.experience}
                      onChange={handleInputChange}
                    >
                      <option value="">Select your experience level</option>
                      <option value="beginner">Beginner (0-1 years)</option>
                      <option value="intermediate">Intermediate (1-3 years)</option>
                      <option value="advanced">Advanced (3-5 years)</option>
                      <option value="expert">Expert (5+ years)</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="interests" className={labelClass}>What are you interested in building?</label>
                    <textarea 
                      id="interests" 
                      name="interests" 
                      rows={3} 
                      className={formFieldClass} 
                      placeholder="Briefly describe the kind of project you're interested in building."
                      value={formState.interests}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="hearAbout" className={labelClass}>How did you hear about us?</label>
                    <input 
                      type="text" 
                      id="hearAbout" 
                      name="hearAbout" 
                      placeholder="Twitter, friend, etc."
                      className={formFieldClass} 
                      value={formState.hearAbout}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  {submissionStatus === 'error' && (
                    <div className="p-4 rounded-lg bg-vibrant-pink/10 border border-vibrant-pink/30 flex items-center mb-6">
                      <AlertCircle className="w-5 h-5 text-vibrant-pink mr-3" />
                      <p className="text-vibrant-pink font-medium">
                        There was an error submitting your form. Please try again.
                      </p>
                    </div>
                  )}
                  
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    className="w-full border-white/20 text-white hover:bg-white/5 transition-all"
                    icon={<Send className="w-5 h-5" />}
                    iconPosition="right"
                  >
                    Register Now
                  </Button>
                  
                  <p className="text-stellar-white/50 text-sm text-center mt-4">
                    By registering, you agree to our <a href="#" className="text-neon-cyan hover:underline">Terms</a> and <a href="#" className="text-neon-cyan hover:underline">Privacy Policy</a>.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterSection; 