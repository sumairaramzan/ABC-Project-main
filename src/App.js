import React, { useState, useEffect, useCallback } from "react";
import CustomErrorBoundary from "./CustomErrorBoundary";
import "./App.css";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import HomeScreen from "./HomeScreen";
import SplashScreen from "./SplashScreen";
import AnimatedIntro from "./pages/AnimatedIntro";
import SelectCharacter from "./pages/SelectCharacter";
import greeneryBg from "./assets/images/alphabetBackground.png";
import boardBg from "./assets/images/yellow-board-bg.png";
import aaIcon from "./assets/Alphabet-icons/$a.svg";
import bIcon from "./assets/Alphabet-icons/$b.svg";
import appleIcon from "./assets/images/apple.png";
import ballIcon from "./assets/images/ball.png";
import cartoonIconOff from "./assets/images/soundsoff.svg";
import cAnimal from "./assets/animal_icons/c.svg";
import arrowLeft from "./assets/images/back.svg";
import arrowRight from "./assets/images/arrowNext.png";
import cartoonIcon from "./assets/images/taddybear.svg";
import cletter from "./assets/Alphabet-icons/$c.svg";
import dletter from "./assets/Alphabet-icons/$d.svg";
import eletter from "./assets/Alphabet-icons/$e.svg";
import fletter from "./assets/Alphabet-icons/$f.svg";
import gletter from "./assets/Alphabet-icons/$g.svg";
import hletter from "./assets/Alphabet-icons/h.svg";
import iletter from "./assets/Alphabet-icons/i.svg";
import jletter from "./assets/Alphabet-icons/j.svg";
import kletter from "./assets/Alphabet-icons/k.svg";
import lletter from "./assets/Alphabet-icons/L.svg";
import mletter from "./assets/Alphabet-icons/m.svg";
import nletter from "./assets/Alphabet-icons/n.svg";
import oletter from "./assets/Alphabet-icons/o.svg";
import pletter from "./assets/Alphabet-icons/p-1.svg";
import qletter from "./assets/Alphabet-icons/q.svg";
import rletter from "./assets/Alphabet-icons/r.svg";
import sletter from "./assets/Alphabet-icons/s.svg";
import tletter from "./assets/Alphabet-icons/t.svg";
import uletter from "./assets/Alphabet-icons/u.svg";
import vletter from "./assets/Alphabet-icons/v.svg";
import wletter from "./assets/Alphabet-icons/w.svg";
import xletter from "./assets/Alphabet-icons/x.svg";
import yletter from "./assets/Alphabet-icons/y.svg";
import zletter from "./assets/Alphabet-icons/z.svg";
import bgImage from "./assets/images/backgroundImages.png";
import letterhunt from "./assets/images/letterhuntbgImg.png";
import dAnimal from "./assets/animal_icons/d.svg";
import zAnimal from "./assets/animal_icons/z.svg";
import eAnimal from "./assets/animal_icons/e.svg";
import fAnimal from "./assets/animal_icons/f.svg";
import gAnimal from "./assets/animal_icons/g.svg";
import hAnimal from "./assets/animal_icons/h.svg";
import iAnimal from "./assets/animal_icons/i.svg";
import jAnimal from "./assets/animal_icons/j.svg";
import kAnimal from "./assets/animal_icons/k.svg";
import lAnimal from "./assets/animal_icons/l.svg";
import mAnimal from "./assets/animal_icons/m.svg";
import nAnimal from "./assets/animal_icons/n.svg";
import oAnimal from "./assets/animal_icons/orange.svg";
import pAnimal from "./assets/animal_icons/p.svg";
import qAnimal from "./assets/images/queen.svg";
import rAnimal from "./assets/animal_icons/r.svg";
import sAnimal from "./assets/animal_icons/s.svg";
import tAnimal from "./assets/animal_icons/t.svg";
import uAnimal from "./assets/animal_icons/u.svg";
import vAnimal from "./assets/animal_icons/v.svg";
import wAnimal from "./assets/animal_icons/w.svg";
import xAnimal from "./assets/animal_icons/x.svg";
import yAnimal from "./assets/animal_icons/y.svg";
import cardFront from "./assets/images/ABCKiddy.png";
import arrowLeftBlue from "./assets/images/blueArrow.svg";
import back from "./assets/images/backk.png";
import ChooseGame from "./pages/ChooseGame";
import A from "./assets/CapitalAlphabets/a.svg";
import B from "./assets/CapitalAlphabets/b.svg";
import C from "./assets/CapitalAlphabets/c.svg";
import D from "./assets/CapitalAlphabets/d.svg";
import E from "./assets/CapitalAlphabets/e.svg";
import F from "./assets/CapitalAlphabets/f.svg";
import G from "./assets/CapitalAlphabets/g.svg";
import H from "./assets/CapitalAlphabets/h.svg";
import I from "./assets/CapitalAlphabets/i.svg";
import J from "./assets/CapitalAlphabets/j.svg";
import K from "./assets/CapitalAlphabets/k.svg";
import L from "./assets/CapitalAlphabets/L.svg";
import M from "./assets/CapitalAlphabets/m.svg";
import N from "./assets/CapitalAlphabets/n.svg";
import O from "./assets/CapitalAlphabets/o.svg";
import P from "./assets/CapitalAlphabets/p.svg";
import Q from "./assets/CapitalAlphabets/q.svg";
import R from "./assets/CapitalAlphabets/r.svg";
import S from "./assets/CapitalAlphabets/s.svg";
import T from "./assets/CapitalAlphabets/t.svg";
import U from "./assets/CapitalAlphabets/u.svg";
import V from "./assets/CapitalAlphabets/v.svg";
import W from "./assets/CapitalAlphabets/w.svg";
import X from "./assets/CapitalAlphabets/x.svg";
import Y from "./assets/CapitalAlphabets/y.svg";
import Z from "./assets/CapitalAlphabets/z.svg";
import apple from "./assets/singleAnimals/apple.svg";
import ball from "./assets/singleAnimals/ball.svg";
import cat from "./assets/singleAnimals/cat.svg";
import dog from "./assets/singleAnimals/dog.svg";
import elephant from "./assets/singleAnimals/elephant.svg";
import fish from "./assets/singleAnimals/fish.svg";
import giraffe from "./assets/singleAnimals/giraffe.svg";
import hat from "./assets/singleAnimals/hat.svg";
import icecream from "./assets/singleAnimals/icecream.svg";

