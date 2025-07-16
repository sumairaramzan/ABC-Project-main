import React, { useState, useEffect, useCallback } from "react";
import CustomErrorBoundary from "./CustomErrorBoundary";
import "./App.css";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import Joyride from "react-joyride";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";
import feature_icon from "./assets/images/Featured_icon.svg";
import close_img from "./assets/images/x-close.svg";
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
import loginLogo from "./assets/images/login-logo.svg";
import loginBg from "./assets/images/login-bgImg.png";
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
import oopsImage from "./assets/images/oopsImage.png";
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
  wrongAttempt: new Audio(
    "https://assets.mixkit.co/active_storage/sfx/1382/1382-preview.mp3"
  ), // Example wrong sound
};

// Alphabet data
const alphabetData = [
  {
    char: "A", // actual letter to speak
    letter: aaIcon, // image
    animal: appleIcon,
    name: "Apple",
    CapitalLetter: A,
    singleAnimal: apple,
  },
  {
    char: "B",
    letter: bIcon,
    animal: ballIcon,
    name: "Ball",
    CapitalLetter: B,
    singleAnimal: ball,
  },
  {
    char: "C",
    letter: cletter,
    animal: cAnimal,
    name: "Cat",
    CapitalLetter: C,
    singleAnimal: cat,
  },
  {
    char: "D",
    letter: dletter,
    animal: dAnimal,
    name: "Dog",
    CapitalLetter: D,
    singleAnimal: dog,
  },
  {
    char: "E",
    letter: eletter,
    animal: eAnimal,
    name: "Elephant",
    CapitalLetter: E,
    singleAnimal: elephant,
  },
  {
    char: "F",
    letter: fletter,
    animal: fAnimal,
    name: "Fish",
    CapitalLetter: F,
    singleAnimal: fish,
  },
  {
    char: "G",
    letter: gletter,
    animal: gAnimal,
    name: "Giraffe",
    CapitalLetter: G,
    singleAnimal: giraffe,
  },
  {
    char: "H",
    letter: hletter,
    animal: hAnimal,
    name: "Hat",
    CapitalLetter: H,
    singleAnimal: hat,
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
    singleAnimal: juice,
  },
  {
    char: "K",
    letter: kletter,
    animal: kAnimal,
    name: "Koala",
    CapitalLetter: K,
    singleAnimal: koala,
  },
  {
    char: "L",
    letter: lletter,
    animal: lAnimal,
    name: "Lion",
    CapitalLetter: L,
    singleAnimal: lion,
  },
  {
    char: "M",
    letter: mletter,
    animal: mAnimal,
    name: "Moon",
    CapitalLetter: M,
    singleAnimal: moon,
  },
  {
    char: "N",
    letter: nletter,
    animal: nAnimal,
    name: "Necklace",
    CapitalLetter: N,
    singleAnimal: necklace,
  },
  {
    char: "O",
    letter: oletter,
    animal: oAnimal,
    name: "Orange",
    CapitalLetter: O,
    singleAnimal: orange,
  },
  {
    char: "P",
    letter: pletter,
    animal: pAnimal,
    name: "Penguin",
    CapitalLetter: P,
    singleAnimal: penguin,
  },
  {
    char: "Q",
    letter: qletter,
    animal: qAnimal,
    name: "Queen",
    CapitalLetter: Q,
    singleAnimal: queen,
  },
  {
    char: "R",
    letter: rletter,
    animal: rAnimal,
    name: "Rabbit",
    CapitalLetter: R,
    singleAnimal: rabit,
  },
  {
    char: "S",
    letter: sletter,
    animal: sAnimal,
    name: "Sun",
    CapitalLetter: S,
    singleAnimal: sun,
  },
  {
    char: "T",
    letter: tletter,
    animal: tAnimal,
    name: "Tree",
    CapitalLetter: T,
    singleAnimal: tree,
  },
  {
    char: "U",
    letter: uletter,
    animal: uAnimal,
    name: "Unicorn",
    CapitalLetter: U,
    singleAnimal: unicorn,
  },
  {
    char: "V",
    letter: vletter,
    animal: vAnimal,
    name: "Violin",
    CapitalLetter: V,
    singleAnimal: violin,
  },
  {
    char: "W",
    letter: wletter,
    animal: wAnimal,
    name: "Whale",
    CapitalLetter: W,
    singleAnimal: whale,
  },
  {
    char: "X",
    letter: xletter,
    animal: xAnimal,
    name: "Xylophone",
    CapitalLetter: X,
    singleAnimal: xylophone,
  },
  {
    char: "Y",
    letter: yletter,
    animal: yAnimal,
    name: "Yellow",
    CapitalLetter: Y,
    singleAnimal: yellow,
  },
  {
    char: "Z",
    letter: zletter,
    animal: zAnimal,
    name: "Zebra",
    CapitalLetter: Z,
    singleAnimal: zebra,
  },
];
const SignupSuccessModal = ({ onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md shadow-lg relative">
        {/* Top section with image and close icon */}
        <div className="flex items-start justify-between p-4">
          <img
            src={feature_icon} // Replace with your icon/image
            alt="Success Icon"
          />

          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <img
              src={close_img} // Replace with your icon/image
              alt="Success Icon"
              className="w-10 h-10"
            />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          <h3 className="text-[#101828] text-[18px] font-semibold mb-2 text-left">
            Signup Successful!
          </h3>
          <p className="text-[#475467] text-[14px] font-normal mb-6 text-left">
            Welcome onboard! Your account has been created successfully. You can
            now start exploring and playing!
          </p>

          <button
            onClick={onConfirm}
            className="w-full bg-[#3A86FF] text-white text-[16px] font-semibold py-2 rounded-md hover:bg-blue-600 transition"
          >
            Let’s Go
          </button>
        </div>
      </div>
    </div>
  );
};

