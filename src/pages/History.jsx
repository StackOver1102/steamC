import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import LoginBar from "../Components/LoginBar/LoginBar";
import Comment from "../Components/Comment/Comment";
import StoreNavBar from "../Components/StoreNavBar/StoreNavBar";
import "./index.css";
function History() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-full">
      <Navbar />
      <StoreNavBar isLoggedIn={isLoggedIn} />
      <div className=" w-[972px] relative mx-auto">
        {/* <Comment /> */}
        <div className="border-t-[1px] border-black">
          <div className="w-[940px] mx-auto mb-[100px] h-[500px]">
            <div
              className="mt-3 overflow-hidden text-[14px] game_description_column text-[#acb2b8]"
              style={{ fontFamily: "Motiva Sans, sans-serif" }}
            >
              <h1 className="text-[14px] uppercase text-[#fff] pt-[2px] font-normal">
                ĐƯỢC XEM GẦN ĐÂY NHẤT BỞI BẠN{" "}
                <span className="recommendation_bodytext">
                  ĐÃ XEM 18 THÁNG 4
                </span>
              </h1>

              <div className="recently_viewed_row cursor-pointer">
                <div>
                  <div class="recently_viewed_content">
                    <h3>Dota 2</h3>
                    <div class="buttons">
                      <a
                        class="recommendation_btn text-[#ffff]"
                        href="/"
                      >
                        sản phẩm tương tự
                      </a>
                    </div>
                  </div>
                  <div class="recently_viewed_date">Đã xem 18 Tháng 4 </div>
                  <div class="recently_viewed_price">
                    <span class="price">Chơi miễn phí</span>
                  </div>
                </div>
                <div class="recently_viewed_capsule app_impression_tracked">
                  <a href="/product/1">
                    <img src="https://cdn.akamai.steamstatic.com/steam/apps/570/capsule_184x69.jpg?t=1710346933" />
                  </a>
                </div>
              </div>
              <div className="recently_viewed_row cursor-pointer">
                <div>
                  <div class="recently_viewed_content">
                    <h3>Kingsgrave</h3>
                    <div class="buttons">
                      <a
                        class="recommendation_btn text-[#ffff]"
                        href="https://store.steampowered.com/recommended/morelike/app/570/?snr=1_300_4__305"
                      >
                        sản phẩm tương tự
                      </a>
                    </div>
                  </div>
                  <div class="recently_viewed_date">Đã xem 18 Tháng 4 </div>
                  <div class="recently_viewed_price">
                    <span class="price">Chơi miễn phí</span>
                  </div>
                </div>
                <div class="recently_viewed_capsule app_impression_tracked">
                  <a href="/product/1">
                    <img src="https://cdn.akamai.steamstatic.com/steam/apps/2644360/capsule_184x69.jpg?t=1713813940" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!isLoggedIn && <LoginBar />}
      <Footer />
    </div>
  );
}

export default History;