import juice from "./assets/singleAnimals/juice.svg";
import koala from "./assets/singleAnimals/koala.svg";
import lion from "./assets/singleAnimals/lion.svg";
import moon from "./assets/singleAnimals/moon.svg";
import necklace from "./assets/singleAnimals/necklace.svg";
import orange from "./assets/singleAnimals/orange.svg";
import penguin from "./assets/singleAnimals/penguin.svg";
import queen from "./assets/singleAnimals/queen.svg";
import rabit from "./assets/singleAnimals/queen.svg";
import sun from "./assets/singleAnimals/sun.svg";
import tree from "./assets/singleAnimals/tree.svg";
import unicorn from "./assets/singleAnimals/unicorn.svg";
import violin from "./assets/singleAnimals/violin.svg";
import whale from "./assets/singleAnimals/whale.svg";
import xylophone from "./assets/singleAnimals/xylophone.svg";
import yellow from "./assets/singleAnimals/yellow.svg";
import zebra from "./assets/singleAnimals/zebra.svg";
import congratulations from "./assets/images/congrateImg.svg";

// Helper function for speech synthesis
const initSpeech = async (text, options = {}) => {
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.pitch = 1.0;
  utterance.rate = 0.7;
  utterance.volume = 1.0;
  utterance.lang = "en-US";

  let voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) {
    await new Promise((resolve) => {
      window.speechSynthesis.onvoiceschanged = () => {
        voices = window.speechSynthesis.getVoices();
        resolve();
      };
    });
  }

  const preferredVoices = [
    "Google US English Female",
    "Microsoft Zira",
    "Samantha",
    "Karen",
    "Female",
  ];

  const voice =
    voices.find(
      (v) =>
        preferredVoices.some((pv) => v.name.includes(pv)) &&
        v.lang.startsWith("en")
    ) || voices.find((v) => v.lang.startsWith("en"));

  if (voice) {
    utterance.voice = voice;
  }

  Object.assign(utterance, options);
  return utterance;
};

// Constants
const DIFFICULTY_LEVELS = {
  easy: 4,
  medium: 6,
  hard: 8,
};

const SOUNDS = {
  celebration: new Audio(
    "https://assets.mixkit.co/active_storage/sfx/2153/2153-preview.mp3"
  ),
  match: new Audio(
    "https://assets.mixkit.co/active_storage/sfx/1111/1111-preview.mp3"
  ),
};

