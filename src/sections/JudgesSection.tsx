import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, X } from 'lucide-react';

type Judge = {
  name: string;
  handle: string;
  title: string;
  bio: string;
  imageUrl: string;
  twitterUrl: string;
  isHost?: boolean;
};

const JudgesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
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
  
  const judges: Judge[] = [
    {
      name: "Greg Isenberg",
      handle: "@gregisenberg",
      title: "Host & Entrepreneur",
      bio: "Founder of Late Checkout, designer, and startup advisor. Building the intersection of community and AI.",
      imageUrl: "https://pbs.twimg.com/profile_images/1577116785656139776/5mi0qgTz_400x400.jpg",
      twitterUrl: "https://twitter.com/gregisenberg",
      isHost: true,
    },
    {
      name: "Pieter Levels",
      handle: "@levelsio",
      title: "Solo Entrepreneur",
      bio: "Creator of Nomad List, Remote OK, and other profitable internet businesses as a solo founder.",
      imageUrl: "https://pbs.twimg.com/profile_images/1589756412078555136/YlXMBzhp_400x400.jpg",
      twitterUrl: "https://twitter.com/levelsio",
    },
    {
      name: "Logan Kilpatrick",
      handle: "@OfficialLoganK",
      title: "AI Advocate",
      bio: "Prominent AI advocate and educator focused on democratizing artificial intelligence.",
      imageUrl: "https://pbs.twimg.com/profile_images/1379817647139737600/YHL9uBk0_400x400.jpg",
      twitterUrl: "https://twitter.com/OfficialLoganK",
    },
    {
      name: "Sara Mauskopf",
      handle: "@saranormous",
      title: "CEO & Co-founder",
      bio: "CEO and co-founder of Winnie, the marketplace for childcare. Previously at Postmates, Twitter, Google, and YouTube.",
      imageUrl: "https://pbs.twimg.com/profile_images/1689443134919327744/geqEJeF8_400x400.jpg",
      twitterUrl: "https://twitter.com/saranormous",
    },
    {
      name: "Theo Browne",
      handle: "@theo",
      title: "CEO & Developer",
      bio: "CEO at Ping Labs, founder of t3.gg, educator, and advocate for TypeScript and modern web development.",
      imageUrl: "https://pbs.twimg.com/profile_images/1799982162831396865/Fnol01I1_400x400.jpg",
      twitterUrl: "https://twitter.com/theo",
    },
    {
      name: "Evan You",
      handle: "@youyuxi",
      title: "Creator of Vue.js",
      bio: "Creator of Vue.js, Vite, and other open source projects. Independent open source developer.",
      imageUrl: "https://pbs.twimg.com/profile_images/1856284397072478208/hSEXLkPN_400x400.jpg",
      twitterUrl: "https://twitter.com/youyuxi",
    },
    {
      name: "KP",
      handle: "@thisiskp_",
      title: "Entrepreneur & Advisor",
      bio: "Entrepreneur, startup advisor, and community builder focused on helping founders succeed.",
      imageUrl: "https://pbs.twimg.com/profile_images/1288449070344937473/fKlvccnM_400x400.jpg",
      twitterUrl: "https://twitter.com/thisiskp_",
    },
  ];

  const XLogo = () => {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24" 
        viewBox="0 0 24 24"
        className="bg-white rounded-full p-1"
      >
        <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z" />
      </svg>
    );
  };
  
  return (
    <section id="judges" className="relative py-20 md:py-32 bg-cosmic-black overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-electric-purple/10 blur-[120px] z-0" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-neon-cyan/10 blur-[120px] z-0" />
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-stellar-white mb-6">
              Meet Our <span className="text-neon-cyan">Judges</span>
            </h2>
            <p className="text-lg text-stellar-white/70 max-w-3xl mx-auto">
              Our panel of expert judges brings together diverse perspectives and deep expertise in technology, entrepreneurship, and innovation.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {judges.map((judge, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col overflow-hidden rounded-xl bg-space-blue/30 border border-electric-purple/20 hover:border-electric-purple/40 backdrop-blur-sm transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8,
                    boxShadow: '0 20px 40px -20px rgba(138, 43, 226, 0.3)',
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="relative overflow-hidden aspect-square">
                    {judge.isHost && (
                      <div className="absolute top-0 left-0 right-0 z-10 bg-neon-cyan/90 text-cosmic-black py-1 px-3 text-sm font-bold text-center">
                        Your Host!
                      </div>
                    )}
                    <img 
                      src={judge.imageUrl} 
                      alt={judge.name} 
                      className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${judge.isHost ? 'ring-2 ring-neon-cyan' : ''}`}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-cosmic-black via-cosmic-black/80 to-transparent">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-display font-bold text-stellar-white">
                          {judge.name}
                        </h3>
                        <a 
                          href={judge.twitterUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-electric-purple/20 hover:bg-electric-purple/40 text-neon-cyan transition-colors duration-200"
                        >
                          <XLogo />
                        </a>
                      </div>
                      <p className="text-sm text-neon-cyan">
                        {judge.handle}
                      </p>
                    </div>
                  </div>
                  <div className="p-5 flex-grow flex flex-col">
                    <h4 className="text-md font-semibold text-stellar-white/90 mb-2">
                      {judge.title}
                    </h4>
                    <p className="text-sm text-stellar-white/70 flex-grow">
                      {judge.bio}
                    </p>
                    <a 
                      href={judge.twitterUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-neon-cyan text-sm mt-4 hover:underline"
                    >
                      <span>Follow on X</span>
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default JudgesSection; 