import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Comment from "../Components/Comment/Comment";
import LoginBar from "../Components/LoginBar/LoginBar";
import Footer from "../Components/Footer/Footer";
import StoreNavBar from "../Components/StoreNavBar/StoreNavBar";

export default function CommunityRecomment() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="w-full">
      <Navbar />
      <StoreNavBar isLoggedIn={isLoggedIn} />

      <div className=" w-[972px] relative mx-auto">
        <Comment />
      </div>
      {!isLoggedIn && <LoginBar />}
      <Footer />
    </div>
  );
}