// Alphabet data
const alphabetData = [
  {
    char: "A", // actual letter to speak
    letter: aaIcon, // image
    animal: appleIcon,
    name: "Apple",
    CapitalLetter: A,
  },
  {
    char: "B",
    letter: bIcon,
    animal: ballIcon,
    name: "Ball",
    CapitalLetter: B,
  },
  {
    char: "C",
    letter: cletter,
    animal: cAnimal,
    name: "Cat",
    CapitalLetter: C,
  },
  {
    char: "D",
    letter: dletter,
    animal: dAnimal,
    name: "Dog",
    CapitalLetter: D,
  },
  {
    char: "E",
    letter: eletter,
    animal: eAnimal,
    name: "Elephant",
    CapitalLetter: E,
  },
  {
    char: "F",
    letter: fletter,
    animal: fAnimal,
    name: "Fish",
    CapitalLetter: F,
  },
  {
    char: "G",
    letter: gletter,
    animal: gAnimal,
    name: "Giraffe",
    CapitalLetter: G,
  },
  {
    char: "H",
    letter: hletter,
    animal: hAnimal,
    name: "Hat",
    CapitalLetter: H,
  },
  {
    char: "I",
    letter: iletter,
    animal: iAnimal,
    name: "Ice Cream",
    CapitalLetter: I,
  },
  {
    char: "J",
    letter: jletter,
    animal: jAnimal,
    name: "Juice",
    CapitalLetter: J,
  },
  {
    char: "K",
    letter: kletter,
    animal: kAnimal,
    name: "Koala",
    CapitalLetter: K,
  },
  {
    char: "L",
    letter: lletter,
    animal: lAnimal,
    name: "Lion",
    CapitalLetter: L,
  },
  {
    char: "M",
    letter: mletter,
    animal: mAnimal,
    name: "Moon",
    CapitalLetter: M,
  },
  {
    char: "N",
    letter: nletter,
    animal: nAnimal,
    name: "Necklace",
    CapitalLetter: N,
  },
  {
    char: "O",
    letter: oletter,
    animal: oAnimal,
    name: "Orange",
    CapitalLetter: O,
  },
  {
    char: "P",
    letter: pletter,
    animal: pAnimal,
    name: "Penguin",
    CapitalLetter: P,
  },
  {
    char: "Q",
    letter: qletter,
    animal: qAnimal,
    name: "Queen",
    CapitalLetter: Q,
  },
  {
    char: "R",
    letter: rletter,
    animal: rAnimal,
    name: "Rabbit",
    CapitalLetter: R,
  },
  {
    char: "S",
    letter: sletter,
    animal: sAnimal,
    name: "Sun",
    CapitalLetter: S,
  },
  {
    char: "T",
    letter: tletter,
    animal: tAnimal,
    name: "Tree",
    CapitalLetter: T,
  },
  {
    char: "U",
    letter: uletter,
    animal: uAnimal,
    name: "Unicorn",
    CapitalLetter: U,
  },
  {
    char: "V",
    letter: vletter,
    animal: vAnimal,
    name: "Violin",
    CapitalLetter: V,
  },
  {
    char: "W",
    letter: wletter,
    animal: wAnimal,
    name: "Whale",
    CapitalLetter: W,
  },
  {
    char: "X",
    letter: xletter,
    animal: xAnimal,
    name: "Xylophone",
    CapitalLetter: X,
  },
  {
    char: "Y",
    letter: yletter,
    animal: yAnimal,
    name: "Yellow",
    CapitalLetter: Y,
  },
  {
    char: "Z",
    letter: zletter,
    animal: zAnimal,
    name: "Zebra",
    CapitalLetter: Z,
  },
];

