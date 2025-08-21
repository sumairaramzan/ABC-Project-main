import React, { useEffect, useState } from "react";
import BackgroundImage from "./assets/images/ChooseGamefreshbg.png";
import Card1Image from "./assets/images/learnAlphabets.png";
import Card2Image from "./assets/images/AlphabetsGames.png";
import BoardBg from "./assets/images/boardImage.png";
import popupBg from "./assets/images/Settings_bg.png";
import close_icon from "./assets/images/x-close.svg";
import user from "./assets/images/user-01.svg";
import editable from "./assets/images/editable.svg";
import subscription from "./assets/images/subscription.svg";
import arrow from "./assets/images/chevron-right.svg";
import privacy from "./assets/images/privacy.svg";
import about from "./assets/images/aboutus.svg";
import del from "./assets/images/Icon_del.svg";
import delicon from "./assets/images/Featured-del-icon.svg";
import logout from "./assets/images/Icon_logout.svg";
import logoutbtn from "./assets/images/logout-btn.svg";
import BackIcon from "./assets/images/back.svg";
import ediatbel from "./assets/images/Checkbox_editable.svg";
import dimaond from "./assets/images/dimond.svg";
import paypal from "./assets/images/PayPal.svg";
import monthly from "./assets/images/monthlyplan.svg";
import yearlyimg from "./assets/images/yearlyplan.svg";
import privacybg from "./assets/images/privacy-bg.png";
import subscriptionBg from "./assets/images/Subscriptioncancel.png";

