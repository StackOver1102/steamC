import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import StoreNavBar from "../Components/StoreNavBar/StoreNavBar";
import LoginBar from "../Components/LoginBar/LoginBar";
import Footer from "../Components/Footer/Footer";
import "./index.css";
const Wishlist = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div className="w-full">
        <Navbar />
        <StoreNavBar isLoggedIn={isLoggedIn} />
        <div className=" w-[972px] relative mx-auto">
          <div className="w-full">
            <div className=" w-full flex flex-col items-center box-border">
              <div className="sticky top-0 h-[70px] z-[3] bg-inherit text-[24px] leading-[39px] font-semibold uppercase py-[14px]">
                <div class="text_h1">
                  <span>Giỏ hàng của bạn</span>
                  <div class="text-border"></div>
                </div>
              </div>
            </div>
            <div className="_1jqUY_WcPgZnIOE-d9x7wc Panel Focusable">
              <div className="_17GFdSD2pc0BquZk5cejg8">
                <div className="_3SgHVt1Zp2MeobFUVwwJ2q">
                  <div>
                    <div className="_2KiPYlH9C9k_-RZZgGJiF5">
                      <div className="yW_j0xWpHbU537U49A8C9">
                        <div class="_2_GgLF39j8N-D4NVCRoADZ">
                          <a href="https://store.steampowered.com/bundle/232/?snr=1_8_512_513_501">
                            <img
                              class="_1iNQ1wKn2l6XMObGfGUPnj"
                              src="https://cdn.akamai.steamstatic.com/steam/bundles/232/552et9ppfs81wxtf/header_ratio.jpg?t=1456860295"
                            />
                          </a>
                        </div>
                        <div className="jRg6Oo9hDgKCGaXi9NJvU">
                          <div class="F6ZErKA1thjnDLX-w2o-X hPrcqN8eXW6ZtBpSiC1_y _1SauQBjZGVKr-LA3wv2yfW Panel Focusable">
                            <div class="pVXX8Pzc4JbT40TP4RwRG">
                              Valve Complete Pack
                            </div>
                            <div class="F6ZErKA1thjnDLX-w2o-X hPrcqN8eXW6ZtBpSiC1_y Panel Focusable">
                              <span className="text-[#fff]">
                                Bao gồm 25 sản phẩm:&nbsp;
                              </span>
                              <div>
                                <a
                                  className="text-[#fff]"
                                  href="https://store.steampowered.com/app/10/CounterStrike?snr=1_8_512_513_431"
                                >
                                  Counter-Strike
                                </a>
                                ,&nbsp;
                              </div>
                              <div>
                                <a
                                  className="text-[#fff]"
                                  href="https://store.steampowered.com/app/20/Team_Fortress_Classic?snr=1_8_512_513_431"
                                >
                                  Team Fortress Classic
                                </a>
                                ,&nbsp;
                              </div>
                              <div>
                                <a
                                  className="text-[#fff]"
                                  href="https://store.steampowered.com/app/30/Day_of_Defeat?snr=1_8_512_513_431"
                                >
                                  Day of Defeat
                                </a>
                                ,&nbsp;
                              </div>
                              <div>
                                <a
                                  className="text-[#fff]"
                                  href="https://store.steampowered.com/app/40/Deathmatch_Classic?snr=1_8_512_513_431"
                                >
                                  Deathmatch Classic
                                </a>
                                ,&nbsp;
                              </div>
                              <div>
                                <a
                                  className="text-[#fff]"
                                  href="https://store.steampowered.com/app/50/HalfLife_Opposing_Force?snr=1_8_512_513_431"
                                >
                                  Half-Life: Opposing Force
                                </a>
                                ,&nbsp;
                              </div>
                              <div>
                                <a
                                  className="text-[#fff]"
                                  href="https://store.steampowered.com/app/60/Ricochet?snr=1_8_512_513_431"
                                >
                                  Ricochet
                                </a>
                                ,&nbsp;
                              </div>
                              <div>
                                <a
                                  className="text-[#fff]"
                                  href="https://store.steampowered.com/app/70/HalfLife?snr=1_8_512_513_431"
                                >
                                  Half-Life
                                </a>
                                ,&nbsp;
                              </div>
                              <div>
                                <a
                                  className="text-[#fff]"
                                  href="https://store.steampowered.com/app/80/CounterStrike_Condition_Zero?snr=1_8_512_513_431"
                                >
                                  Counter-Strike: Condition Zero
                                </a>
                                ,&nbsp;
                              </div>
                              <div>
                                <a
                                  className="text-[#fff]"
                                  href="https://store.steampowered.com/app/130/HalfLife_Blue_Shift?snr=1_8_512_513_431"
                                >
                                  Half-Life: Blue Shift
                                </a>
                                ,&nbsp;
                              </div>
                              <div>
                                <a
                                  className="text-[#fff]"
                                  href="https://store.steampowered.com/app/220/HalfLife_2?snr=1_8_512_513_431"
                                >
                                  Half-Life 2
                                </a>
                                ,&nbsp;
                              </div>
                              <div>
                                <a
                                  className="text-[#fff]"
                                  href="https://store.steampowered.com/app/240/CounterStrike_Source?snr=1_8_512_513_431"
                                >
                                  Counter-Strike: Source
                                </a>
                                ,&nbsp;
                              </div>
                              <div>
                                <a
                                  className="text-[#fff]"
                                  href="https://store.steampowered.com/app/280/HalfLife_Source?snr=1_8_512_513_431"
                                >
                                  Half-Life: Source
                                </a>
                                ,&nbsp;
                              </div>
                              <div>
                                <a
                                  className="text-[#fff]"
                                  href="https://store.steampowered.com/app/300/Day_of_Defeat_Source?snr=1_8_512_513_431"
                                >
                                  Day of Defeat: Source
                                </a>
                                ,&nbsp;
                              </div>
                              <div>
                                <a
                                  className="text-[#fff]"
                                  href="https://store.steampowered.com/app/320/HalfLife_2_Deathmatch?snr=1_8_512_513_431"
                                >
                                  Half-Life 2: Deathmatch
                                </a>
                                ,&nbsp;
                              </div>
                              <div>
                                <a
                                  className="text-[#fff]"
                                  href="https://store.steampowered.com/app/360/HalfLife_Deathmatch_Source?snr=1_8_512_513_431"
                                >
                                  Half-Life Deathmatch: Source
                                </a>
                                ,&nbsp;
                              </div>
                              <div>
                                <a
                                  className="text-[#fff]"
                                  href="https://store.steampowered.com/app/380/HalfLife_2_Episode_One?snr=1_8_512_513_431"
                                >
                                  Half-Life 2: Episode One
                                </a>
                                ,&nbsp;
                              </div>
                              <div>
                                <a
                                  className="text-[#fff]"
                                  href="https://store.steampowered.com/app/400/Portal?snr=1_8_512_513_431"
                                >
                                  Portal
                                </a>
                                ,&nbsp;
                              </div>
                              <div>
                                <a
                                  className="text-[#fff]"
                                  href="https://store.steampowered.com/app/420/HalfLife_2_Episode_Two?snr=1_8_512_513_431"
                                >
                                  Half-Life 2: Episode Two
                                </a>
                                ,&nbsp;
                              </div>
                              <div>
                                <a
                                  className="text-[#fff]"
                                  href="https://store.steampowered.com/app/440/Team_Fortress_2?snr=1_8_512_513_431"
                                >
                                  Team Fortress 2
                                </a>
                                ,&nbsp;
                              </div>
                              <div>
                                <a
                                  className="text-[#fff]"
                                  href="https://store.steampowered.com/app/500/Left_4_Dead?snr=1_8_512_513_431"
                                >
                                  Left 4 Dead
                                </a>
                                ,&nbsp;
                              </div>
                              <div>
                                <a
                                  className="text-[#fff]"
                                  href="https://store.steampowered.com/app/550/Left_4_Dead_2?snr=1_8_512_513_431"
                                >
                                  Left 4 Dead 2
                                </a>
                                ,&nbsp;
                              </div>
                              <div>
                                <a
                                  className="text-[#fff]"
                                  href="https://store.steampowered.com/app/570/Dota_2?snr=1_8_512_513_431"
                                >
                                  Dota 2
                                </a>
                                ,&nbsp;
                              </div>
                              <div>
                                <a
                                  className="text-[#fff]"
                                  href="https://store.steampowered.com/app/620/Portal_2?snr=1_8_512_513_431"
                                >
                                  Portal 2
                                </a>
                                ,&nbsp;
                              </div>
                              <div>
                                <a
                                  className="text-[#fff]"
                                  href="https://store.steampowered.com/app/730/CounterStrike_2?snr=1_8_512_513_431"
                                >
                                  Counter-Strike 2
                                </a>
                                ,&nbsp;
                              </div>
                              <div>
                                <a
                                  className="text-[#fff]"
                                  href="https://store.steampowered.com/app/450390/The_Lab?snr=1_8_512_513_431"
                                >
                                  The Lab
                                </a>
                              </div>
                            </div>
                            <div class="F6ZErKA1thjnDLX-w2o-X n7b9QjPvbLmeJH5iyelso Panel Focusable">
                              <div class="_26Nx9qAoRhIHJBkdLL0kQD _3kyTAc6GCZVQxNNiicR1sz">
                                <span class="_3vzWbeJ8alV7DKO0rwRuMK">
                                  <span title="Windows">
                                    <svg
                                      version="1.1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      class="SVGIcon_Button SVGIcon_WindowsLogo"
                                      width="100%"
                                      height="100%"
                                      viewBox="0 0 128 128"
                                      enable-background="new 0 0 128 128"
                                    >
                                      <rect
                                        fill="currentColor"
                                        width="60.834"
                                        height="60.835"
                                      ></rect>
                                      <rect
                                        x="67.165"
                                        fill="currentColor"
                                        width="60.835"
                                        height="60.835"
                                      ></rect>
                                      <rect
                                        y="67.164"
                                        fill="currentColor"
                                        width="60.834"
                                        height="60.836"
                                      ></rect>
                                      <rect
                                        x="67.165"
                                        y="67.164"
                                        fill="currentColor"
                                        width="60.835"
                                        height="60.836"
                                      ></rect>
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="text-[#fff]">
                            <p className="float-end">$104.94</p>
                          </div>
                          <div className="flex text-[#fff]">
                            <div
                              class="_3k04fs3THPIZ2U7W7Uw9C7 Panel Focusable mr-2"
                              title="Thêm vào giỏ hàng một bản sao nữa của sản phẩm"
                              tabindex="0"
                            >
                              Thêm
                            </div>
                            |
                            <div
                              class="_33j4SwfO2YH9eI6qV9BKaL Panel Focusable ml-2"
                              tabindex="0"
                            >
                              Gỡ bỏ
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="_1Sdz1qnoKoD9eEPpC340Yj Panel Focusable pt-2">
                      <div>
                        <button
                          type="button"
                          class="_1rk1xUIAHMcMMDm4jz3MOM DialogButton _DialogLayout Secondary Focusable"
                          tabindex="0"
                        >
                          Tiếp tục mua sắm
                        </button>
                      </div>
                      <div class="text-[#fff]" tabindex="0">
                        Gỡ bỏ tất cả sản phẩm
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="_3HIve50RR17shqpJqmrUps _31YlKoxrUknOG_d7armP5n Panel Focusable">
                <div className="_2bIzQo07mxubFvscA8RIA8">
                  <div class="_2DjadWLFH3keW9rGWZKxSk qV80oahDZsbXiS6lIDLND">
                    <div class="_3ayrhzEm-T_IRhWeQ4HFxr">Tổng ước tính</div>
                    <div class="_2WLaY5TxjBGVyuWe_6KS3N">$104.94</div>
                  </div>
                  <div class="_31DQWsrdb_9oV-vMOaaPqI qV80oahDZsbXiS6lIDLND">
                    Thuế tiêu thụ sẽ được tính trong quá trình thanh toán nếu có
                  </div>
                  <button type="button" class="qV80oahDZsbXiS6lIDLND DialogButton _DialogLayout Primary Focusable" tabindex="0">Đăng nhập để mua</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {!isLoggedIn && <LoginBar />}
        <Footer />
      </div>
    </>
  );
};

export default Wishlist;
