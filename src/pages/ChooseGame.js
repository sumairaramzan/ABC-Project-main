import React, { useEffect, useState } from "react";
import BackgroundImage from "../assets/images/choosGamebg.png";
import BoardImage from "../assets/images/boardImage.png";
import LearnAlphabetIcon from "../assets/images/letterMatched.png";
import AlphabetGamesIcon from "../assets/images/letterHunt.png";
import BackIcon from "../assets/images/back.svg";

const ChooseGame = ({ goBack, selectedAvatar, setCurrentGame, setIsAvatarUpdate, setCurrentScreen }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const smallScreen = windowWidth <= 425;
  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth <= 1024;

  const styles = {
    body: {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      fontFamily: "Arial, sans-serif",
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: smallScreen? "auto" : "100vh",
      width: "100vw",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
      paddingTop: smallScreen ? "100px" : "0px",
    },
    board: {
      backgroundImage: smallScreen ? "none" : `url(${BoardImage})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      width: isMobile ? "95%" : isTablet ? "90%" : "1000px",
      height: isMobile ? "95%" : isTablet ? "85%" : "850px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
    heading: {
      fontSize: isMobile ? "28px" : isTablet ? "28px" : "1.8rem",
      color: "#66501E",
      fontWeight: "600",
    },
    options: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: isMobile ? "10px" : "20px",
    },
    card: {
      width: smallScreen ? "300px" : isMobile ? "220px" : isTablet ? "200px" : "260px",
      height: isMobile ? "230px" : isTablet ? "180px" : "240px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "transform 0.3s ease",
    },
    iconImg: {
      width: "100%",
      height: "auto",
    },
    backArrow: {
      position: "absolute",
      top: "20px",
      left: "20px",
      fontSize: "1.8rem",
      cursor: "pointer",
      color: "#fff",
    },
  };

  return (
    <div style={styles.body}>
      {selectedAvatar && (
        <img
          src={selectedAvatar}
          alt="User Avatar"
          className="user-avatar2"
          onClick={() => {
            setIsAvatarUpdate(true);
            setCurrentScreen("selectCharacter");
          }}
        />
      )}
      <div onClick={goBack} style={styles.backArrow}>
        <img src={BackIcon} alt="Back" />
      </div>

      <div style={styles.board}>
        <div style={styles.heading}>Choose a game</div>
        <div style={styles.options}>
          <div
            style={styles.card}
            onClick={() => setCurrentGame("match")}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => e.key === "Enter" && setCurrentGame("match")}
          >
            <img src={LearnAlphabetIcon} alt="Match Letters" style={styles.iconImg} />
          </div>
          <div
            style={styles.card}
            onClick={() => setCurrentGame("hunt")}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => e.key === "Enter" && setCurrentGame("hunt")}
          >
            <img src={AlphabetGamesIcon} alt="Letter Hunt" style={styles.iconImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseGame;
