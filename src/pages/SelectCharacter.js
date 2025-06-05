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

const SelectCharacter = () => {
  const [selected, setSelected] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const avatars = [
    Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6,
    Avatar7, Avatar8, Avatar9, Avatar10, Avatar11, Avatar12,
    Avatar13, Avatar14, Avatar15, Avatar16, Avatar17, Avatar18,
  ];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getGridColumns = () => {
    if (windowWidth <= 480) return 3;
    if (windowWidth <= 768) return 4;
    if (windowWidth <= 1024) return 4; // Changed from 5 to 4 for better spacing
    return 6;
  };

  const getCardWidth = () => {
    if (windowWidth <= 480) return "100%";
    if (windowWidth <= 768) return "95%";
    if (windowWidth <= 1024) return "90%"; // Changed from 95% to 90%
    return "1200px";
  };

  const handleSelect = (index) => setSelected(index);

  const styles = {
    container: {
      fontFamily: "'Arial Rounded MT Bold', sans-serif",
      backgroundColor: '#6AA9FF',
      minHeight: '100vh',
      padding: '10px 20px',
      boxSizing: 'border-box',
    },
    headerContainer: {
      maxWidth: '700px',
      textAlign: 'left',
    },
    header: {
      color: '#FFB800',
      fontWeight: 'bold',
      fontSize: windowWidth <= 480 ? '28px' : '38px',
      marginBottom: '10px',
    },
    subtext: {
      color: '#ffffff',
      fontSize: windowWidth <= 480 ? '14px' : '18px',
      marginBottom: '30px',
    },
    selectedChar: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 auto 20px',
      overflow: 'hidden',
    },
    selectedImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    card: {
      backgroundColor: '#FFE29D',
      borderRadius: '15px',
      padding: windowWidth <= 768 ? '20px 15px' : '30px 20px', // Responsive padding
      width: getCardWidth(),
      margin: '0 auto',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: `repeat(${getGridColumns()}, 1fr)`,
      gap: '10px',
      width: '100%',
      justifyItems: 'center',
      alignItems: 'center',
      marginBottom: '20px',
    },
    avatarWrapper: (index) => ({
      width: windowWidth <= 768 ? '60px' : '75px', // Responsive avatar size
      height: windowWidth <= 768 ? '60px' : '75px',
      borderRadius: '50%',
      backgroundColor: '#fff',
      overflow: 'hidden',
      cursor: 'pointer',
      border: selected === index ? '3px solid #0056ff' : '2px solid transparent',
      boxShadow: selected === index ? '0 0 8px rgba(0, 86, 255, 0.5)' : 'none',
      transition: 'all 0.3s ease',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),
    avatarImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    button: {
      backgroundColor: '#388bff',
      color: '#fff',
      border: 'none',
      padding: '12px 20px',
      borderRadius: '8px',
      fontSize: '16px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerContainer}>
        <div style={styles.header}>Select your Character</div>
        <div style={styles.subtext}>
          Every hero needs a face — choose yours to begin the adventure.
        </div>
      </div>

      <div style={styles.selectedChar}>
        <img src={avatars[selected]} alt="Selected Avatar" style={styles.selectedImg} />
      </div>

      <div style={styles.card}>
        <div style={styles.grid}>
          {avatars.map((avatar, index) => (
            <div
              key={index}
              style={styles.avatarWrapper(index)}
              onClick={() => handleSelect(index)}
            >
              <img src={avatar} alt={`Avatar ${index + 1}`} style={styles.avatarImg} />
            </div>
          ))}
        </div>
        <button style={styles.button}>Get Started</button>
      </div>
    </div>
  );
};

export default SelectCharacter;