const SignupScreen = ({
  error,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  handleSignup,
  showModal,
  handleClose,
  handleConfirm,
  setCurrentScreen,
  hasSpecialChar,
  isLengthValid,
}) => (
  <div
    className="w-screen h-screen flex items-center justify-center"
    style={{
      backgroundImage: `url(${loginBg})`,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  >
    <div className="bg-white bg-opacity-80 p-10 rounded-xl shadow-md w-full max-w-md">
      {/* Logo + Title */}
      <div className="flex flex-col items-center mb-6">
        <img src={loginLogo} alt="Logo" className="mb-2" />
      </div>

      {/* Heading */}
      <h2 className="text-[#101828] text-[24px] font-semibold text-center mb-6">
        Create an account
      </h2>

      <form className="space-y-4" onSubmit={handleSignup}>
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
        {/* Name */}
        <div>
          <label className="block text-[#344054] text-[14px] font-medium mb-1">
            Name*
          </label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-[#D0D5DD] text-[#667085] text-[16px] font-normal rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#667085]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-[#344054] text-[14px] font-medium mb-1">
            Email*
          </label>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-[#D0D5DD] text-[#667085] text-[16px] font-normal rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#667085]"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-[#344054] text-[14px] font-medium mb-1">
            Password*
          </label>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-[#D0D5DD] text-[#667085] text-[16px] font-normal rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#667085]"
          />
        </div>

        <div className="d-flex flex-column gap-3">
          {/* Checkbox 1 */}
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              className="custom-check"
              id="requirement1"
              checked={isLengthValid}
              readOnly
            />
            <label htmlFor="requirement1" className="custom-check-label">
              Must be at least 8 characters
            </label>
          </div>

          {/* Checkbox 2 */}
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              className="custom-check"
              id="requirement2"
              checked={hasSpecialChar}
              readOnly
            />
            <label htmlFor="requirement2" className="custom-check-label">
              Must contain one special character
            </label>
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-[#295FB5] text-white text-[16px] font-semibold py-2 rounded-lg hover:bg-[#1d4ea8] transition"
        >
          Get started
        </button>
      </form>
      {showModal && (
        <SignupSuccessModal onClose={handleClose} onConfirm={handleConfirm} />
      )}

      {/* Footer */}
      <p className="text-center text-[#475467] text-[14px] font-normal mt-4">
        Already have an account?{" "}
        <a
          href="#"
          className="text-[#295FB5] text-[14px] font-medium hover:underline"
          onClick={() => setCurrentScreen("login")}
        >
          Log in
        </a>
      </p>
    </div>
  </div>
);
const LoginScreen = ({
  error,
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
  setCurrentScreen,
}) => (
  <div
    className="w-screen h-screen flex items-center justify-center"
    style={{
      backgroundImage: `url(${loginBg})`,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  >
    <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-md bg-color">
      {/* Logo + Title */}
      <div className="flex flex-col items-center mb-6">
        <img src={loginLogo} alt="Logo" className="mb-2" />
      </div>

      <h2 className="text-[#101828] text-[24px] font-semibold text-center mb-6">
        Sign in to your account
      </h2>

      <form className="space-y-4" onSubmit={handleLogin}>
        {error && (
          <p className="text-red-600 text-sm mb-2 text-center">{error}</p>
        )}
        {/* Email Field */}
        <div>
          <label className="block text-[#344054] text-[14px] font-medium mb-1">
            Email*
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-[#D0D5DD] text-[#667085] text-[16px] font-normal rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#667085]"
          />
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-[#344054] text-[14px] font-medium mb-1">
            Password*
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-[#D0D5DD] text-[#667085] text-[16px] font-normal rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#667085]"
          />
          <div className="text-right mt-1">
            <a
              href="#"
              className="text-[#295FB5] text-[14px] font-medium hover:underline"
              onClick={() => setCurrentScreen("forgot")}
            >
              Forgot password
            </a>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#295FB5] text-white text-[16px] font-semibold py-2 rounded-lg hover:bg-[#1d4ea8] transition"
        >
          Sign in
        </button>
      </form>

      <p className="text-center text-[#475467] text-[14px] font-normal mt-4">
        Don't have an account?{" "}
        <a
          href="#"
          className="text-[#295FB5] text-[14px] font-medium hover:underline"
          onClick={() => setCurrentScreen("signup")}
        >
          Sign up
        </a>
      </p>
    </div>
  </div>
);
const ResetPasswordScreen = ({
  token,
  setCurrentScreen,
  password,
  setPassword,
  message,
  setMessage,
  error,
  setError,
  handleReset,
}) => (
  <div
    className="w-screen h-screen flex items-center justify-center"
    style={{
      backgroundImage: `url(${loginBg})`,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  >
    <form
      onSubmit={handleReset}
      className="bg-white p-8 rounded shadow-md w-full max-w-md"
    >
      <h2 className="text-xl font-bold mb-4">Reset Your Password</h2>

      <input
        type="password"
        placeholder="Enter new password"
        className="w-full px-4 py-2 mb-4 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        Reset Password
      </button>

      {message && <p className="text-green-600 mt-4">{message}</p>}
      {error && <p className="text-red-600 mt-4">{error}</p>}
    </form>
  </div>
);
const ForgotPasswordScreen = ({
  setCurrentScreen,
  email,
  setEmail,
  message,
  setMessage,
  error,
  setError,
  handleForgotPassword,
  setResetToken,
}) => (
  <div
    className="w-screen h-screen flex items-center justify-center"
    style={{
      backgroundImage: `url(${loginBg})`,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  >
    <div className="bg-white bg-opacity-80 p-10 rounded-xl shadow-md w-full max-w-md">
      {/* Logo */}
      <div className="flex flex-col items-center mb-6">
        <img src={loginLogo} alt="Logo" className="mb-2" />
      </div>

      {/* Heading */}
      <h2
        className="text-[#101828] text-[24px] font-semibold text-center mb-2"
        onClick={() => setCurrentScreen("forgot")}
      >
        Forgot Password?
      </h2>

      {/* Subheading */}
      <p className="text-[#475467] text-[14px] font-normal text-center mb-6">
        We'll send you a link to create a new password.
      </p>

      <form className="space-y-4" onSubmit={handleForgotPassword}>
        <div>
          <label className="block text-[#344054] text-[14px] font-medium mb-1">
            Email*
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 border border-[#D0D5DD] text-[#667085] text-[16px] font-normal rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#667085]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#295FB5] text-white text-[16px] font-semibold py-2 rounded-lg hover:bg-[#1d4ea8] transition"
        >
          Send code
        </button>

        {message && <p className="text-green-600 text-sm mt-2">{message}</p>}
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      </form>

      {/* Footer */}
      <p className="text-center text-[#475467] text-[14px] font-normal mt-4">
        Already have an account?{" "}
        <a
          href="#"
          className="text-[#295FB5] text-[14px] font-medium hover:underline"
          onClick={() => setCurrentScreen("login")}
        >
          Log in
        </a>
      </p>
    </div>
  </div>
);

function App() {
  const [currentScreen, setCurrentScreen] = useState("login");
  const [resetToken, setResetToken] = useState("");
  const [previousScreen, setPreviousScreen] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [isAvatarUpdate, setIsAvatarUpdate] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // Optionally verify token with backend
      setCurrentScreen("selectCharacter"); // or your main/home/dashboard screen
    }
  }, []);

  useEffect(() => {
    setIsLengthValid(password.length >= 8);
    setHasSpecialChar(/[^A-Za-z0-9]/.test(password)); // checks for special characters
  }, [password]);

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const res = await fetch(
        `http://localhost:5000/api/auth/reset-password/${resetToken}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password }),
        }
      );

      const data = await res.json();

      if (!res.ok) return setError(data.msg || "Reset failed");

      setMessage("Password reset successful!");
      // Optionally navigate back to login screen
      setTimeout(() => setCurrentScreen("login"), 2000);
    } catch (err) {
      setError("Something went wrong");
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const res = await fetch(
        "http://localhost:5000/api/auth/forgot-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.msg || "Something went wrong");
        return;
      }

      setMessage("Reset link sent! Redirecting...");
      console.log("Reset URL:", data.resetUrl);

      // ✅ Step 1: extract token from resetUrl
      const urlParts = data.resetUrl.split("/");
      const token = urlParts[urlParts.length - 1];
      setResetToken(token); // Update your `resetToken` state

      // ✅ Step 2: navigate to resetPassword screen
      setTimeout(() => {
        setCurrentScreen("resetPassword");
      }, 1000);
    } catch (err) {
      setError("Server error, please try again.");
    }
  };

  // const handleLogin = async (e) => {
  //   e.preventDefault();

   
  //   if (!email || !password) {
  //     setError("Email and password are required.");
  //     return;
  //   }


  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(email)) {
  //     setError("Enter a valid email address.");
  //     return;
  //   }

  //   setLoading(true);
  //   setError("");

  //   try {
  //     const res = await fetch("http://localhost:5000/api/auth/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     const data = await res.json();

  //     if (!res.ok) {
  //       setError(data.msg || "Login failed. Please try again.");
  //       setLoading(false);
  //       return;
  //     }

  //     console.log("Login successful:", data);
  //     localStorage.setItem("token", data.token);
  //     setCurrentScreen("selectCharacter");
  //   } catch (err) {
  //     setError("Something went wrong. Please try again later.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  const handleLogin = async (e) => {
    e.preventDefault();
  
    // ✅ Frontend validation
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
  
    setLoading(true);
    setError("");
  
    try {
      // ✅ MOCK LOGIN: Skip API call
      const mockToken = "mock-token-12345";
      localStorage.setItem("token", mockToken);
      console.log("Mock login successful!");
  
      // ✅ Navigate to the next screen
      setCurrentScreen("selectCharacter");
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  
  const handleSignup = async (e) => {
    e.preventDefault();

    // Basic frontend validation
    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }), // ✅ Include `name` here!
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.msg || "Signup failed.");
        setLoading(false);
        return;
      }

      console.log("Signup successful:", data);
      setShowModal(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  const handleClose = () => setShowModal(false);
  const handleConfirm = () => {
    setShowModal(false);
    setCurrentScreen("login"); // or wherever you want to go next
  };

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
            Your Score: {score}.Rating: Excellent!
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
          <div className="boardYellow">
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
                  onClick={() => {
                    if (!isSpeaking && soundEnabled) {
                      playSound(currentLetter.char, currentLetter.name);
                    }
                  }}
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
          content: item.singleAnimal,
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

    const steps = [
      {
        element: ".back-arrow",
        popover: {
          title: "Back Button",
          description: "Click here to return to the main menu.",
        },

        stageRadius: 50,
      },
      {
        element: ".game-title",
        popover: {
          title: "Game Title",
          description: "This is the name of your current game.",
        },

        stageRadius: 80,
      },
      {
        element: ".game-board-wrapper",
        popover: {
          title: "Game Board",
          description: "Match the correct cards here.",
        },

        stageRadius: 120,
      },
    ];
    useEffect(() => {
      const hasSeenTour = localStorage.getItem("letterMatchTourSeen");

      if (!hasSeenTour) {
        const tour = driver({
          showButtons: true,
          allowClose: true,
          overlayOpacity: 0.75,
          nextBtnText: "Next",
          prevBtnText: "Back",
          doneBtnText: "Done",
          steps,
          stageRadius: 100,
          onHighlightStarted: () => {
            window.speechSynthesis.cancel();
          },
          onDestroyed: () => {
            // ✅ Mark the tour as seen in localStorage
            localStorage.setItem("letterMatchTourSeen", "true");
            // Optional: Add any post-tour logic here
          },
        });

        setTimeout(() => {
          tour.drive();
        }, 500);
      }
    }, []);

    return (
      <div
        className="game-wrapper"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="game-container">
          {/* Header */}
          <div className="game-header">
            <button onClick={() => setCurrentGame(null)}>
              <img
                src={arrowLeft}
                alt="arrow"
                style={{ width: 28, height: 28 }}
              />
            </button>
            <h2 className="game-title">Letter Match</h2>
            <button
              onClick={() => {
                if (!isSpeaking) {
                  setSoundEnabled(!soundEnabled);
                  if (!soundEnabled)
                    playSound(currentLetter.char, currentLetter.name);
                }
              }}
            >
              <img
                src={soundEnabled ? cartoonIcon : cartoonIconOff}
                alt={soundEnabled ? "Cartoon Sound On" : "Cartoon Sound Off"}
                style={{
                  width: 60,
                  height: 60,
                  objectFit: "contain",
                  transition: "opacity 0.3s",
                }}
              />
            </button>
          </div>

          {/* Grid */}
          <div className="card-grid-wrapper">
            <div className="card-grid-inner">
              <div className="card-grid card-grid-wrapper">
                {cards.map((card) => {
                  const isFlipped =
                    flippedCards.includes(card.id) ||
                    matchedPairs.includes(card.value);
                  const backgroundUrl = isFlipped ? back : cardFront;

                  return (
                    <motion.div
                      key={card.id}
                      className="card"
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
                            className="card-content"
                            draggable={false}
                            style={
                              card.type === "letter"
                                ? { width: "120px", height: "auto" }
                                : {}
                            }
                          />
                        ) : (
                          <span
                            className="card-text"
                            style={
                              card.type === "letter"
                                ? { fontSize: "100px" }
                                : {}
                            }
                          >
                            {card.content}
                          </span>
                        ))}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="progress-section">
            <div className="progress-bar-container">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${score}%` }} />
              </div>
              <span className="progress-label">{score}%</span>
            </div>
            <div className="moves">Moves: {moves}</div>
          </div>

          {/* Celebration Dialog */}
        </div>

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
    const [gameReady, setGameReady] = useState(false);
    const [showCelebrationDialog, setShowCelebrationDialog] = useState(false);

    // Helper function to calculate rating
    const getRating = (score) => {
      if (score >= 9) return { text: "Excellent!", color: "#1CA34E" };
      if (score >= 7) return { text: "Good!", color: "#4CAF50" };
      if (score >= 5) return { text: "Fair!", color: "#FFC107" };
      return { text: "Try Again", color: "#F44336" };
    };

    const generatePosition = (usedPositions, threshold = 12) => {
      let position;
      let attempts = 0;
      do {
        const top = Math.random() * 80 + 5;
        const left = Math.random() * 80 + 5;
        position = {
          top,
          left,
          rotation: Math.random() * 40 - 20,
        };
        attempts++;
      } while (
        usedPositions.some(
          (p) =>
            Math.abs(p.top - position.top) < threshold &&
            Math.abs(p.left - position.left) < threshold
        ) &&
        attempts < 100
      );

      usedPositions.push({ top: position.top, left: position.left });
      return {
        top: `${position.top}%`,
        left: `${position.left}%`,
        rotation: position.rotation,
      };
    };

    const createGameObjects = (targetLetter) => {
      const usedPositions = [];
      const targetObj = alphabetData.find((item) => item.char === targetLetter);

      return [
        // Target letters (3)
        ...Array(3)
          .fill()
          .map((_, i) => ({
            id: `target_${i}`,
            type: "CapitalLetter",
            value: targetObj.CapitalLetter,
            char: targetObj.char,
            color: "text-purple-600",
            ...generatePosition(usedPositions),
          })),

        // Decoy letters (12)
        ...Array(12)
          .fill()
          .map((_, i) => {
            const decoy =
              alphabetData[Math.floor(Math.random() * alphabetData.length)];
            return {
              id: `decoy_${i}`,
              type: "CapitalLetter",
              value: decoy.CapitalLetter,
              char: decoy.char,
              color: [
                "text-blue-500",
                "text-pink-500",
                "text-green-500",
                "text-orange-500",
              ][Math.floor(Math.random() * 4)],
              ...generatePosition(usedPositions),
            };
          }),
      ].sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
      let timer;
      if (isPlaying && gameReady && time > 0) {
        timer = setInterval(() => {
          setTime((prevTime) => {
            if (prevTime <= 1) {
              clearInterval(timer);
              endGame();
              return 0;
            } else {
              // Play ticking sound if near end
              if (prevTime <= 6 && soundEnabled) {
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
              return prevTime - 1;
            }
          });
        }, 1000);
      }

      return () => clearInterval(timer);
    }, [isPlaying, gameReady, time, soundEnabled]);

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
      if (!isPlaying && !showGameOver && score === 0) {
        startGame();
      }
    }, [isPlaying, showGameOver, score]);

    const handleClick = async (obj) => {
      if (!isPlaying) return;

      // ✅ Correct letter
      if (obj.type === "CapitalLetter" && obj.char === currentLetter) {
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

        setScore((prevScore) => prevScore + 1);

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
      // ❌ Wrong letter
      else if (obj.type === "CapitalLetter" && obj.char !== currentLetter) {
        if (soundEnabled && SOUNDS.wrongAttempt) {
          SOUNDS.wrongAttempt.play();
        }

        try {
          const utterance = await initSpeech("Oops! Wrong letter!", {
            pitch: 1.0,
            rate: 0.7,
            volume: 1.0,
          });
          window.speechSynthesis.speak(utterance);
        } catch (err) {
          console.error("Speech error on wrong attempt:", err);
        }
      }
    };

    const CelebrationDialog = ({
      onRestart,
      onHome,
      score,
      total,
      onClose,
    }) => {
      const rating = getRating(score);

      const isLowScore = score < 5;

      const imageSrc = isLowScore ? oopsImage : congratulations;
      const headingText = isLowScore ? "Oops!" : "Congratulations!";
      const headingColor = isLowScore ? "#E84640" : "#1CA34E";
      const ratingText = isLowScore ? "Not Good" : rating.text;
      const ratingColor = isLowScore ? "#2E2E2E" : rating.color;

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
              <img src={imageSrc} alt="Result" />
            </div>

            <h2
              className="text-2xl font-bold mb-3"
              style={{
                color: headingColor,
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              {headingText}
            </h2>

            <div className="space-y-1 mb-5">
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#2E2E2E",
                }}
              >
                Your Score: {score}. Rating:
                <span style={{ color: ratingColor, marginLeft: "4px" }}>
                  {ratingText}
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
                  fontSize: "12px",
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
                  fontSize: "13px",
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
    const smallScreen = window.innerWidth <= 425;
    const steps = [
      {
        element: ".back-arrow",
        popover: {
          title: "Back Button",
          description: "Click here to go back to the main menu.",
        },
        style: {
          title: {
            fontSize: smallScreen ? "18px" : "16px",
          },
          description: {
            fontSize: smallScreen ? "16px" : "14px",
          },
        },
        stageRadius: 50,
      },
      {
        element: ".game-title",
        popover: {
          title: "Game Title",
          description: "This is the name of your current game.",
        },
        style: {
          title: {
            fontSize: smallScreen ? "18px" : "16px",
          },
          description: {
            fontSize: smallScreen ? "16px" : "14px",
          },
        },
        stageRadius: 80,
      },
      {
        element: ".score",
        popover: {
          title: "Your Score",
          description: "Keep track of how many correct answers you’ve gotten.",
        },
        style: {
          title: {
            fontSize: smallScreen ? "18px" : "16px",
          },
          description: {
            fontSize: smallScreen ? "16px" : "14px",
          },
        },
        stageRadius: 60,
      },
      {
        element: ".time",
        popover: {
          title: "Timer",
          description: "You have limited time. Watch it closely!",
        },
        style: {
          title: {
            fontSize: smallScreen ? "18px" : "16px",
          },
          description: {
            fontSize: smallScreen ? "16px" : "14px",
          },
        },
        stageRadius: 60,
      },
      {
        element: ".target-letter",
        popover: {
          title: "Target Letter",
          description: "This is the letter you need to find.",
        },
        style: {
          title: {
            fontSize: smallScreen ? "18px" : "16px",
          },
          description: {
            fontSize: smallScreen ? "16px" : "14px",
          },
        },
        stageRadius: 60,
      },
      {
        element: ".game-board-wrapper",
        popover: {
          title: "Game Board",
          description: "Tap the correct letter here!",
        },
        style: {
          title: {
            fontSize: smallScreen ? "18px" : "16px",
          },
          description: {
            fontSize: smallScreen ? "16px" : "14px",
          },
        },
        stageRadius: 150,
      },
      {
        element: ".celebration",
        popover: {
          title: "Game Over",
          description: "You’ve finished! Restart or go home.",
          position: "center",
        },
        style: {
          title: {
            fontSize: smallScreen ? "18px" : "16px",
          },
          description: {
            fontSize: smallScreen ? "16px" : "14px",
          },
        },
        stageRadius: 80,
      },
    ];

    useEffect(() => {
      const hasSeenTours = localStorage.getItem("letterMatchTourSeens");

      if (!hasSeenTours) {
        const tour = driver({
          showButtons: true,
          allowClose: true,
          overlayOpacity: 0.75,
          nextBtnText: "Next",
          prevBtnText: "Back",
          doneBtnText: "Done",
          steps,
          stageRadius: 100,
          onHighlightStarted: () => {
            // Pause sounds
            SOUNDS.match.currentTime = 0;
            SOUNDS.match.play();
            window.speechSynthesis.cancel(); // Cancel speech
          },
          onDestroyed: () => {
            // ✅ Mark as seen
            localStorage.setItem("letterMatchTourSeens", "true");

            // ✅ Tour completed — start the game
            setGameReady(true);
            startGame();
          },
        });

        setTimeout(() => {
          tour.drive();
        }, 500);
      } else {
        // ✅ If already seen, start game immediately
        setGameReady(true);
        startGame();
      }
    }, []);

    return (
      <>
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
            className={`rounded-3xl shadow-lg p-4 sm:p-6 md:p-6 w-full max-w-[98vw] sm:max-w-[900px] md:max-w-[1100px] ${
              time > 0 && time <= 5 ? "danger-mode" : ""
            }`}
            style={{
              background: "#FFE098",
            }}
          >
            {/* Header */}
            <div className="game-header flex items-center justify-between mb-4 px-2">
              <button
                onClick={() => setCurrentGame(null)}
                className="back-arrow"
              >
                <img
                  src={arrowLeft}
                  alt="arrow"
                  className="w-10 h-10 sm:w-8 sm:h-8"
                />
              </button>

              <h2 className="text-lg sm:text-2xl md:text-4xl font-bold text-black text-center">
                Letter Hunt
              </h2>

              <img
                src={cartoonIcon}
                alt={soundEnabled ? "Sound On" : "Sound Off"}
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="cursor-pointer hover:opacity-80 transition"
              />
            </div>

            {/* Game Area */}

            <>
              <div className="score-time mb-4 text-sm sm:text-lg font-bold flex justify-between items-center">
                <span className="score text-black" style={{ fontSize: "20px" }}>
                  Score: {score}
                </span>
                <span
                  className="time"
                  style={{
                    color: time <= 5 ? "#EF4444" : "#0D4B24",
                    fontSize: "20px",
                  }}
                >
                  Time: {time}s
                </span>
              </div>

              <div
                className="game-board-wrapper relative w-full h-[420px] sm:h-[400px] bg-white rounded-xl overflow-hidden flex flex-col justify-start"
                style={{ paddingBottom: "30px" }}
              >
                <div
                  className="target-letter text-lg sm:text-2xl text-center p-2"
                  style={{ fontSize: "28px", fontWeight: "500" }}
                >
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
                      className={`absolute cursor-pointer z-10 text-xl sm:text-3xl ${
                        obj.color || ""
                      }`}
                      style={{
                        top: obj.top,
                        left: obj.left,
                        transform: `rotate(${
                          Math.random() * 60 - 30
                        }deg) translateY(${Math.random() * 20 - 10}px)`,
                      }}
                      onClick={() => handleClick(obj)}
                      whileHover={{ scale: 1.2 }}
                      initial={{
                        opacity: 0,
                        scale: 0,
                        y: Math.random() * 100 - 50,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: {
                          type: "spring",
                          stiffness: 100,
                          damping: 10,
                          duration: 0.8,
                        },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        bounce: 0.5,
                      }}
                    >
                      {typeof obj.value === "string" &&
                      (obj.value.endsWith(".svg") ||
                        obj.value.endsWith(".png") ||
                        obj.value.startsWith("http")) ? (
                        <img
                          src={obj.value}
                          alt="CapitalLetter"
                          className="w-10 h-10 sm:w-16 sm:h-16"
                          style={{
                            transform: `rotate(${Math.random() * 40 - 20}deg)`,
                          }}
                        />
                      ) : (
                        obj.value
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </>
          </div>
        </div>
        {showGameOver && (
          <div className="celebration">
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
          </div>
        )}
      </>
    );
  };
  // GamesScreen Component
  const GamesScreen = ({
    setCurrentScreen,
    selectedAvatar,
    setIsAvatarUpdate,
  }) => {
    const [currentGame, setCurrentGame] = useState(null);

    if (currentGame === "match") {
      return (
        <div>
          <LetterMatchGame setCurrentGame={setCurrentGame} />
        </div>
      );
    }

    if (currentGame === "hunt") {
      return (
        <div>
          <LetterHuntGame setCurrentGame={setCurrentGame} />
        </div>
      );
    }

    return (
      <ChooseGame
        setCurrentGame={setCurrentGame}
        setCurrentScreen={setCurrentScreen}
        goBack={() => setCurrentScreen("home")}
        selectedAvatar={selectedAvatar} // ✅ now available
        setIsAvatarUpdate={setIsAvatarUpdate} // ✅ for avatar click
      />
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
        return (
          <SelectCharacter
            setCurrentScreen={handleScreenChange}
            setSelectedAvatar={setSelectedAvatar}
            selectedAvatar={selectedAvatar}
            isAvatarUpdate={isAvatarUpdate}
            setIsAvatarUpdate={setIsAvatarUpdate}
          />
        );
      case "home":
        return (
          <HomeScreen
          setCurrentScreen={handleScreenChange}
          goBack={() => setCurrentScreen("selectCharacter")}
          selectedAvatar={selectedAvatar}
          setIsAvatarUpdate={setIsAvatarUpdate}
          setEmail={setEmail}
          setPassword={setPassword}
          setName={setName}
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
        return (
          <GamesScreen
            setCurrentScreen={handleScreenChange}
            selectedAvatar={selectedAvatar}
            setIsAvatarUpdate={setIsAvatarUpdate}
          />
        );
      case "chooseGame":
        return (
          <GamesScreen
            setCurrentScreen={handleScreenChange}
            selectedAvatar={selectedAvatar} // ✅ pass this!
            setIsAvatarUpdate={setIsAvatarUpdate} // ✅ pass if avatar click needs it
          />
        );
      case "progress":
        return <ProgressScreen />;
      case "login":
        return (
          <LoginScreen
            error={error}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            setCurrentScreen={handleScreenChange}
          />
        );

      case "signup":
        return (
          <SignupScreen
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleSignup={handleSignup}
            showModal={showModal}
            handleClose={handleClose}
            handleConfirm={handleConfirm}
            setCurrentScreen={handleScreenChange}
            error={error}
            isLengthValid={isLengthValid}
            hasSpecialChar={hasSpecialChar}
          />
        );
      case "forgot":
        return (
          <ForgotPasswordScreen
            setCurrentScreen={handleScreenChange}
            email={email}
            setEmail={setEmail}
            message={message}
            setMessage={setMessage}
            error={error}
            setError={setError}
            setResetToken={setResetToken}
            handleForgotPassword={handleForgotPassword}
          />
        );
      case "resetPassword":
        return (
          <ResetPasswordScreen
            token={resetToken}
            setCurrentScreen={handleScreenChange}
            password={password}
            setPassword={setPassword}
            message={message}
            setMessage={setMessage}
            error={error}
            setError={setError}
            handleReset={handleReset}
          />
        );
      // default:
      //   return <HomeScreen setCurrentScreen={handleScreenChange}  goBack={() => setCurrentScreen("selectCharacter")} />;
    }
  };

  const [showIntro, setShowIntro] = useState(true);
  const [showSplash, setShowSplash] = useState(false);
  // App's return statement
  return (
    <div style={{ height: "100vh", msOverflowY: "scroll" }}>
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
