import React, { useEffect, useState } from "react";
import StoreNavBar from "../Components/StoreNavBar/StoreNavBar";
import CategoryDiv from "../Components/Category/CategoryDiv";
import PopularTitles from "../Components/Category/PopularTitles";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import LoginCard from "../Components/LoginCard/LoginCard";
import BrowseList from "../Components/Browse/BrowseList";
import data from "../mockData/data.json";
import Special from "../Components/Special/Special";
const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [currentGame, setCurrentGame] = useState(0);
  const [loading, setLoading] = useState(true);
  const [transition, setTransition] = useState(false);
  const isLoggedIn = false;
  //pass game state down to category div
  const { id } = useParams();
  useEffect(() => {
    const getCategories = async () => {
      try {
        const resultData = data?.filter((item) =>
          item.category.some((category) =>
            category.toLocaleUpperCase().includes(id?.toLocaleUpperCase())
          )
        );
        if (resultData) {
          setCategories(resultData);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full ">
        <div className="w-full h-[1px]" />

        <StoreNavBar isLoggedIn={false} />
        <div
          className={`${
            transition ? "opacity-0" : "opacity-100"
          } transition-opacity duration-1000 ease-in-out`}
          style={{
            backgroundImage:
              "radial-gradient(farthest-side at 50% 40%, rgba(0, 0, 0, 0) 70%, black), linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
            WebkitMaskImage:
              "radial-gradient(ellipse at 50% 10%, black 1%, rgba(0, 0, 0, 0.5))",
            maskImage:
              "radial-gradient(ellipse at 50% 10%, black 1%, rgba(0, 0, 0, 0.5))",
          }}
        >
          <img
            src={categories.length > 0 && categories[currentGame]?.game_image}
            className="max-w-[1500px] w-full mx-auto h-[800px] mix-blend-overlay"
            alt="Category Image"
          />
        </div>

        <div>
          {/* category iv w/ bg image from game */}
          {loading ? (
            <div>loading...</div>
          ) : (
            <CategoryDiv
              transition={transition}
              setTransition={setTransition}
              categories={categories}
              currentGame={currentGame}
              setCurrentGame={setCurrentGame}
            />
          )}

          {/* game w/in category carousel */}
          {/* navebar of categories */}
          {/* Popular titles */}
          <div id="popular-titles-container">
            <PopularTitles categories={categories} />
          </div>

          <BrowseList allGames={data} />

          <div>
            <div className="max-w-[970px]  mx-auto">
              <Special />
            </div>
          </div>

          <div>
            <div className="max-w-[970px]  mx-auto">
              <Special />
            </div>
          </div>

          <div>
            <div className="max-w-[970px]  mx-auto">
              <Special />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;
