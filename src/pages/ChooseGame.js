import React from "react";
import BackgroundImage from "../assets/images/choosGamebg.png";
import BoardImage from "../assets/images/boardNewImage.png";
import LearnAlphabetIcon from "../assets/images/letterMatched.png";
import AlphabetGamesIcon from "../assets/images/letterHunt.png";
import BackIcon from "../assets/images/back.svg";

class ChooseGame extends React.Component {
  render() {
    const { setCurrentGame, goBack } = this.props;

    return (
      <div className="choose-game-container">
        <button onClick={goBack} className="back-button" aria-label="Go back">
          <img src={BackIcon} alt="Back" />
        </button>

        <div className="board">
          <h1 className="heading">Choose a Game</h1>

          <div className="game-options">
            <div
              onClick={() => setCurrentGame("match")}
              className="game-card"
              tabIndex={0}
              role="button"
              onKeyDown={(e) => e.key === "Enter" && setCurrentGame("match")}
            >
              <img src={LearnAlphabetIcon} alt="Learn Alphabet" />
            </div>

            <div
              onClick={() => setCurrentGame("hunt")}
              className="game-card"
              tabIndex={0}
              role="button"
              onKeyDown={(e) => e.key === "Enter" && setCurrentGame("hunt")}
            >
              <img src={AlphabetGamesIcon} alt="Alphabet Games" />
            </div>
          </div>
        </div>

        <style jsx>{`
          .choose-game-container {
            min-height: 100vh;
            width: 100%;
            background-image: url(${BackgroundImage});
            background-size: 100% 100%;
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
            left: 50%;
            transform: translateX(-50%);
          }

          .game-options {
            display: flex;
            gap: 1rem;
            justify-content: center;
            position: absolute;
            top: 330px;
            left: 50%;
            transform: translateX(-50%);
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

          @media (max-width: 768px) {
            .heading {
              font-size: 2rem;
              top: 160px;
            }
            .board {
              max-width: 660px;
              margin-top: 94px;
            }

            .game-card {
              width: 270px;
            }
            .game-options {
              gap: 0rem;
              top: 260px;
            }
          }

          @media (max-width: 480px) {
            .heading {
              font-size: 1.5rem;
            }

            .game-card {
              width: 100px;
              height: 100px;
            }
          }
          @media (max-width: 425px) {
            .board {
              max-width: 340px;
              margin-top: 324px;
            }
            .heading {
              top: 60px;
              left: 48%;
            }
            .game-card {
              width: 140px;
              height: 100px;
            }
            .game-options {
              gap: 0rem;
              top: 130px;
            }
          }
          @media (max-width: 320px) {
           .choose-game-container {
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
              max-width: 280px;
              margin-top: 374px;
            }
            .heading {
              top: 40px;
              left: 49%;
            }
            .game-card {
              width: 118px;
              height: 100px;
            }
            .game-options {
              gap: 0rem;
              top: 103px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default ChooseGame;
