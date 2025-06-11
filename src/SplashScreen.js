import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import control from "./assets/images/remote-control.png";
import frame from "./assets/images/Frame.png";
import control1 from "./assets/images/alphabets.png";

const SplashScreen = ({ onComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [bgMusic] = useState(new Audio());
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const controlAnim = useAnimation();
  const control1Anim = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 1000);
          return 100;
        }
        return prev + 10;
      });
    }, 300);

    // Music setup
    bgMusic.src = 'https://assets.mixkit.co/active_storage/sfx/2284/2284-preview.mp3';
    bgMusic.loop = true;
    bgMusic.volume = 0.3;

    return () => {
      clearInterval(interval);
      bgMusic.pause();
    };
  }, [bgMusic, onComplete]);

  useEffect(() => {
    // Animate drop then rotate
    controlAnim.start({
      y: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    }).then(() => {
      controlAnim.start({
        rotate: [20, -20, 20, -20, 0],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      });
    });

    control1Anim.start({
      y: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    }).then(() => {
      control1Anim.start({
        rotate: [-15, 15, -15, 15, 0],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      });
    });
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Image Area */}
      <div className="relative w-[400px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[300px] md:h-[400px] mb-10 sm:mb-20">
        {/* Frame Image in background */}
        <img
          src={frame}
          alt="Frame"
          className="absolute top-1/2 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 z-0"
        />

        {/* control - left top floating */}
        <motion.img
          src={control}
          alt="Remote A"
          className="absolute top-[3%] left-[80%] w-20 sm:w-28 md:w-35 z-10"
          initial={{ y: -40, opacity: 0 }}
          animate={controlAnim}
        />

        {/* control1 - right top floating */}
        <motion.img
          src={control1}
          alt="Remote B"
          className="absolute top-[30%] right-[70%] w-16 sm:w-24 md:w-30 z-10"
          initial={{ y: -90, opacity: 0 }}
          animate={control1Anim}
        />
      </div>

      {/* Loading Text */}
     {/* Loading Text */}
<div className="mb-4 text-center text-[#E8AD00] text-[40px] font-semibold">
  Loading...
</div>

{/* Progress Bar with Percentage */}
<div className="w-full px-8 flex justify-center">
  <div className="w-full md:w-1/2 flex items-center gap-4">
    {/* Progress Bar */}
    <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
        initial={{ width: '0%' }}
        animate={{ width: `${loadingProgress}%` }}
        transition={{ duration: 0.3 }}
      />
    </div>

    {/* Percentage Text */}
    <motion.div
      className="text-[#344054] text-[20px] font-semibold"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1.1 }}
      transition={{
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {loadingProgress}%
    </motion.div>
  </div>
</div>

    </motion.div>
  );
};

export default SplashScreen;
