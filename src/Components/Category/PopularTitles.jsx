import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginCard from "../LoginCard/LoginCard";
import "./index.css";
import Special from "../Special/Special";

function PopularTitles({ categories }) {
  const [hover, setHover] = useState(-1);

  return (
    // map over titles fetched and create pop-title div
    <div id="PopularTitles-container" className="mt-[-400px]">
      <div className=" mx-auto middle SaleSectionTabs _2xKqp8O9ECJphQNtIOI6SQ">
        <div className="flex w-full overflow-x-auto overflow-y-hidden">
          <div className="flex my-0 mx-auto flex-row">
            <div className="active font-bold lett tracking-wide SaleTab _3jWYuVhw4djavxCLhKnHqX">
              <div class="text-center hover:underline">Featured</div>
            </div>
            <div className="notactive font-bold lett tracking-wide SaleTab _3jWYuVhw4djavxCLhKnHqX">
              <div class="text-center hover:underline">Action-Adventure</div>
            </div>
            <div className="notactive font-bold lett tracking-wide SaleTab _3jWYuVhw4djavxCLhKnHqX">
              <div class="text-center hover:underline">Action RPG</div>
            </div>
            <div className="notactive font-bold lett tracking-wide SaleTab _3jWYuVhw4djavxCLhKnHqX">
              <div class="text-center hover:underline">Arcade</div>
            </div>
            <div className="notactive font-bold lett tracking-wide SaleTab _3jWYuVhw4djavxCLhKnHqX">
              <div class="text-center hover:underline">Casual</div>
            </div>
            <div className="notactive font-bold lett tracking-wide SaleTab _3jWYuVhw4djavxCLhKnHqX">
              <div class="text-center hover:underline">Fighting</div>
            </div>
            <div className="notactive font-bold lett tracking-wide SaleTab _3jWYuVhw4djavxCLhKnHqX">
              <div class="text-center hover:underline">Open World</div>
            </div>
            <div className="notactive font-bold lett tracking-wide SaleTab _3jWYuVhw4djavxCLhKnHqX">
              <div class="text-center hover:underline">Platformer</div>
            </div>
            <div className="notactive font-bold lett tracking-wide SaleTab _3jWYuVhw4djavxCLhKnHqX">
              <div class="text-center hover:underline">Shooter</div>
            </div>
            <div className="notactive font-bold lett tracking-wide SaleTab _3jWYuVhw4djavxCLhKnHqX">
              <div class="text-center hover:underline">Controller</div>
            </div>
          </div>
        </div>
      </div>

      { <LoginCard />}
      <div className="max-w-[970px]  mx-auto">
        <Special />
      </div>
      <div
        id="popular-titles-header"
        className="text-white text-4xl  text-center"
      >
        Popular Titles
      </div>
      <div
        id="game-grid"
        className="grid grid-cols-3 gap-16 pb-16 pt-10  max-w-[970px]  mx-auto"
      >
        {categories.map((category, index) => (
          <div
            key={category.id}
            className="h-[170px] w-[300px] mt-[0px] rounded-lg hover:shadow-md hover:shadow-[#fafafa9b] mr-2 hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(-1)}
          >
            <Link to={`/product/${category.id}`}>
              {hover === index ? (
                <video src={category.videos} autoPlay muted />
              ) : (
                <img src={category.game_image} className="rounded-t-[5px]" />
              )}
            </Link>
            <div className="text-white text-center mt-[3px]">
              {category.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularTitles;
