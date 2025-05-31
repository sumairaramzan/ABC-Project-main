import React, { useState } from "react";
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

const avatars = [
  Avatar1, Avatar2, Avatar3, Avatar4,
  Avatar5, Avatar6, Avatar7, Avatar8,
  Avatar9, Avatar10, Avatar11, Avatar12,
  Avatar13, Avatar14, Avatar15, Avatar16,
  Avatar17, Avatar18,
];

const SelectCharater = ({ setCurrentScreen }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);

  const styles = {
    container: {
    fontFamily: "Arial, sans-serif",
    padding: "25px 15px",
    backgroundColor: "#5daeff",
    boxSizing: "border-box",
    height: "100vh",
   
  },
 heading: {
  fontSize: "56px",
  fontWeight: "bold",
  color: "#ffcc00",
  marginBottom: "10px",
  WebkitTextStroke: "1.5px black", // ⬅️ Stroke around the letters
},
    subheading: {
      fontSize: "28px",
      color: "#fff",
     
    },
    selectedAvatar: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "20px",
    },
    selectedAvatarImg: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      border: "3px solid white",
    },
  avatarGridWrapper: {
  backgroundColor: "#ffe09c",
  padding: "20px",
  borderRadius: "12px",
  width: "90vw",
  maxWidth: "1000px",
  textAlign: "center",
  margin: "auto",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  boxSizing: "border-box",

  maxHeight: "60vh",         // ✅ Limit height
  overflowY: "auto",         // ✅ Enable scroll only if overflow
}
,


    avatarGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(6, minmax(80px, 1fr))",  // 6 avatars per row responsive
      gap: "20px",
      marginBottom: "20px",
      justifyItems: "center",
    },
    avatarItem: (isSelected) => ({
      width: "100%",          // fill grid cell width
      maxWidth: "100px",      // max size
      aspectRatio: "1 / 1",   // keep square
      borderRadius: "50%",
      border: isSelected ? "3px solid #007bff" : "2px solid transparent",
      cursor: "pointer",
      transition: "0.3s",
      objectFit: "cover",
    }),
    getStartedBtn: {
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "6px",
      fontSize: "16px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.heading}>Select your Character</div>
      <div style={styles.subheading}>
        Every hero needs a face — choose yours to begin the adventure.
      </div>

      <div style={styles.selectedAvatar}>
        <img
          src={selectedAvatar}
          alt="Selected Avatar"
          style={styles.selectedAvatarImg}
        />
      </div>

      <div style={styles.avatarGridWrapper}>
        <div style={styles.avatarGrid}>
          {avatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt={`Avatar ${index + 1}`}
              style={styles.avatarItem(selectedAvatar === avatar)}
              onClick={() => setSelectedAvatar(avatar)}
            />
          ))}
        </div>
        <button  disabled={!selectedAvatar}
              onClick={() => setCurrentScreen("home")} style={styles.getStartedBtn}>Get Started</button>
      </div>
    </div>
  );
};

export default SelectCharater;
