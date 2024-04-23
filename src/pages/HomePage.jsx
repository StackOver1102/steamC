import { useState } from "react";
import StoreNavBar from "../Components/StoreNavBar/StoreNavBar";
import Sidebar from "../Components/SideBar/SideBar";
import Navbar from "../Components/Navbar/Navbar";
import TestCarousel from "../Components/Carousel/Carousel";
import Special from "../Components/Special/Special";
import HomeHardware from "../Components/HomeHardware/HomeHardWare";
import CategoryCarousel from "../Components/Carousel/Category";
import LoginCard from "../Components/LoginCard/LoginCard";
import BrowseSteam from "../Components/Browse/BrowseSteam";
import LoginBar from "../Components/LoginBar/LoginBar";
import BrowseList from "../Components/Browse/BrowseList";
import data from "../mockData/data.json"
import Footer from "../Components/Footer/Footer";
const HomePage = () => {
  const [allGames, setAllGames] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [recentlyViewed, setRecentlyViewed] = useState([
    {
      id: 1,
      title: "test",
    },
    {
      id: 2,
      title: "test1",
    },
    {
      id: 3,
      title: "test2",
    },
    {
      id: 4,
      title: "test3",
    },
    {
      id: 5,
      title: "test4",
    },
    {
      id: 6,
      title: "test5",
    },
    {
      id: 7,
      title: "test6",
    },
  ]);
  
  return (
    <div className="w-full">
      <Navbar />
      <div className=" w-[972px] relative mx-auto">
        <StoreNavBar isLoggedIn={isLoggedIn} />
        <Sidebar recentlyViewed={recentlyViewed} />
        <TestCarousel />
        <Special />
        <HomeHardware />
        <CategoryCarousel />
        {!isLoggedIn && <LoginCard />}
        <BrowseSteam />
 
      </div>
      <BrowseList allGames={data} />
      {!isLoggedIn && <LoginBar />}
      <Footer/>
    </div>
  );
};

export default HomePage;
