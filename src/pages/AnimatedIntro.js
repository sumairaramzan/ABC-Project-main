import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import character from "../assets/images/cartoon1.png";
import nextButtonIcon from "../assets/images/arrowButtons.svg";

const steps = [
  "blank",
  "abcEnter",
  "kiddyEnter",
  "logoEnter",
  "yellowScreen",
  "characterScreen",
];

const AnimatedIntro = ({ onStart }) => {
  const [step, setStep] = useState(0);
  const [abcAnimated, setAbcAnimated] = useState(false);
  const [kiddyAnimated, setKiddyAnimated] = useState(false);

  useEffect(() => {
    let delay = 1000;
    if (steps[step] === "yellowScreen") delay = 700;

    const timeout = setTimeout(() => {
      if (step < steps.length - 1) {
        setStep(step + 1);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [step]);

  return (
    <AnimatePresence>
      <motion.div
        key={steps[step]}
        className={`fixed inset-0 flex items-center justify-center transition-colors duration-500 ${
          ["yellowScreen", "characterScreen"].includes(steps[step])
            ? "bg-yellow-400"
            : "bg-white"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* ABC & Kiddy */}
        {step >= 1 && step < 4 && (
          <div className="flex items-center justify-center gap-4">
            <motion.h1
              className="text-4xl font-bold text-pink-500"
              initial={
                !abcAnimated && step === 1 ? { x: "-100vw", opacity: 0 } : false
              }
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "tween", duration: 0.6 }}
              onAnimationComplete={() => setAbcAnimated(true)}
            >
              ABC
            </motion.h1>

            {step >= 2 && (
              <motion.h1
                className="text-4xl font-bold text-pink-500"
                initial={
                  !kiddyAnimated && step === 2
                    ? { x: "100vw", opacity: 0 }
                    : false
                }
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "tween", duration: 0.6 }}
                onAnimationComplete={() => setKiddyAnimated(true)}
              >
                Kiddy
              </motion.h1>
            )}
          </div>
        )}

        {/* Star Logo */}
        {steps[step] === "logoEnter" && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-yellow-400"
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: 10, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white">
              🌟
            </div>
          </motion.div>
        )}

        {/* Yellow Screen */}
        {steps[step] === "yellowScreen" && (
          <motion.div
            className="text-yellow-600 text-xl"
            initial={{ scale: 3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          ></motion.div>
        )}

        {/* Character Screen */}
        {steps[step] === "characterScreen" && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 w-full px-4 md:px-10 absolute top-0 left-0"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100vw", opacity: 0 }}
            transition={{ type: "tween", duration: 0.8 }}
          >
            <div className=" py-8 md:py-0 px-2 md:px-6">
              <div
                className="text-black mb-4 md:mb-6"
                style={{
                  fontSize: "clamp(32px, 5vw, 90px)",
                  lineHeight: "1.1",
                  fontWeight: "500",
                  fontFamily: "sans-serif",
                  marginTop:"60px",
                }}
              >
                <div>Where Letters</div>
                <div>Become Playful</div>
                <div>Adventures!</div>
              </div>
              <div
                className="text-black mb-6 md:mb-8"
                style={{
                  fontSize: "clamp(16px, 2.5vw, 34px)",
                  fontWeight: "400",
                  lineHeight: "1.4",
                  fontFamily: "sans-serif",
                }}
              >
                Discover fun games, giggles, and alphabet magic—
                <br className="hidden sm:block" />
                designed for little explorers!
              </div>
             <button
  onClick={onStart}
  className="flex items-center justify-center gap-3 px-4 py-2 md:px-6 md:py-3 bg-blue-600 text-white rounded-lg shadow-md w-[180px] h-[60px] md:w-[216px] md:h-[80px] text-sm md:text-lg font-medium mb-3"
  style={{
    fontFamily: "sans-serif",
  }}
>
  Let's Go!
  <img
    src={nextButtonIcon}
    alt="icon"
    className="w-4 h-4 md:w-6 md:h-6 "
  />
</button>

            </div>

            <div className="flex items-end justify-center mt-6 md:mt-0">
              <img
                src={character}
                alt="character"
                className="w-4/5 sm:w-3/5 md:w-[500px] lg:w-[600px] max-w-full h-auto"
              />
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedIntro;
