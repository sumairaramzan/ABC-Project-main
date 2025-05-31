import React from "react";
import { motion } from "framer-motion";
import LearnAlphabetIcon from "./assets/images/learnAlphabets.png";
import AlphabetGamesIcon from "./assets/images/AlphabetsGames.png";
import BackgroundImage from "./assets/images/myBg.png";
import BoardImage from "./assets/images/boardNewImage.png";
import BackIcon from "./assets/images/back.svg";

class HomeScreen extends React.Component {
  render() {
    const { setCurrentScreen, goBack } = this.props;

    return (
      <div className="home-container">
        <button onClick={goBack} className="back-button" aria-label="Go back">
          <img src={BackIcon} alt="Back" />
        </button>
        <div className="board">
          <h1 className="heading">Choose a Game</h1>

          <div className="game-options">
            <motion.div
              className="game-card"
              onClick={() => setCurrentScreen("learn")}
              whileHover={{ scale: 1.05 }}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => e.key === "Enter" && setCurrentScreen("learn")}
            >
              <img src={LearnAlphabetIcon} alt="Learn Alphabet" />
            </motion.div>

            <motion.div
              className="game-card"
              onClick={() => setCurrentScreen("games")}
              whileHover={{ scale: 1.05 }}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => e.key === "Enter" && setCurrentScreen("games")}
            >
              <img src={AlphabetGamesIcon} alt="Alphabet Games" />
            </motion.div>
          </div>
        </div>

        <style jsx>{`
          .home-container {
            min-height: 100vh;
            width: 100%;
            background-image: url(${BackgroundImage});
            background-size: 100% 100%; /* force full stretch */
            background-repeat: no-repeat;
            background-position: top center;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .board {
            background-image: url(${BoardImage});
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            width: 100%;
            max-width: 900px;
            aspect-ratio: 10 / 11;
            position: relative;
            margin-top: 22px;
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
            top: 330px;
            left: 130px;
          }

          .game-card {
            width: 300px;
            height: 200px;
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
          // @media (max-width: 1024px) {
          //   .board {
          //     max-width: 728px;
          //   }
          //   .game-options {
          //     display: flex;
          //     gap: 0rem;
          //     flex-wrap: wrap;
          //     justify-content: center;
          //     position: absolute;
          //     top: 308px;
          //     left: 61px;
          //   }
          //     .heading {
          //     top: 180px;
          //    left: 220px;
          //     }
          // }

          @media (max-width: 1440px) {
            max-width: 810px;
          }
          @media (max-width: 768px) {
            .board {
              background-image: url(${BoardImage});
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
              width: 100%;
              max-width: 490px;
              aspect-ratio: 10 / 11;
              position: relative;
              margin-top: 284px;
            }
            .heading {
              font-size: 2rem;
              top: 100px;
              left: 140px;
            }
            .game-options {
              top: 155px;
              left: 40px;
            }

            .game-card {
              width: 200px;
              height: 200px;
            }
          }

          @media (max-width: 425px) {
            .heading {
              font-size: 2rem;
              top: 57px;
              left: 49px;
            }
            .game-options {
              top: 138px;
              left: 43px;
              gap: 0;
            }
            .game-card {
              width: 123px;
              height: 60px;
            }
            .board {
              margin-top: 413px;
              max-width: 330px;
            }
          }
          @media (max-width: 375px) {
            .game-options {
              top: 102px;
              left: 47px;
              gap: 0px;
            }
            .game-card {
              width: 120px;
              height: 120px;
            }
            .board {
              margin-top: 410px;
            }
            .heading {
              font-size: 2rem;
              top: 51px;
              left: 50px;
            }
          }

          @media (max-width: 320px) {
          .home-container {
  min-height: 100vh;
  width: 100%;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

          .board {
            background-image: url(${BoardImage});
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            width: 100%;
            max-width: 900px;
            aspect-ratio: 10 / 11;
            position: relative;
            margin-top: 22px;
          }
            .game-card {
              width: 120px;
              height: 120px;
            }
            .game-options {
              top: 88px;
              left: 18px;
              gap: 6px;
            }
            .board {
              margin-top: 450px;
              max-width: 280px;
            }
            .heading {
              font-size: 26px;
              top: 51px;
              left: 45px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default HomeScreen;
