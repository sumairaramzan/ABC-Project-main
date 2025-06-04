import React from "react";
import BackgroundImage from "../assets/images/choosGamebg.png";
import BoardImage from "../assets/images/boardNewImage.png";
import LearnAlphabetIcon from "../assets/images/letterMatched.png";
import AlphabetGamesIcon from "../assets/images/letterHunt.png";
import BackIcon from "../assets/images/back.svg";

class ChooseGame extends React.Component {
  render() {
    const { goBack, selectedAvatar, setCurrentGame } = this.props;

    return (
      <div className="choose-game-container">
         {selectedAvatar && (
            <img
              src={selectedAvatar}
              alt="User Avatar"
              className="user-avatar1"
              
              onClick={() => {
                this.props.setIsAvatarUpdate(true);
                this.props.setCurrentScreen("selectCharacter");
              }}
            />
          )}
        <button onClick={goBack} className="back-button" aria-label="Go back">
          <img src={BackIcon} alt="Back" />
        </button>

        <div className="board">
          <h1 className="heading">Choosiiie a Game</h1>
         

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
            max-width: 1200px;
            height: 988px;
            position: relative;
            margin-top: 22px;
          }
          @media (max-width: 1024px) {
            .board {
              height: 891px;
            }
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
              height: 801px;
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
              width: 200px;
              height: 200px;
            }
          }
          @media (max-width: 425px) {
            .choose-game-container {
              background-size: cover;
            }
            .board {
              max-width: 380px;
              height: 400px !important;
              margin-top: 370px;
            }
            .heading {
              top: 67px;
              left: 48%;
              font-size: 25px;
              font-weight: 400;
              color: #66501e;
            }
            .game-card {
              width: 156px;
              height: 120px;
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
              margin-top: 450px;
              max-width: 310px;
              height: 300px !important;
            }
            .heading {
              top: 54px;
              left: 49%;
              font-size: 20px;
              font-weight: 400;
              color: #66501e;
            }
            .game-card {
              width: 118px;
              height: 100px;
            }
            .game-options {
              gap: 0rem;
              top: 91px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default ChooseGame;