const HomeScreen = ({
  setCurrentScreen,
  goBack,
  selectedAvatar,
  setIsAvatarUpdate,
  setEmail,
  setPassword,
  setName,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [showAddCardPopup, setShowAddCardPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenYearly, setIsOpenYearly] = useState(false);
  const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [name, setNames] = useState("Jhon Smith");

  const handleNameChange = (e) => {
    setNames(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleShowSubscription = () => {
    setShowSettingsModal(false);
    setShowSubscriptionModal(true);
  };
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleOpenYearly = () => setIsOpenYearly(true);
  const handleCloseYearly = () => setIsOpenYearly(false);

  const handleSubscribeClick = () => {
    setShowSettingsModal(false);
    setShowSubscriptionModal(false);
    setTimeout(() => setShowConfirmPopup(true), 100);
  };
  useEffect(() => {
    if (isOpen) {
      setShowSubscriptionModal(false);
      setShowSettingsModal(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account permanently?"
    );
    if (!confirmDelete) return;

    const token = localStorage.getItem("token");
    if (!token) {
      alert("You are not logged in.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/user/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok && data.success) {
        alert("Account deleted successfully.");
        localStorage.removeItem("token");
        setShowDeletePopup(false);
        setCurrentScreen("login"); // Redirect user to login screen
      } else {
        alert(data.msg || "Failed to delete account.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Something went wrong. Please try again.");
    }

    setShowDeletePopup(false);
  };

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
      height: "100vh",
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
      width: "300px",
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
          <img
            src={selectedAvatar}
            alt="User Avatar"
            className="user-avatar2 cursor-pointer"
            onClick={() => setShowSettingsModal(true)}
          />
        )}
        {/* <div onClick={goBack} style={styles.backArrow}>
          <img src={BackIcon} alt="Back" />
        </div> */}

        <div style={styles.board}>
          <div style={styles.heading}>Choose a game</div>
          <div style={styles.options}>
            <div style={styles.card} onClick={() => setCurrentScreen("learn")}>
              <img
                src={Card1Image}
                alt="Learn Alphabets"
                style={styles.iconImg}
              />
            </div>
            <div style={styles.card} onClick={() => setCurrentScreen("games")}>
              <img
                src={Card2Image}
                alt="Alphabet Games"
                style={styles.iconImg}
              />
            </div>
          </div>
        </div>
      </div>

      {showSettingsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-2">
         <div
  className="relative rounded-xl w-full max-w-[530px] shadow-xl"
  style={{
    backgroundImage: `url(${popupBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
            {/* Top Heading with Cross Icon */}
            <div className="text-[#F4D98A] text-[20px] sm:text-[24px] font-bold flex justify-between items-center px-4 sm:px-6 pt-4">
              <span>Settings</span>
              <img
                src={close_icon}
                alt="close"
                className="cursor-pointer w-5 h-5"
                onClick={() => setShowSettingsModal(false)}
              />
            </div>

            {/* White Card Container */}
            <div className="mt-4 mx-2 sm:mx-4 bg-white bg-opacity-40 rounded-xl px-4 py-5 flex flex-col items-center gap-4">
              {/* Avatar */}
              <div className="relative w-20 h-20">
                <img
                  src={selectedAvatar}
                  alt="avatar"
                  className="w-full h-full rounded-full border-4 border-white shadow-md"
                />
                <img
                  src={ediatbel}
                  alt="edit badge"
                  className="absolute bottom-0 right-0 w-6 h-6 cursor-pointer"
                  onClick={() => {
                    setIsAvatarUpdate(true);
                    setCurrentScreen("selectCharacter");
                    setShowSettingsModal(false);
                  }}
                />
              </div>

              {/* Buttons */}
              <div className="w-full flex flex-col gap-3">
                {/* Name */}
                <div className="flex justify-between items-center bg-[#E8BE5D] text-[#030303] text-[16px] sm:text-[18px] font-medium px-4 py-3 rounded-lg shadow-[0px_4px_0px_#8C7338] cursor-pointer">
                  <div className="flex items-center gap-2">
                    <img src={user} alt="user" className="w-5 h-5" />
                    {isEditing ? (
                      <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        onBlur={handleBlur}
                        autoFocus
                        className="bg-transparent border-b border-[#030303] outline-none text-[#030303] w-32 sm:w-40"
                      />
                    ) : (
                      <span>{name}</span>
                    )}
                  </div>
                  <img
                    src={editable}
                    alt="edit"
                    className="w-4 h-4 cursor-pointer"
                    onClick={handleEditClick}
                  />
                </div>

                {/* Subscription */}
                <div
                  className="flex justify-between items-center bg-[#E8BE5D] text-[#030303] text-[16px] sm:text-[18px] font-medium px-4 py-3 rounded-lg shadow-[0px_4px_0px_#8C7338] cursor-pointer"
                  onClick={() => setShowSubscriptionModal(true)}
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={subscription}
                      alt="subscription"
                      className="w-5 h-5"
                    />
                    <span>Subscription plan</span>
                  </div>
                  <img src={arrow} alt="dropdown" className="w-4 h-4" />
                </div>

                {/* Privacy Policy */}
                <div
                  className="flex items-center gap-2 bg-[#E8BE5D] text-[#030303] text-[16px] sm:text-[18px] font-medium px-4 py-3 rounded-lg shadow-[0px_4px_0px_#8C7338] cursor-pointer"
                  onClick={() => setShowPrivacyPopup(true)}
                >
                  <img src={privacy} alt="privacy" className="w-5 h-5" />
                  <span>Privacy policy</span>
                </div>

                {/* About Us */}
                <div className="flex items-center gap-2 bg-[#E8BE5D] text-[#030303] text-[16px] sm:text-[18px] font-medium px-4 py-3 rounded-lg shadow-[0px_4px_0px_#8C7338] cursor-pointer">
                  <img src={about} alt="about" className="w-5 h-5" />
                  <span>About us</span>
                </div>

                {/* Delete */}
                <div
                  className="flex items-center gap-2 bg-[#D92D20] text-white text-[16px] sm:text-[18px] font-medium px-4 py-3 rounded-lg shadow-[0px_4px_0px_#8C7338] cursor-pointer"
                  onClick={() => setShowDeletePopup(true)}
                >
                  <img src={del} alt="delete" />
                  <span>Delete account</span>
                </div>

                {/* Logout */}
                <div
                  className="flex items-center gap-2 bg-[#E8BE5D] text-[#030303] text-[16px] sm:text-[18px] font-medium px-4 py-3 rounded-lg shadow-[0px_4px_0px_#8C7338] cursor-pointer"
                  onClick={() => setShowLogoutPopup(true)}
                >
                  <img src={logout} alt="logout" className="w-5 h-5" />
                  <span>Logout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showLogoutPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
          <div className="w-full max-w-[500px] bg-white rounded-xl p-6 shadow-lg relative max-h-[90vh] overflow-y-auto">
            {/* Top row */}
            <div className="flex justify-between items-center mb-4 cursor-pointer">
              <img src={logoutbtn} alt="logout"   onClick={() => {
                localStorage.removeItem("token");
                setEmail("");
                setPassword("");
                setName("");
                setShowLogoutPopup(false);
                setCurrentScreen("login");
              }} />
              <button
                className="text-gray-500 text-xl font-bold"
                onClick={() => setShowLogoutPopup(false)}
              >
                &times;
              </button>
            </div>

            <h2 className="text-[#101828] text-[18px] font-semibold mb-2">
              Logout Account
            </h2>
            <p className="text-[#475467] text-[14px] font-normal mb-6">
              Are you sure you want to log out?
            </p>

            <button
              className="w-full bg-[#D92D20] text-white text-[16px] font-semibold py-3 rounded-lg mb-4"
              onClick={() => {
                localStorage.removeItem("token");
                setEmail("");
                setPassword("");
                setName("");
                setShowLogoutPopup(false);
                setCurrentScreen("login");
              }}
            >
              Logout
            </button>

            <button
              className="w-full border border-[#D0D5DD] text-[#344054] text-[16px] font-semibold py-3 rounded-lg"
              onClick={() => setShowLogoutPopup(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {showDeletePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
          <div className="w-full max-w-[500px] bg-white rounded-xl p-6 shadow-lg relative max-h-[90vh] overflow-y-auto">
            {/* Top row */}
            <div className="flex justify-between items-center mb-4">
              <img src={delicon} alt="delete" className="w-6 h-6" />
              <button
                className="text-gray-500 text-xl font-bold"
                onClick={() => setShowDeletePopup(false)}
              >
                &times;
              </button>
            </div>

            <h2 className="text-[#101828] text-[18px] font-semibold mb-2">
              Delete Account
            </h2>
            <p className="text-[#475467] text-[14px] font-normal mb-6">
              Deleting your account will permanently remove all your data. This
              action cannot be undone.
            </p>

            <button
              className="w-full bg-[#D92D20] text-white text-[16px] font-semibold py-3 rounded-lg mb-4"
              onClick={handleDeleteAccount}
            >
              Delete Account
            </button>

            <button
              className="w-full border border-[#D0D5DD] text-[#344054] text-[16px] font-semibold py-3 rounded-lg"
              onClick={() => setShowDeletePopup(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {showSubscriptionModal && (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-2">
       <div
         className="relative w-full max-w-[530px] rounded-xl shadow-xl overflow-hidden"
         style={{
           backgroundImage: `url(${subscriptionBg})`,
           backgroundSize: "cover",
           backgroundPosition: "center",
           maxHeight: "95vh", // Slightly increased to avoid internal scroll
         }}
       >
         {/* Header */}
         <div className="text-[#F4D98A] text-[20px] sm:text-[24px] font-bold flex justify-between items-center px-4 sm:px-6 pt-4">
           <span>Settings</span>
           <img
             src={close_icon}
             alt="close"
             className="cursor-pointer w-5 h-5"
             onClick={() => setShowSubscriptionModal(false)}
           />
         </div>
     
         {/* Scrollable Content */}
         <div className="mt-4 mx-2 sm:mx-4 px-4 py-2 flex flex-col items-center gap-4 pb-6 overflow-y-auto"
           style={{ maxHeight: 'calc(95vh - 60px)' }}>
           <img
             src={dimaond}
             alt="diamond"
             className="w-[60px] sm:w-[80px] h-[60px] sm:h-[80px]"
           />
     
           <h2 className="text-[#101828] text-[18px] sm:text-[20px] font-semibold text-center">
             Subscription plan
           </h2>
     
           <p className="text-[#373940] text-[15px] sm:text-[17px] text-center">
             Pick a plan that fitsgggg your child’s learning.
           </p>
     
           {/* Plan Section */}
           <div className="flex justify-between items-center w-full mt-2">
             <span className="text-[#101828] text-[15px] sm:text-[16px] font-medium">
               Subscription plan
             </span>
             <span className="text-[#295FB5] text-[14px] sm:text-[15px] cursor-pointer">
               Change plan
             </span>
           </div>
     
           {/* Current Plan */}
           <div className="w-full border border-[#357AE8] bg-[#EBF3FF] rounded-xl px-4 py-3 cursor-pointer">
             <div className="flex justify-between items-center">
               <label className="flex items-center gap-2">
                 <input
                   type="radio"
                   name="plan"
                   checked
                   className="accent-[#357AE8] w-4 h-4"
                 />
                 <span className="text-[15px] sm:text-[16px] font-medium text-[#000000]">
                   Monthly Plan
                 </span>
               </label>
               <span className="text-[15px] sm:text-[16px] text-[#000000] font-medium">
                 $3.99/month
               </span>
             </div>
     
             <ul className="mt-2 pl-6 list-disc text-[#344054] text-[13px] sm:text-[14px] space-y-1">
               <li>Unlimited access to all games</li>
               <li>No daily limits</li>
               <li>Monthly flexibility</li>
             </ul>
     
             <p className="mt-3 text-[13px] sm:text-[14px] text-[#030303] font-semibold">
               Renews on: July 30, 2025
             </p>
     
             <button className="mt-3 text-[#B42318] text-[12px] font-medium border border-[#FECDCA] bg-white px-3 py-1 rounded-md">
               Cancel Subscription
             </button>
           </div>
     
           {/* Other Plans */}
           <div className="w-full">
             <p className="mt-3 mb-2 text-[#101828] text-[15px] sm:text-[16px] font-medium">
               Other Plans
             </p>
     
             {/* Monthly Option */}
             <div className="w-full border border-[#357AE8] bg-[#EBF3FF] rounded-xl px-4 py-3 cursor-pointer">
               <div className="flex justify-between items-center">
                 <label className="flex items-center gap-2">
                   <input
                     type="radio"
                     name="plan"
                     className="accent-[#357AE8] w-4 h-4"
                   />
                   <span className="text-[15px] sm:text-[16px] font-medium text-[#000000]">
                     Monthly Plan
                   </span>
                 </label>
                 <span className="text-[15px] sm:text-[16px] text-[#000000] font-medium">
                   $3.99/month
                 </span>
               </div>
     
               <ul className="mt-2 pl-6 list-disc text-[#344054] text-[13px] sm:text-[14px] space-y-1">
                 <li>Unlimited access to all games</li>
                 <li>No daily limits</li>
                 <li>Monthly flexibility</li>
               </ul>
             </div>
     
             {/* Yearly Option */}
             <div className="w-full border border-[#357AE8] bg-[#EBF3FF] rounded-xl px-4 py-3 mt-3 cursor-pointer">
               <div className="flex justify-between items-center">
                 <label className="flex items-center gap-2">
                   <input
                     type="radio"
                     name="plan"
                     className="accent-[#357AE8] w-4 h-4"
                   />
                   <span className="text-[15px] sm:text-[16px] font-medium text-[#000000]">
                     Yearly Plan
                   </span>
                 </label>
                 <span className="text-[15px] sm:text-[16px] text-[#000000] font-medium">
                   $39.99/year
                 </span>
               </div>
     
               <ul className="mt-2 pl-6 list-disc text-[#344054] text-[13px] sm:text-[14px] space-y-1">
                 <li>Everything in monthly plan</li>
                 <li>2 months free</li>
                 <li>Best for long-term learning</li>
               </ul>
             </div>
           </div>
     
           {/* Subscribe Button */}
           <button
             className="mt-4 bg-[#295FB5] text-white text-[15px] sm:text-[16px] font-semibold py-2 px-6 rounded-lg cursor-pointer"
             onClick={handleSubscribeClick}
           >
             Subscribe
           </button>
         </div>
       </div>
     </div>
     
      )}
     {showConfirmPopup && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-2">
    <div className="bg-white rounded-xl w-full max-w-[500px] p-4 sm:p-6 shadow-xl my-6 sm:my-10 max-h-[90vh] overflow-hidden">
      {/* Header */}
      <div className="text-[#101828] text-[18px] font-medium mb-3 flex justify-between items-center">
        <button
          onClick={() => {
            setShowConfirmPopup(false);
            setShowSubscriptionModal(true);
          }}
        >
          ←
        </button>
        <span>Confirm</span>
        <span></span>
      </div>

      {/* Selected Plan Box */}
      <div className="border border-[#357AE8] bg-[#EBF3FF] rounded-lg p-3 flex justify-between items-start">
        <div>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked
              className="accent-[#357AE8] w-4 h-4"
            />
            <span className="text-[#101828] text-[16px] font-medium">
              Yearly Plan
            </span>
          </label>
          <ul className="mt-2 pl-5 list-disc text-[#344054] text-sm space-y-1">
            <li>Everything in monthly plan</li>
            <li>2 months free</li>
            <li>Best for long-term learning</li>
          </ul>
        </div>
        <div className="text-right">
          <p className="text-[#101828] text-[15px] font-medium">$39.99/year</p>
          <p className="text-[#9C27B0] text-[12px] font-semibold mt-1">
            🌟 Best Value
          </p>
        </div>
      </div>

      {/* Details Section */}
      <div className="mt-4">
        <h3 className="text-[#101828] text-[20px] font-semibold mb-2">Details</h3>
        <div className="flex justify-between text-[#101828] text-[16px] mb-1">
          <span>Yearly subscription</span>
          <span>$39.99</span>
        </div>
        <div className="flex justify-between text-[#101828] text-[16px] mb-1">
          <span>Tax</span>
          <span>$1.59</span>
        </div>
        <div className="flex justify-between text-[#101828] text-[18px] font-semibold mt-3">
          <span>Total</span>
          <span>$41.58</span>
        </div>
      </div>

      {/* Payment Method Section */}
      <div className="mt-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-[#101828] text-[20px] font-semibold">
            Payment Method
          </h3>
          <button className="text-[#3A86FF] text-sm font-medium flex items-center gap-1">
            <span className="text-lg font-bold">+</span> Add New
          </button>
        </div>

        {/* Mastercard */}
        <div className="border rounded-lg px-4 py-2 flex justify-between items-center mb-3 border-[#3A86FF]">
          <div className="flex items-center gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
              alt="mastercard"
              className="w-8"
            />
            <div>
              <p className="text-[#101828] text-[15px] font-medium">Mastercard</p>
              <p className="text-[#344054] text-sm">**** **** **** 4565</p>
            </div>
          </div>
          <input
            type="radio"
            checked
            className="accent-[#3A86FF] w-4 h-4"
          />
        </div>

        {/* Visa */}
        <div className="border rounded-lg px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="visa"
              className="w-8"
            />
            <div>
              <p className="text-[#101828] text-[15px] font-medium">Visa card</p>
              <p className="text-[#344054] text-sm">**** **** **** 3223</p>
            </div>
          </div>
          <input type="radio" className="accent-[#3A86FF] w-4 h-4" />
        </div>
      </div>

      {/* Pay Now Button */}
      <button
        className="mt-5 w-full bg-[#3A86FF] text-white text-[15px] font-semibold py-2.5 rounded-lg"
        onClick={() => {
          setShowConfirmPopup(false);
          setShowAddCardPopup(true);
        }}
      >
        Pay Now
      </button>
    </div>
  </div>
)}

      {showAddCardPopup && (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-2 sm:px-0">
       <div className="bg-white rounded-xl w-full max-w-[500px] p-6 shadow-xl max-h-[90vh] overflow-y-auto relative mx-2 sm:mx-0">
         {/* Close Button */}
         <button
           onClick={() => setShowAddCardPopup(false)}
           className="absolute top-4 left-4 text-[#344054] text-[20px] font-bold"
         >
           ✕
         </button>
     
         {/* Header */}
         <h2 className="text-center text-[#101828] text-[20px] font-semibold mb-6">
           Add new card
         </h2>
     
         {/* Card Number */}
         <div className="mb-4">
           <label className="block text-[#344054] text-[16px] mb-1">Card number</label>
           <input
             type="text"
             placeholder="xxxx-xxxx-xxxx-xxxx"
             className="w-full border border-[#D0D5DD] rounded-lg px-4 py-2 text-[18px] text-[#667085] placeholder-[#667085]"
           />
         </div>
     
         {/* Cardholder Name */}
         <div className="mb-4">
           <label className="block text-[#344054] text-[16px] mb-1">Cardholder name</label>
           <input
             type="text"
             placeholder="Eg. Jhon Doe"
             className="w-full border border-[#D0D5DD] rounded-lg px-4 py-2 text-[18px] text-[#667085] placeholder-[#667085]"
           />
         </div>
     
         {/* Expiry & CVV */}
         <div className="flex gap-4 mb-4">
           <div className="flex-1">
             <label className="block text-[#344054] text-[16px] mb-1">Expiry date</label>
             <input
               type="text"
               placeholder="MM/YYYY"
               className="w-full border border-[#D0D5DD] rounded-lg px-4 py-2 text-[18px] text-[#667085] placeholder-[#667085]"
             />
           </div>
           <div className="flex-1">
             <label className="block text-[#344054] text-[16px] mb-1">CVV</label>
             <input
               type="password"
               placeholder="***"
               className="w-full border border-[#D0D5DD] rounded-lg px-4 py-2 text-[18px] text-[#667085] placeholder-[#667085]"
             />
           </div>
         </div>
     
         {/* Card Logos */}
         <div className="flex items-center gap-3 mb-6">
           <img
             src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
             alt="Mastercard"
             className="w-[53px] h-[36px] border border-[#EAECF0] rounded-[4px] p-1 object-contain"
           />
           <img
             src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
             alt="Visa"
             className="w-[53px] h-[36px] border border-[#EAECF0] rounded-[4px] p-1 object-contain"
           />
           <img
             src={paypal}
             alt="PayPal"
             className="w-[53px] h-[36px] border border-[#EAECF0] rounded-[4px] p-1 object-contain"
           />
         </div>
     
         {/* Add Card Button */}
         <button className="w-full bg-[#3A86FF] text-white text-[16px] font-semibold py-3 rounded-lg">
           Add Card
         </button>
       </div>
     </div>
     
      )}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-[500px] px-6 py-8  relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
              onClick={handleClose}
            >
              &times;
            </button>

            {/* Top Image */}
            <img
              src={monthly}
              alt="Success"
              className="w-20 h-20 mx-auto mb-6"
            />

            {/* Texts */}
            <h2 className="text-[26px] text-center font-semibold text-[#101828] mb-3">
              Monthly Plan Activated!
            </h2>

            <p className="text-[20px] font-normal text-[#475467] mb-3">
              You’ve successfully subscribed to the Monthly Plan. Enjoy
              unlimited access to all games and features no daily limits!
            </p>

            <p className="text-[20px] font-medium text-[#101828] mb-3">
              Renews on: July 30, 2025
            </p>

            <p className="text-[20px] font-normal text-[#475467] mb-6">
              You can manage or cancel your subscription anytime in settings.
            </p>

            {/* Button */}
            <button
              onClick={handleClose}
              className="w-full bg-[#3A86FF] text-white text-[18px] font-semibold py-3 rounded-xl"
            >
              Start Playing
            </button>
          </div>
        </div>
      )}
      {isOpenYearly && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-[500px] px-6 py-8  relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
              onClick={handleCloseYearly}
            >
              &times;
            </button>

            {/* Top Image */}
            <img
              src={yearlyimg}
              alt="Success"
              className="w-20 h-20 mx-auto mb-6"
            />

            {/* Texts */}
            <h2 className="text-[26px] text-center font-semibold text-[#101828] mb-3">
              Yearly Plan Activated!
            </h2>

            <p className="text-[20px] font-normal text-[#475467] mb-3">
              You’ve unlocked a full year of unlimited learning and fun. No
              limits, all features and you saved 2 months!
            </p>

            <p className="text-[20px] font-medium text-[#101828] mb-3">
              Renews on: July 30, 2025
            </p>

            <p className="text-[20px] font-normal text-[#475467] mb-6">
              You can manage or cancel your subscription anytime in settings.
            </p>

            {/* Button */}
            <button
              onClick={handleClose}
              className="w-full bg-[#3A86FF] text-white text-[18px] font-semibold py-3 rounded-xl"
            >
              Start Playing
            </button>
          </div>
        </div>
      )}
      {showPrivacyPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div
            className="relative w-[530px] h-[670px] rounded-xl overflow-hidden shadow-xl"
            style={{
              backgroundImage: `url(${privacybg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Content Wrapper with translucent background */}
            <div className="w-full h-full rounded-xl px-6 py-6 overflow-y-auto">
              {/* Close Icon - Top Left */}
              <button
                className="absolute top-4 left-4 text-[#101828] text-2xl font-bold"
                onClick={() => setShowPrivacyPopup(false)}
              >
                &times;
              </button>

              {/* Title */}
              <h2 className="text-[#101828] text-[20px] font-medium text-center mb-6">
                Privacy Policy
              </h2>

              {/* Section 1 */}
              <h3 className="text-[#101828] text-[17px] font-medium mb-2">
                Introduction
              </h3>
              <p className="text-[#101828] text-[17px] mb-4">
                At ABC Kiddy, we are dedicated to creating a safe, fun, and
                educational experience for young children. We understand the
                importance of protecting your child's privacy and are committed
                to maintaining the trust of every parent and guardian who uses
                our app. This privacy policy explains how we handle data within
                the app and outlines our approach to user privacy and safety.
              </p>

              {/* Section 2 */}
              <h3 className="text-[#101828] text-[17px] font-medium mb-2">
                Information We Collect
              </h3>
              <p className="text-[#101828] text-[17px]">
                ABC Kiddy does not collect any personal information from
                children. We do not require users to create an account, log in,
                or provide any identifiable data to access or use the app. The
                only information we collect is non-personal, such as anonymous
                gameplay activity, which is stored locally on the user's device
                to support game progress and improve user experience. We do not
                transfer this information to our servers or any external system.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeScreen;
