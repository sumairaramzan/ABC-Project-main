import React from "react";
import { motion } from "framer-motion";
import LearnAlphabetIcon from "./assets/images/learnAlphabets.png";
import AlphabetGamesIcon from "./assets/images/AlphabetsGames.png";
import BackgroundImage from "./assets/images/myBg.png";
import BoardImage from "./assets/images/wooden.png";
import BackIcon from "./assets/images/back.svg";
import { pointer } from "@testing-library/user-event/dist/cjs/pointer/index.js";

class HomeScreen extends React.Component {
  render() {
    const { setCurrentScreen, goBack, selectedAvatar } = this.props;

    return (
      <div className="home-container">
         {selectedAvatar && (
            <img
              src={selectedAvatar}
              alt="User Avatar"
              className="user-avatar2"
             
              onClick={() => {
                this.props.setIsAvatarUpdate(true); // ✅ mark as update
                this.props.setCurrentScreen("selectCharacter");
              }}
            />
          )}
        <button onClick={goBack} className="back-button" aria-label="Go back">
          <img src={BackIcon} alt="Back" />
        </button>
        
        <div
          className="board"
          style={{ backgroundImage: `url(${BoardImage})` }}
        >
         
          {/* <h1 className="heading">Choose a Game</h1> */}

          <div className="game-options">
            <motion.div
              className="game-card"
              onClick={() => setCurrentScreen("learn")}
              whileHover={{ scale: 1.05 }}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => e.key === "Enter" && setCurrentScreen("learn")}
            >
              {/* <img src={LearnAlphabetIcon} alt="Learn Alphabet" /> */}
            </motion.div>

            <motion.div
  className="game-card"
  onClick={() => setCurrentScreen("chooseGame")} // ✅ change this
  whileHover={{ scale: 1.05 }}
  tabIndex={0}
  role="button"
  onKeyDown={(e) => e.key === "Enter" && setCurrentScreen("chooseGame")}
/>
          </div>
        </div>

        <style jsx>{`
          .home-container {
            min-height: 100vh;
            width: 100%;
            background-image: url(${BackgroundImage});
            background-size: 100% 100%;
            background-repeat: no-repeat;
            background-position: top center;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
          }

          .board {
            background-image: url(${BoardImage});
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            width: 1054px;
            height: 1012px;
            position: relative;
          }

          .back-button {
            position: absolute;
            top: 20px;
            left: 20px;
            background: none;
            border: none;
            cursor: pointer;
            z-index: 10;
          }

          .back-button img {
            width: 32px;
            height: 32px;
          }

          .heading {
            font-size: 2.5rem;
            font-weight: 700;
            color: #66501e;
            text-align: center;
            margin-bottom: 2rem;
            position: absolute;
            top: 200px;
            left: 300px;
          }

          .game-options {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            justify-content: center;
            position: absolute;
           top: 340px;
    left: 112px;
          }

          .game-card {
            width: 350px;
            height: 250px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 16px;
            cursor: pointer;
            transition: transform 0.3s ease;
            outline: none;
          }

          .game-card img {
            width: 100%;
            height: auto;
            object-fit: contain;
            pointer-events: none;
          }

          /* Breakpoints */

          @media (max-width: 1024px) {
            .board {
              max-width: 728px;
              height: 891px;
            }
            .game-options {
              display: flex;
              gap: 1rem;
              flex-wrap: wrap;
              justify-content: center;
              position: absolute;
              top: 333px;
              left: 206px;
            }

            .heading {
              top: 180px;
              left: 220px;
            }
          }
          @media (max-width: 1440px) {
            .board {
              height: 891px !important;
            }
          }

          @media (max-width: 768px) {
            .board {
              max-width: 669px;
              height: 560px !important;
              margin-top: 263px;
            }
            .heading {
              font-size: 2rem;
              top: 100px;
              left: 140px;
            }
            .game-options {
              top: 204px;
              left: 122px;
            }
            .game-card {
              width: 200px;
              height: 168px;
            }
          }

          @media (max-width: 425px) {
            .board {
              margin-top: 383px;
              width: 400px;
              height: 400px !important;
            }
            .heading {
              font-size: 2rem;
              top: 57px;
              left: 49px;
            }
            .game-options {
              top: 183px;
              left: 71px;
              gap: 10px !important;
            }
            .game-card {
              width: 123px;
              height: 60px;
            }
          }

          @media (max-width: 375px) {
            .board {
              margin-top: 382px;
              width: 400px;
              height: 330px !important;
            }
            .heading {
              top: 51px;
              left: 50px;
            }
            .game-options {
              top: 112px;
              left: 70px;
              gap: 7px !important;
            }
            .game-card {
              width: 120px;
              height: 120px;
            }
          }

          @media (max-width: 320px) {
            .home-container {
              background-size: cover;
            }
            .board {
              margin-top: 450px;
              max-width: 280px;
              height: 370px !important;
            }
            .heading {
              font-size: 26px;
              top: 51px;
              left: 45px;
            }
            .game-options {
              top: 148px;
              left: 36px;
              gap: 6px;
            }
            .game-card {
              width: 97px;
              height: 80px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default HomeScreen;