function App() {
  const [currentScreen, setCurrentScreen] = useState("selectCharacter");
  const [previousScreen, setPreviousScreen] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleScreenChange = (newScreen) => {
    setPreviousScreen(currentScreen);
    setCurrentScreen(newScreen);
  };

  // CelebrationDialog Component
  const CelebrationDialog = ({
    onRestart,
    onHome,
    score = 8,
    total = 10,
    onClose,
  }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 flex items-center justify-center bg-black/30 z-50"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative bg-white rounded-lg p-6 max-w-xs w-full mx-4 text-center shadow-md"
      >
        {/* Close button (X) in top-right corner */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Trophy icon at top center */}
        <div className="flex justify-center mb-3">
          <img src={congratulations} alt="none" />
        </div>

        {/* Congratulations text with exact color */}
        <h2
          className="text-2xl font-bold mb-3"
          style={{ color: "#1CA34E", fontSize: "14px", fontWeight: "500" }}
        >
          Congratulations!
        </h2>

        {/* Score and rating text */}
        <div className="space-y-1 mb-5">
          <p style={{ fontSize: "14px", fontWeight: "500", color: "#2E2E2E" }}>
            Your Score: {score}/{total}.Rating: Excellent!
          </p>
        </div>

        {/* Buttons with exact colors */}
        <div className="flex space-x-3">
          <button
            onClick={onHome}
            className="flex-1 py-2 px-4 rounded-md transition-colors text-sm border"
            style={{
              backgroundColor: "transparent",
              borderColor: "#D0D5DD",
              color: "#344054",
              fontSize: "15px",
              fontWeight: "600",
            }}
          >
            Back to Home
          </button>
          <button
            onClick={onRestart}
            className="flex-1 py-2 px-4 rounded-md  transition-colors text-sm"
            style={{
              backgroundColor: "#E8BE5D",
              color: "#344054",
              fontSize: "15px",
              fontWeight: "600",
            }}
          >
            Play again
          </button>
        </div>
      </motion.div>
    </motion.div>
  );

  // LearnScreen Component
  const LearnScreen = ({ setCurrentGame, goBack }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [showConfetti, setShowConfetti] = useState(false);
    const [showCelebration, setShowCelebration] = useState(false);
    const currentLetter = alphabetData[currentIndex];

    const playSound = async (letter, name) => {
      if ("speechSynthesis" in window) {
        try {
          window.speechSynthesis.cancel(); // cancel any ongoing speech
          setIsSpeaking(true);

          const utterance = await initSpeech(`${letter} is for ${name}`, {
            pitch: 1.0,
            rate: 0.6,
            volume: 1.0,
          });

          utterance.onend = () => setIsSpeaking(false);
          utterance.onerror = () => {
            setIsSpeaking(false);
            console.error("Speech synthesis error");
          };

          setTimeout(() => {
            window.speechSynthesis.speak(utterance);
          }, 100);
        } catch (error) {
          setIsSpeaking(false);
          console.error("Speech synthesis error:", error);
        }
      } else {
        setIsSpeaking(false);
      }
    };

    const startCelebration = async () => {
      setShowConfetti(true);
      SOUNDS.celebration.play();
      setTimeout(async () => {
        if (soundEnabled) {
          const utterance = await initSpeech(
            "Wonderful job! You've learned the whole alphabet! You're amazing!",
            { rate: 0.7, pitch: 1.0 }
          );
          utterance.onend = () => {
            setShowCelebration(true);
          };
          window.speechSynthesis.speak(utterance);
        } else {
          setShowCelebration(true);
        }
      }, 1000);
    };

    const stopSpeaking = () => {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    };

    const goToNextLetter = useCallback(() => {
      stopSpeaking(); // cancel current speech
      setCurrentIndex((prevIndex) => {
        if (prevIndex === alphabetData.length - 1) {
          startCelebration();
          return prevIndex;
        } else {
          return prevIndex + 1;
        }
      });
    }, []);

    const goToPreviousLetter = useCallback(() => {
      stopSpeaking(); // cancel current speech
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? alphabetData.length - 1 : prevIndex - 1
      );
    }, []);

    useEffect(() => {
      const handleKeyPress = (event) => {
        if (!isSpeaking && !showCelebration) {
          switch (event.key) {
            case "ArrowRight":
              goToNextLetter();
              break;
            case "ArrowLeft":
              goToPreviousLetter();
              break;
            case " ":
              if (soundEnabled)
                playSound(currentLetter.letter, currentLetter.name);
              break;
            default:
              break;
          }
        }
      };

      window.addEventListener("keydown", handleKeyPress);
      return () => window.removeEventListener("keydown", handleKeyPress);
    }, [
      goToNextLetter,
      goToPreviousLetter,
      isSpeaking,
      showCelebration,
      soundEnabled,
      currentLetter.letter,
      currentLetter.name,
    ]);

    useEffect(() => {
      if (soundEnabled && !isSpeaking && !showCelebration) {
        const letter = alphabetData[currentIndex];
        playSound(letter.char, letter.name);
      }
    }, [currentIndex, soundEnabled]);

    return (
      <>
        <div className="text-center relative">
          {showConfetti && (
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              recycle={false}
              numberOfPieces={200}
            />
          )}

          {showCelebration && (
            <CelebrationDialog
              onRestart={() => {
                setShowCelebration(false);
                setShowConfetti(false);
                setCurrentIndex(0);
              }}
              onHome={() => setCurrentScreen("home")}
            />
          )}
        </div>

        <div className="learn-container">
          <div className="board">
            <img
              className="arrow-back-top"
              onClick={goBack}
              src={arrowLeft}
              alt="Back"
            />
            {currentIndex > 0 && (
              <img
                className="arrow-back"
                onClick={goToPreviousLetter}
                src={arrowLeftBlue}
                alt="Back"
              />
            )}

            <button
              className="teddy-bear"
              onClick={() => {
                if (!isSpeaking) {
                  if (soundEnabled) {
                    setSoundEnabled(false);
                  } else {
                    setSoundEnabled(true);
                    playSound(currentLetter.char, currentLetter.name);
                  }
                }
              }}
            >
              <img
                src={soundEnabled ? cartoonIcon : cartoonIconOff}
                alt={soundEnabled ? "Cartoon Sound On" : "Cartoon Sound Off"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  transition: "opacity 0.3s",
                }}
              />
            </button>

            <img
              className="arrow-next"
              onClick={goToNextLetter}
              src={arrowRight}
              alt="Next"
            />

            <div className="content-row">
              <div className="letter-box">
                <img
                  src={currentLetter.letter}
                  alt="Letter"
                  className="image-fit"
                />
              </div>
              <div className="animal-box">
                <img
                  onClick={() => {
                    if (!isSpeaking && soundEnabled) {
                      playSound(currentLetter.char, currentLetter.name);
                    }
                  }}
                  src={currentLetter.animal}
                  alt="Animal"
                  className="image-fit"
                />
              </div>
            </div>

            <div className="footer-number">
              {currentIndex + 1} / {alphabetData.length}
            </div>
          </div>
        </div>
      </>
    );
  };
  // LetterMatchGame Component
  const LetterMatchGame = ({ setCurrentGame }) => {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [moves, setMoves] = useState(0);
    const [score, setScore] = useState(0);
    const [lastMoveTime, setLastMoveTime] = useState(Date.now());
    const [showCelebration, setShowCelebration] = useState(false);
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentLetter = alphabetData[currentIndex];

    const playSound = async (letter, name) => {
      if ("speechSynthesis" in window) {
        try {
          setIsSpeaking(true);

          const utterance = await initSpeech(`${letter} is for ${name}`, {
            pitch: 1.0,
            rate: 0.6, // Slower for clarity
            volume: 1.0,
          });

          utterance.onend = () => setIsSpeaking(false);
          utterance.onerror = () => {
            setIsSpeaking(false);
            console.error("Speech synthesis error");
          };

          setTimeout(() => {
            window.speechSynthesis.speak(utterance);
          }, 100);
        } catch (error) {
          setIsSpeaking(false);
          console.error("Speech synthesis error:", error);
        }
      } else {
        setIsSpeaking(false);
      }
    };

    const generateCards = () => {
      const gameData = alphabetData.slice(0, 6);
      const cardPairs = gameData.flatMap((item) => [
        {
          id: `letter_${item.char}`,
          type: "letter",
          value: item.char,
          content: item.letter,
          name: item.char,
        },
        {
          id: `picture_${item.char}`,
          type: "picture",
          value: item.char,
          content: item.animal,
          name: item.name,
        },
      ]);
      return [...cardPairs].sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
      setCards(generateCards());
    }, []);

    const handleCardClick = async (card) => {
      if (
        flippedCards.length === 2 ||
        flippedCards.includes(card.id) ||
        matchedPairs.includes(card.value)
      ) {
        return;
      }

      if (soundEnabled) {
        try {
          const utterance = await initSpeech(card.name, {
            pitch: 1.0,
            rate: 0.7,
            volume: 1.0,
          });

          window.speechSynthesis.speak(utterance);
        } catch (error) {
          console.error("Speech synthesis error:", error);
        }
      }

      const newFlippedCards = [...flippedCards, card.id];
      setFlippedCards(newFlippedCards);

      if (newFlippedCards.length === 2) {
        setMoves((m) => m + 1);
        const [firstId, secondId] = newFlippedCards;
        const firstCard = cards.find((card) => card.id === firstId);
        const secondCard = cards.find((card) => card.id === secondId);

        if (firstCard.value === secondCard.value) {
          const totalPairs = cards.length / 2;
          const percentageComplete = Math.floor(
            ((matchedPairs.length + 1) / totalPairs) * 100
          );
          setScore(percentageComplete);

          SOUNDS.match.play();
          setMatchedPairs((prev) => [...prev, firstCard.value]);
          setFlippedCards([]);

          if (matchedPairs.length + 1 === cards.length / 2) {
            setTimeout(async () => {
              if (soundEnabled) {
                const celebrationUtterance = await initSpeech(
                  "Amazing! You've matched all the letters! Great job!",
                  { rate: 0.7, pitch: 1.0 }
                );
                window.speechSynthesis.speak(celebrationUtterance);
              }
              setShowCelebration(true);
            }, 500);
          }
        } else {
          setTimeout(() => {
            setFlippedCards([]);
          }, 1000);
        }
        setLastMoveTime(Date.now());
      }
    };

    return (
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div
          className="
        rounded-2xl
        shadow-md
        p-3
        w-full
        max-w-[95vw]
        sm:max-w-[900px]
        bg-[#A4C7FF]
        border-[6px] border-[#357AE8]
        flex flex-col justify-start
      "
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4 px-2">
            <button onClick={() => setCurrentGame(null)}>
              <img
                src={arrowLeft}
                alt="arrow"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
            </button>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center">
              Letter Match
            </h2>
            <button
              onClick={() => {
                if (!isSpeaking) {
                  if (soundEnabled) {
                    setSoundEnabled(false);
                  } else {
                    setSoundEnabled(true);
                    playSound(currentLetter.char, currentLetter.name);
                  }
                }
              }}
            >
              <img
                src={soundEnabled ? cartoonIcon : cartoonIconOff}
                alt={soundEnabled ? "Cartoon Sound On" : "Cartoon Sound Off"}
                className="w-[64px] h-[64px] object-contain transition-opacity duration-300"
              />
            </button>
          </div>

          {/* Cards Grid */}
          {/* Cards Grid */}
          <div className="w-full flex justify-center px-2 mb-6">
            <div className="w-full max-w-[95vw] sm:max-w-[1000px] md:max-w-[1100px] lg:max-w-[1200px] xl:max-w-[1400px] px-2">
              <div
                className="
        grid 
        grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 
        gap-2 sm:gap-3 md:gap-4 
        p-3 
        bg-blue-400 
        rounded-xl
        justify-items-center
        min-h-[400px]
        max-h-[70vh]
        overflow-y-auto
      "
              >
                {cards.map((card) => {
                  const isFlipped =
                    flippedCards.includes(card.id) ||
                    matchedPairs.includes(card.value);
                  const backgroundUrl = isFlipped ? back : cardFront;

                  return (
                    <motion.div
                      key={card.id}
                      className="
              w-[clamp(60px,10vw,110px)]
              aspect-[88/121]
              cursor-pointer 
              rounded-xl 
              shadow-md 
              flex 
              items-center 
              justify-center 
              bg-cover 
              bg-center 
              transition-all 
              duration-300 
              overflow-hidden
            "
                      style={{ backgroundImage: `url(${backgroundUrl})` }}
                      onClick={() => handleCardClick(card)}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {isFlipped &&
                        (card.type === "picture" || card.type === "letter" ? (
                          <img
                            src={card.content}
                            alt={card.name}
                            className="max-w-full max-h-full object-contain"
                            draggable={false}
                          />
                        ) : (
                          <span className="text-sm sm:text-base font-semibold">
                            {card.content}
                          </span>
                        ))}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Progress Bar & Moves */}
          <div className="w-full mb-3 px-1">
            <div className="flex items-center justify-between mb-1">
              <div className="w-full bg-gray-200 rounded-full h-2.5 relative">
                <div
                  className="bg-yellow-400 h-2.5 rounded-full"
                  style={{ width: `${score}%` }}
                />
              </div>
              <span className="text-white text-xs ml-2">{score}%</span>
            </div>
            <div className="text-white text-sm">Moves: {moves}</div>
          </div>

          {/* Celebration Dialog */}
          {showCelebration && (
            <CelebrationDialog
              onRestart={() => {
                setShowCelebration(false);
                setCards([]);
                setFlippedCards([]);
                setMatchedPairs([]);
                setMoves(0);
                setScore(0);
                const gameData = alphabetData.slice(0, 6);
                const cardPairs = gameData.flatMap((item) => [
                  {
                    id: `letter_${item.letter}`,
                    type: "letter",
                    value: item.letter,
                    content: item.letter,
                    name: item.name,
                  },
                  {
                    id: `picture_${item.animal}`,
                    type: "picture",
                    value: item.letter,
                    content: item.animal,
                    name: item.name,
                  },
                ]);
                setCards([...cardPairs].sort(() => Math.random() - 0.5));
              }}
              onHome={() => setCurrentScreen("home")}
            />
          )}
        </div>
      </div>
    );
  };
  // LetterHuntGame Component
  const LetterHuntGame = ({ setCurrentGame }) => {
    const [currentLetter, setCurrentLetter] = useState("");
    const currentLetterObject = alphabetData.find(
      (obj) => obj.char === currentLetter
    );
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(30);
    const [gameObjects, setGameObjects] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showGameOver, setShowGameOver] = useState(false);
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [totalQuestions] = useState(10);

    // Helper function to calculate rating
    const getRating = (score, total) => {
      const percentage = (score / total) * 100;
      if (percentage >= 90) return { text: "Excellent!", color: "#1CA34E" };
      if (percentage >= 70) return { text: "Good!", color: "#4CAF50" };
      if (percentage >= 50) return { text: "Fair!", color: "#FFC107" };
      return { text: "Try Again", color: "#F44336" };
    };

    const distractionEmojis = [
      apple,
      ball,
      cat,
      dog,
      elephant,
      fish,
      giraffe,
      hat,
      icecream,
      juice,
      penguin,
      juice,
      koala,
      lion,
      moon,
      necklace,
      orange,
      penguin,
      queen,
      rabit,
      sun,
      tree,
      unicorn,
      violin,
      whale,
      xylophone,
      yellow,
      zebra,
    ];

    const generatePosition = () => ({
      top: `${Math.random() * 80 + 5}%`,
      left: `${Math.random() * 80 + 5}%`,
      transform: `rotate(${Math.random() * 360}deg)`,
    });

    const createGameObjects = (targetLetter) => {
      return [
        // Target letters (3)
        ...Array(3)
          .fill()
          .map((_, i) => ({
            id: `target_${i}`,
            type: "letter",
            value: targetLetter,
            color: "text-purple-600",
            ...generatePosition(),
          })),

        // Decoy letters (12)
        ...Array(12)
          .fill()
          .map((_, i) => ({
            id: `decoy${i}`,
            type: "letter",
            value:
              alphabetData[Math.floor(Math.random() * alphabetData.length)]
                .letter,
            color: [
              "text-blue-500",
              "text-pink-500",
              "text-green-500",
              "text-orange-500",
            ][Math.floor(Math.random() * 4)],
            ...generatePosition(),
          })),

        // Distraction emojis (15)
        ...Array(15)
          .fill()
          .map((_, i) => ({
            id: `distraction${i}`,
            type: "emoji",
            value:
              distractionEmojis[
                Math.floor(Math.random() * distractionEmojis.length)
              ],
            ...generatePosition(),
          })),
      ].sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
      let timer;
      if (isPlaying && time > 0) {
        timer = setInterval(() => {
          setTime((prev) => prev - 1);
          if (time <= 6 && soundEnabled) {
            const tickContext = new (window.AudioContext ||
              window.webkitAudioContext)();
            const osc = tickContext.createOscillator();
            const gain = tickContext.createGain();
            osc.connect(gain);
            gain.connect(tickContext.destination);
            osc.frequency.value = 440;
            gain.gain.value = 0.1;
            osc.start();
            setTimeout(() => osc.stop(), 100);
          }
        }, 1000);
      } else if (time === 0) {
        endGame();
      }
      return () => clearInterval(timer);
    }, [isPlaying, time, score, soundEnabled]);

    const endGame = async () => {
      if (soundEnabled) {
        try {
          const utterance = await initSpeech(
            `Game Over! You found ${score} letters!`,
            { pitch: 1.0, rate: 0.7, volume: 1.0 }
          );
          window.speechSynthesis.speak(utterance);
        } catch (error) {
          console.error("Speech synthesis error:", error);
        }
      }
      setShowGameOver(true);
      setIsPlaying(false);
    };

    const startGame = async () => {
      const newLetter =
        alphabetData[Math.floor(Math.random() * alphabetData.length)].char;
      setCurrentLetter(newLetter);
      setGameObjects(createGameObjects(newLetter));
      setIsPlaying(true);
      setTime(30);
      setScore(0);
      setShowGameOver(false);

      if (soundEnabled) {
        try {
          const utterance = await initSpeech(
            "Let's play Letter Hunt! Ready, set, go!",
            { pitch: 1.0, rate: 0.7, volume: 1.0 }
          );
          window.speechSynthesis.speak(utterance);
        } catch (error) {
          console.error("Speech synthesis error:", error);
        }
      }
    };

    useEffect(() => {
      if (!isPlaying) {
        startGame();
      }
    }, []);

    const handleClick = async (obj) => {
      if (!isPlaying) return;

      if (obj.type === "letter" && obj.value === currentLetter) {
        const context = new (window.AudioContext ||
          window.webkitAudioContext)();
        const oscillator = context.createOscillator();
        const gainNode = context.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(context.destination);
        oscillator.frequency.value = 800;
        gainNode.gain.value = 0.1;
        oscillator.start();
        setTimeout(() => oscillator.stop(), 100);

        // Only increment score if we haven't reached the maximum
        if (score < totalQuestions) {
          setScore((prevScore) => prevScore + 1);
        }

        if (soundEnabled) {
          try {
            const messages = [
              "Wonderful! You found it!",
              "Great job! You're doing amazing!",
              "Fantastic! Keep going!",
              "Super! You're so good at this!",
              "Excellent finding! You're a star!",
            ];
            const utterance = await initSpeech(
              messages[Math.floor(Math.random() * messages.length)],
              { pitch: 1.0, rate: 0.7, volume: 1.0 }
            );
            window.speechSynthesis.speak(utterance);
          } catch (error) {
            console.error("Speech synthesis error:", error);
          }
        }

        const newLetter =
          alphabetData[Math.floor(Math.random() * alphabetData.length)].char;
        setCurrentLetter(newLetter);
        setGameObjects(createGameObjects(newLetter));
      }
    };

    const CelebrationDialog = ({
      onRestart,
      onHome,
      score,
      total,
      onClose,
    }) => {
      const rating = getRating(score, total);

      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 flex items-center justify-center bg-black/30 z-50"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-white rounded-lg p-6 max-w-xs w-full mx-4 text-center shadow-md"
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex justify-center mb-3">
              <img src={congratulations} alt="Trophy" />
            </div>

            <h2
              className="text-2xl font-bold mb-3"
              style={{ color: "#1CA34E", fontSize: "14px", fontWeight: "500" }}
            >
              Congratulations!
            </h2>

            <div className="space-y-1 mb-5">
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#2E2E2E",
                }}
              >
                Your Score: {Math.min(score, total)}/{total}. Rating:
                <span style={{ color: rating.color, marginLeft: "4px" }}>
                  {rating.text}
                </span>
              </p>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={onHome}
                className="flex-1 py-2 px-4 rounded-md transition-colors text-sm border"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "#D0D5DD",
                  color: "#344054",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
              >
                Back to Home
              </button>
              <button
                onClick={onRestart}
                className="flex-1 py-2 px-4 rounded-md transition-colors text-sm"
                style={{
                  backgroundColor: "#E8BE5D",
                  color: "#344054",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
              >
                Play again
              </button>
            </div>
          </motion.div>
        </motion.div>
      );
    };

    return (
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center px-2 sm:px-4"
        style={{
          backgroundImage: `url(${letterhunt})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
        }}
      >
        <div
          className="rounded-3xl shadow-lg p-4 sm:p-6 md:p-8 w-full max-w-[98vw] sm:max-w-[900px] md:max-w-[1100px]"
          style={{
            background: "#FFE098",
            border: "10px solid #B59448",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4 px-2">
            <button onClick={() => setCurrentGame(null)}>
              <img
                src={arrowLeft}
                alt="arrow"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </button>

            <h2 className="text-lg sm:text-2xl font-bold text-black text-center">
              Letter Hunt
            </h2>

            <img
              src={cartoonIcon}
              alt={soundEnabled ? "Sound On" : "Sound Off"}
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="w-12 h-12 sm:w-16 sm:h-16 cursor-pointer hover:opacity-80 transition"
            />
          </div>

          {/* Game Area */}
          {isPlaying && (
            <>
              <div className="mb-4 text-sm sm:text-lg font-bold flex justify-between items-center">
                <span className="text-black">Score: {score}</span>
                <span style={{ color: time <= 10 ? "#EF4444" : "#0D4B24" }}>
                  Time: {time}s
                </span>
              </div>

              <div
                className="relative w-full h-[420px] sm:h-[500px] bg-white rounded-xl overflow-hidden flex flex-col justify-start"
                style={{ paddingBottom: "30px" }}
              >
                <div className="text-lg sm:text-2xl text-center p-2">
                  Find the letter:
                  {currentLetterObject && (
                    <img
                      src={currentLetterObject.CapitalLetter}
                      alt={currentLetterObject.char}
                      className="w-12 h-12 sm:w-16 sm:h-16 inline-block ml-2"
                    />
                  )}
                </div>

                <div className="bg-[#FFEAB9] flex-1 rounded-[10px] p-3 sm:p-4 relative mx-2 sm:mx-6 overflow-hidden">
                  {gameObjects.map((obj) => (
                    <motion.div
                      key={obj.id}
                      className={`absolute cursor-pointer text-xl sm:text-3xl ${
                        obj.color || ""
                      }`}
                      style={{
                        top: obj.top,
                        left: obj.left,
                        transform: obj.transform,
                      }}
                      onClick={() => handleClick(obj)}
                      whileHover={{ scale: 1.2 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {typeof obj.value === "string" &&
                      (obj.value.endsWith(".svg") ||
                        obj.value.endsWith(".png") ||
                        obj.value.startsWith("http")) ? (
                        <img
                          src={obj.value}
                          alt="letter"
                          className="w-8 h-8 sm:w-10 sm:h-10"
                        />
                      ) : (
                        obj.value
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </>
          )}

          {showGameOver && (
            <CelebrationDialog
              onRestart={() => {
                setShowGameOver(false);
                startGame();
              }}
              onHome={() => setCurrentGame(null)}
              onClose={() => setShowGameOver(false)}
              score={score}
              total={totalQuestions}
            />
          )}
        </div>
      </div>
    );
  };
  // GamesScreen Component
  const GamesScreen = ({ setCurrentScreen }) => {
    const [currentGame, setCurrentGame] = useState(null);

    if (currentGame === "match") {
      return (
        <div>
          <LetterMatchGame setCurrentGame={setCurrentGame} />
          {/* <Button
            onClick={() => setCurrentGame(null)}
            className="mt-6 bg-gray-100 hover:bg-gray-200 text-gray-700"
          >
            Back to Games
          </Button> */}
        </div>
      );
    }

    if (currentGame === "hunt") {
      return (
        <div>
          <LetterHuntGame setCurrentGame={setCurrentGame} />
          {/* <Button
            onClick={() => setCurrentGame(null)}
            className="mt-6 bg-gray-100 hover:bg-gray-200 text-gray-700"
          >
            Back to Games
          </Button> */}
        </div>
      );
    }

    return (
      <>
        <ChooseGame
          setCurrentGame={setCurrentGame}
          setCurrentScreen={setCurrentScreen}
          goBack={() => setCurrentScreen("home")}
        />

        {/* <div className="text-center">
         <h2 className="text-2xl font-bold mb-6 text-green-500">Chjjjoose a Game</h2>
        <div className="space-y-4">
         <Button 
             onClick={() => setCurrentGame('match')}
             className="w-full py-4 bg-blue-400 text-white hover:bg-blue-500 rounded-xl"
           >
             🎯 Letter Match
           </Button>
           <Button 
             onClick={() => setCurrentGame('hunt')}
             className="w-full py-4 bg-purple-400 text-white hover:bg-purple-500 rounded-xl"
           >
             🎮 Letter Hunt
           </Button>
         </div>
       </div>   */}
      </>
    );
  };

  // ProgressScreen Component
  const ProgressScreen = () => (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-6 text-yellow-500">My Progress</h2>
      <div className="space-y-6">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-green-100 rounded-xl p-6"
        >
          <h3 className="font-bold text-green-700">Letters Learned</h3>
          <div className="text-2xl mt-2">A B C D E F</div>
        </motion.div>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-blue-100 rounded-xl p-6"
        >
          <h3 className="font-bold text-blue-700">Games Completed</h3>
          <div className="text-4xl mt-2">🏆 3</div>
        </motion.div>
      </div>
    </div>
  );

  // Screen rendering logic
  const renderScreen = () => {
    switch (currentScreen) {
      case "selectCharacter":
        return <SelectCharacter setCurrentScreen={handleScreenChange} />;
      case "home":
        return (
          <HomeScreen
            setCurrentScreen={handleScreenChange}
            goBack={() => setCurrentScreen("selectCharacter")}
          />
        );
      case "learn":
        return (
          <LearnScreen
            setCurrentScreen={handleScreenChange}
            goBack={() => setCurrentScreen("home")}
          />
        );
      case "games":
        return <GamesScreen setCurrentScreen={handleScreenChange} />;
      case "chooseGame":
        return (
          <ChooseGame
            setCurrentScreen={handleScreenChange}
            goBack={() => setCurrentScreen(previousScreen)} // ← Pass goBack handler
          />
        );
      case "progress":
        return <ProgressScreen />;
      // default:
      //   return <HomeScreen setCurrentScreen={handleScreenChange}  goBack={() => setCurrentScreen("selectCharacter")} />;
    }
  };

  const [showIntro, setShowIntro] = useState(true);
  const [showSplash, setShowSplash] = useState(false);
  // App's return statement
  return (
    <div style={{ height: "100vh" }}>
      {showIntro ? (
        <AnimatedIntro
          onStart={() => {
            setShowIntro(false); // hide intro
            setShowSplash(true); // show splash
          }}
        />
      ) : showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <>{renderScreen()}</>
      )}
    </div>
  );
}
export default App;
