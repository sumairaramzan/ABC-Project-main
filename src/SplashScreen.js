import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './components/ui/button';
import control from "./assets/images/remote-control.png"
import frame from "./assets/images/Frame.png"
import control1 from "./assets/images/alphabets.png"

const SplashScreen = ({ onComplete }) => {
  console.log("SplashScreen is rendering!"); // Debug line
  
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [bgMusic] = useState(new Audio());
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  useEffect(() => {
   
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500); 
          return 100;
        }
        return prev + 10;
      });
    }, 300);

    // Configure background music
    bgMusic.src = 'https://assets.mixkit.co/active_storage/sfx/2284/2284-preview.mp3';
    bgMusic.loop = true;
    bgMusic.volume = 0.3;

    return () => {
      clearInterval(interval);
      bgMusic.pause();
    };
  }, [bgMusic, onComplete]);
// const [bgMusic] = useState(() => new Audio('https://assets.mixkit.co/active_storage/sfx/2284/2284-preview.mp3'));

// useEffect(() => {
//   bgMusic.loop = true;
//   bgMusic.volume = 0.3;

//   return () => {
//     bgMusic.pause();
//   };
// }, [bgMusic]);

const toggleMusic = () => {
  if (isMusicPlaying) {
    bgMusic.pause();
  } else {
    bgMusic.play().catch((e) => {
      console.warn("Playback failed:", e);
    });
  }
  setIsMusicPlaying(!isMusicPlaying);
};








return (
  <motion.div
    className="fixed inset-0 flex flex-col items-center bg-gradient-to-b from-purple-100 to-pink-100 py-10"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {/* Top: Remote Controls + Frame */}
    <div className="flex flex-col items-center gap-6">
      {/* Remote Controls with half-circle rotation */}
      <motion.div
        className="flex items-center justify-center gap-10"
        animate={{
          rotate: [20, -20, 20],  // half-circle swing rotation
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <img src={control} alt="Remote A"  />
        <img src={control1} alt="Remote B"  />
      </motion.div>

      {/* Frame Image below remotes */}
      <img src={frame} alt="Frame Image" style={{width:"400px"}} />
    </div>

    {/* Loading Percentage */}
    <motion.div
      className="text-4xl font-bold text-pink-500"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      {loadingProgress}%
    </motion.div>

    {/* Loading Bar at bottom */}
    <div className="w-full px-8 flex justify-center">
  <div className="w-1/2 h-4 bg-gray-200 rounded-full overflow-hidden">
    <motion.div
      className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
      initial={{ width: '0%' }}
      animate={{ width: `${loadingProgress}%` }}
      transition={{ duration: 0.3 }}
    />
  </div>
</div>

  </motion.div>
);


};

export default SplashScreen;