import React, { useEffect, useState } from "react";
import BackgroundImage from "./assets/images/ChooseGamefreshbg.png";
import Card1Image from "./assets/images/learnAlphabets.png";
import Card2Image from "./assets/images/AlphabetsGames.png";
import BoardBg from "./assets/images/boardImage.png";
import BackIcon from "./assets/images/back.svg";

const HomeScreen = ({setCurrentScreen, goBack, selectedAvatar, setIsAvatarUpdate}) => {
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
      backgroundSize: "100% 100%",
      backgroundPosition: "center",
      height: smallScreen? "100vh" : "100vh",
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
      backgroundImage: smallScreen ? "none" : `url(${BoardBg})`,
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
      fontSize: isMobile ? "28px" : isTablet ? "28px" : "2.8rem",
      color: "#66501E",
      fontWeight: "600",
      marginBottom: "30px",
    },
    options: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: isMobile ? "10px" : "20px",
    },
    card: {
      width: smallScreen ? "300px" : isMobile ? "300px" : isTablet ? "300px" : "300px",
      // height: isMobile ? "230px" : isTablet ? "180px" : "240px",
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
               setIsAvatarUpdate(true); // ✅ mark as update
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
          <div style={styles.card}
           onClick={() => setCurrentScreen("learn")}
           whileHover={{ scale: 1.05 }}
           tabIndex={0}
           role="button"
           onKeyDown={(e) => e.key === "Enter" && setCurrentScreen("learn")}
          >
            <img src={Card1Image} alt="Learn Alphabets" style={styles.iconImg} />
          </div>
          <div style={styles.card}
           onClick={() => setCurrentScreen("chooseGame")} // ✅ change this
           whileHover={{ scale: 1.05 }}
           tabIndex={0}
           role="button"
           onKeyDown={(e) => e.key === "Enter" && setCurrentScreen("chooseGame")}
          >
            <img src={Card2Image} alt="Alphabet Games" style={styles.iconImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
