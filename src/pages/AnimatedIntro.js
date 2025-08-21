import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import nextButtonIcon from '../assets/images/arrowButtons.svg';
import character from '../assets/images/cartoon1.png';
import star from "../assets/images/startimageNew.svg"

const AnimatedIntro = ({ onStart }) => {
  const abcControls = useAnimation();
  const kiddyControls = useAnimation();
  const starControls = useAnimation();
  const bgControls = useAnimation();
  const finalContentControls = useAnimation();

  const [showFinal, setShowFinal] = useState(false);
  const [hideInitialContent, setHideInitialContent] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      // Step 1: Slide in texts
      await Promise.all([
        abcControls.start({
          x: 0,
          transition: { type: 'spring', stiffness: 80, damping: 20, duration: 2 },
        }),
        kiddyControls.start({
          x: 0,
          transition: { type: 'spring', stiffness: 80, damping: 20, duration: 2 },
        }),
      ]);

      // Step 2: Drop the star
      await starControls.start({
        y: 0,
        transition: { type: 'spring', stiffness: 100, damping: 15 },
      });

      // Step 3: Star zoom + background color change
      await Promise.all([
        starControls.start({
          scale: 30,
          transition: { duration: 1.2, ease: 'easeInOut' },
        }),
        bgControls.start({
          backgroundColor: '#FCD003',
          transition: { duration: 1.2, ease: 'easeInOut' },
        }),
      ]);

      // Step 4: Small delay, then show final content
      setTimeout(() => {
        setHideInitialContent(true); // hide everything behind the star
        setShowFinal(true);          // render the new screen
      }, 500); // enough delay for zoom to visually finish
    };

    sequence();
  }, []);

  useEffect(() => {
    if (showFinal) {
      finalContentControls.start({
        x: 0,
        opacity: 1,
        transition: { type: 'tween', duration: 0.8 },
      });
    }
  }, [showFinal]);

  return (
    <motion.div
      initial={{ backgroundColor: '#ffffff' }}
      animate={bgControls}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* ABC and Kiddy text */}
      {!hideInitialContent && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            gap: '2rem',
            fontSize: '3rem',
            fontWeight: 'bold',
          }}
        >
          <motion.div
            style={{ color: '#DA4B91' }}
            initial={{ x: '-100vw' }}
            animate={abcControls}
          >
            ABC
          </motion.div>
          <motion.div
            style={{ color: '#DA4B91' }}
            initial={{ x: '200vw' }}
            animate={kiddyControls}
          >
            Kiddy
          </motion.div>
        </div>
      )}

      {/* Star that zooms in */}
      {!hideInitialContent && (
        <motion.div
          initial={{ y: '-100vh', scale: 1 }}
          animate={starControls}
          style={{
            position: 'absolute',
            top: '30%',
            left: '47%',
            transform: 'translateX(-47%)',
            fontSize: '5rem',
            color: '#FED501',
            zIndex: 10,
          }}
        >
          {/* ⭐ */}
          <img src={star} width={"50px"} />
        </motion.div>
      )}

      {/* Final content after splash */}
      {showFinal && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 w-full h-full px-2 md:px-10 absolute top-0 left-0"
          initial={{ x: '100vw', opacity: 0 }}
          animate={finalContentControls}
          exit={{ x: '-100vw', opacity: 0 }}
        >
          {/* Left content */}
          <div className="py-8 md:py-0 px-2 md:px-6">
            <div
              className="text-black mb-4 md:mb-6"
              style={{
                fontSize: 'clamp(32px, 5vw, 90px)',
                lineHeight: '1.1',
                fontWeight: '500',
                fontFamily: 'sans-serif',
                marginTop: '60px',
              }}
            >
              <div>Where Letters</div>
              <div>Become Playful</div>
              <div>Adventures!</div>
            </div>

            <div
              className="text-black mb-6 md:mb-8"
              style={{
                fontSize: 'clamp(16px, 2.5vw, 34px)',
                fontWeight: '400',
                lineHeight: '1.4',
                fontFamily: 'sans-serif',
              }}
            >
              Discover fun games, giggles, and alphabet magic—<br className="hidden sm:block" />
              designed for little explorers!
            </div>

            <button
              onClick={onStart}
              className="flex items-center justify-center gap-3 px-4 py-2 md:px-6 md:py-3 bg-blue-600 text-white rounded-lg shadow-md w-[180px] h-[60px] md:w-[216px] md:h-[80px] text-sm md:text-lg font-medium mb-3"
              style={{ fontFamily: 'sans-serif' }}
            >
              Let's Go!
              <img
                src={nextButtonIcon}
                alt="icon"
                className="w-4 h-4 md:w-6 md:h-6"
              />
            </button>
          </div>

          {/* Right character image */}
          <div className="flex items-end justify-center mt-6 md:mt-0">
            <img
              src={character}
              alt="character"
              className="max-w-full h-auto"
            />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default AnimatedIntro;
