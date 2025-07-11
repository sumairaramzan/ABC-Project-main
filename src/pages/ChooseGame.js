import React, { useEffect, useState } from "react";
import BackgroundImage from "../assets/images/choosGamebg.png";
import BoardImage from "../assets/images/boardImage.png";
import LearnAlphabetIcon from "../assets/images/letterMatched.png";
import AlphabetGamesIcon from "../assets/images/letterHunt.png";
import BackIcon from "../assets/images/back.svg";

const ChooseGame = ({ goBack, selectedAvatar, setCurrentGame, setIsAvatarUpdate, setCurrentScreen }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [showSettingsModal, setShowSettingsModal] = useState(false);


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
    <>
   
    <div style={styles.body}>
      {selectedAvatar && (
        // <img
        //   src={selectedAvatar}
        //   alt="User Avatar"
        //   className="user-avatar2"
        //   onClick={() => {
        //     setIsAvatarUpdate(true);
        //     setCurrentScreen("selectCharacter");
        //   }}
        // />
        <img
  src={selectedAvatar}
  alt="User Avatar"
  className="user-avatar2 cursor-pointer"
  onClick={() => setShowSettingsModal(true)}
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
    {showSettingsModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-gradient-to-b from-[#3B82F6] to-[#1E3A8A] p-1 rounded-xl w-[320px] shadow-xl">
          <div className="bg-[#f0f4ff] rounded-lg p-4 relative">
    
            {/* Close icon */}
            <button
              className="absolute top-3 right-3 text-black font-bold text-lg"
              onClick={() => setShowSettingsModal(false)}
            >
              ×
            </button>
    
            {/* Avatar */}
            <div className="flex justify-center mb-4">
              <img
                src={selectedAvatar}
                alt="avatar"
                className="w-20 h-20 rounded-full border-4 border-white shadow-md cursor-pointer"
                onClick={() => {
                  setIsAvatarUpdate(true);
                  setCurrentScreen("selectCharacter");
                  setShowSettingsModal(false);
                }}
              />
            </div>
    
            {/* Settings buttons */}
            <div className="flex flex-col gap-2">
              <button className="bg-[#FCD34D] rounded-md px-4 py-2 text-left font-medium flex items-center gap-2">
                <span>👤</span> Jhon Smith
              </button>
              <button className="bg-[#FCD34D] rounded-md px-4 py-2 text-left font-medium flex items-center gap-2">
                <span>📦</span> Subscription Plan
              </button>
              <button className="bg-[#FCD34D] rounded-md px-4 py-2 text-left font-medium flex items-center gap-2">
                <span>📜</span> Privacy Policy
              </button>
              <button className="bg-[#FCD34D] rounded-md px-4 py-2 text-left font-medium flex items-center gap-2">
                <span>ℹ️</span> About Us
              </button>
              <button className="bg-[#EF4444] text-white rounded-md px-4 py-2 text-left font-medium flex items-center gap-2">
                <span>🗑️</span> Delete Account
              </button>
              <button className="bg-[#FCD34D] rounded-md px-4 py-2 text-left font-medium flex items-center gap-2">
                <span>🚪</span> Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
     </>
    
  );
};

export default ChooseGame;
