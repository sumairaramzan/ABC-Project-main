import React, { useState, useEffect } from "react";

// Avatar Imports
import Avatar1 from "../assets/images/avatar1.svg";
import Avatar2 from "../assets/images/avatar2.svg";
import Avatar3 from "../assets/images/avatar3.svg";
import Avatar4 from "../assets/images/avatar4.svg";
import Avatar5 from "../assets/images/avatar5.svg";
import Avatar6 from "../assets/images/avatar17.svg";
import Avatar7 from "../assets/images/avatar7.svg";
import Avatar8 from "../assets/images/avatar8.svg";
import Avatar9 from "../assets/images/avatar9.svg";
import Avatar10 from "../assets/images/avatar10.svg";
import Avatar11 from "../assets/images/avatar11.svg";
import Avatar12 from "../assets/images/avatar12.svg";
import Avatar13 from "../assets/images/avatar13.svg";
import Avatar14 from "../assets/images/avatar14.svg";
import Avatar15 from "../assets/images/avatar15.svg";
import Avatar16 from "../assets/images/avatar16.svg";
import Avatar17 from "../assets/images/avatar17.svg";
import Avatar18 from "../assets/images/avatar18.svg";
import "../App.css";

const SelectCharacter = ({
  setCurrentScreen,
  selectedAvatar,
  setSelectedAvatar,
  isAvatarUpdate,
  setIsAvatarUpdate,
}) => {
  const avatars = [
    Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6, Avatar7, Avatar8,
    Avatar9, Avatar10, Avatar11, Avatar12, Avatar13, Avatar14, Avatar15,
    Avatar16, Avatar17, Avatar18,
  ];

  const [selected, setSelected] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (selectedAvatar) {
      const index = avatars.indexOf(selectedAvatar);
      if (index !== -1) setSelected(index);
    } else {
      setSelected(0);
      setSelectedAvatar(avatars[0]);
    }
  }, [selectedAvatar]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSelect = (index) => {
    setSelected(index);
    setSelectedAvatar(avatars[index]);
  };

  const handleSubmit = () => {
    setCurrentScreen("home");
    setIsAvatarUpdate(false);
  };

  const getGridColumns = () => {
    if (windowWidth <= 480) return 3;
    if (windowWidth <= 768) return 4;
    if (windowWidth <= 1024) return 5;
    return 6;
  };

  const getAvatarSize = () => {
    if (windowWidth <= 320) return "60px";
    if (windowWidth <= 480) return "70px";
    if (windowWidth <= 768) return "80px";
    if (windowWidth <= 1024) return "85px";
    return "95px";
  };

  const styles = {
    container: {
      fontFamily: "'Arial Rounded MT Bold', sans-serif",
      backgroundColor: "#6AA9FF",
      minHeight: "100dvh",
      padding: "10px",
      boxSizing: "border-box",
      overflowY: "hidden",
    },
  
    header: {
      color: "#FFB800",
      fontWeight: "bold",
      fontSize: windowWidth <= 480 ? "28px" : "36px",
      WebkitTextStroke: "1px black",
      textStroke: "1px black",
    },
    subtext: {
      color: "#ffffff",
      fontSize: windowWidth <= 480 ? "14px" : "16px",
      marginTop: "5px",
    },
    selectedChar: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      backgroundColor: "#fff",
      margin: "0px auto 10px",
      overflow: "hidden",
      border: "4px solid #FFB800",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    },
    selectedImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    card: {
      backgroundColor: "#FFE29D",
      borderRadius: "20px",
      padding: "13px",
      maxWidth: "1000px",
      width: "100%",
      boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
      margin: "0 auto",
      textAlign: "center",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: `repeat(${getGridColumns()}, 1fr)`,
      gap: "14px",
      justifyItems: "center",
      marginBottom: "10px",
    },
    avatarWrapper: (index) => ({
      width: getAvatarSize(),
      height: getAvatarSize(),
      borderRadius: "50%",
      backgroundColor: "#fff",
      overflow: "hidden",
      cursor: "pointer",
      border: selected === index ? "3px solid #0056ff" : "2px solid transparent",
      boxShadow: selected === index
        ? "0 0 12px rgba(0, 86, 255, 0.6)"
        : "0 2px 6px rgba(0,0,0,0.1)",
      transition: "all 0.3s ease",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }),
    avatarImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    button: {
      backgroundColor: "#388bff",
      color: "#fff",
      border: "none",
      padding: "12px 24px",
      borderRadius: "10px",
      fontSize: "16px",
      cursor: "pointer",
      fontWeight: "600",
      transition: "all 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerContainer}>
        <div style={styles.header}>Select your Character</div>
        <div style={styles.subtext}>
          Every hero needs a face — choose <br /> yours to begin the adventure.
        </div>
      </div>

      <div style={styles.selectedChar}>
        <img
          src={avatars[selected]}
          alt="Selected Avatar"
          style={styles.selectedImg}
        />
      </div>

      <div style={styles.card}>
        <div style={styles.grid}>
          {avatars.map((avatar, index) => (
            <div
              key={index}
              style={styles.avatarWrapper(index)}
              onClick={() => handleSelect(index)}
            >
              <img
                src={avatar}
                alt={`Avatar ${index + 1}`}
                style={styles.avatarImg}
              />
            </div>
          ))}
        </div>
        <button style={styles.button} onClick={handleSubmit}>
          {isAvatarUpdate ? "Update" : "Get Started"}
        </button>
      </div>
    </div>
  );
};

export default SelectCharacter;
