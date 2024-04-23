import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import LoginBar from "../Components/LoginBar/LoginBar";
import StoreNavBar from "../Components/StoreNavBar/StoreNavBar";
import "./index.css";
function PlayTop() {
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
              <h1 className="text-[36px] uppercase text-[#fff] pt-[2px] font-semibold">
              CHƠI NHIỀU NHẤT
              </h1>
              <h1 className="text-[18px] text-[#ffff]">
                Top trò chơi được chơi nhiều nhất
              </h1>
              <div className="min-h-[100vh] mt-[20px]">
                <table className="_3arZn0BMPzyhcYNADe193m">
                  <thead className="_3eKiI5Uhn6pLBSBqg3LbBz">
                    <tr>
                      <th className="_2BuNWG4dJy40ZhU9u51gYq" colspan="2">
                        <span>Xếp hạng</span>
                      </th>
                      <th className="_iRXB-jnm1HdyuH-mHN_h amGaROSLVVh48h1bqp40a">
                        <div className="_2OA1JW-4H-f01kM7myTUuu Focusable">
                          Giá
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                            x="0px"
                            y="0px"
                          >
                            <path
                              d="M50,7A43,43,0,1,1,7,50,43,43,0,0,1,50,7m0-7a50,50,0,1,0,50,50A50,50,0,0,0,50,0h0Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M50.79,25a45.51,45.51,0,0,1,5.29.87c5.33,1.51,8.5,5.77,8.9,11.43a10.4,10.4,0,0,1-4.21,9.5c-1.42,1.1-2.91,2.1-4.34,3.18a7.06,7.06,0,0,0-3.18,6.3,4,4,0,0,1-2.88,4,4.42,4.42,0,0,1-5.18-1.55,4.19,4.19,0,0,1-.59-2.07A13.89,13.89,0,0,1,50.3,45,41.55,41.55,0,0,0,54.83,41,5,5,0,0,0,56,38.19c0.23-2.83-1.59-4.65-4.52-4.84-3.54-.23-6.52.69-8.6,3.82a4.19,4.19,0,0,1-4.35,2c-3-.5-4.29-2.94-3.06-5.75a12.84,12.84,0,0,1,6.25-6.2A21.71,21.71,0,0,1,50.79,25Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M53.78,69.88C53.8,73.09,52,75,48.85,75s-5.25-1.84-5.26-4.53c0-3.73,1.67-5.59,5-5.69C51.3,64.7,54.12,66.36,53.78,69.88Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </th>
                      <th className="_150QPa7Ul5lH8rPbsAMn-8" align="right">
                        <div className="_2OA1JW-4H-f01kM7myTUuu Focusable">
                          <span>NGƯỜI CHƠI HIỆN TẠI</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                            x="0px"
                            y="0px"
                          >
                            <path
                              d="M50,7A43,43,0,1,1,7,50,43,43,0,0,1,50,7m0-7a50,50,0,1,0,50,50A50,50,0,0,0,50,0h0Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M50.79,25a45.51,45.51,0,0,1,5.29.87c5.33,1.51,8.5,5.77,8.9,11.43a10.4,10.4,0,0,1-4.21,9.5c-1.42,1.1-2.91,2.1-4.34,3.18a7.06,7.06,0,0,0-3.18,6.3,4,4,0,0,1-2.88,4,4.42,4.42,0,0,1-5.18-1.55,4.19,4.19,0,0,1-.59-2.07A13.89,13.89,0,0,1,50.3,45,41.55,41.55,0,0,0,54.83,41,5,5,0,0,0,56,38.19c0.23-2.83-1.59-4.65-4.52-4.84-3.54-.23-6.52.69-8.6,3.82a4.19,4.19,0,0,1-4.35,2c-3-.5-4.29-2.94-3.06-5.75a12.84,12.84,0,0,1,6.25-6.2A21.71,21.71,0,0,1,50.79,25Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M53.78,69.88C53.8,73.09,52,75,48.85,75s-5.25-1.84-5.26-4.53c0-3.73,1.67-5.59,5-5.69C51.3,64.7,54.12,66.36,53.78,69.88Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </th>
                      <th className="_1ODmeBQGexjb68QaWkQay2" align="right">
                        <div className="_2OA1JW-4H-f01kM7myTUuu Focusable">
                        ĐỈNH HÔM NAY
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                            x="0px"
                            y="0px"
                          >
                            <path
                              d="M50,7A43,43,0,1,1,7,50,43,43,0,0,1,50,7m0-7a50,50,0,1,0,50,50A50,50,0,0,0,50,0h0Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M50.79,25a45.51,45.51,0,0,1,5.29.87c5.33,1.51,8.5,5.77,8.9,11.43a10.4,10.4,0,0,1-4.21,9.5c-1.42,1.1-2.91,2.1-4.34,3.18a7.06,7.06,0,0,0-3.18,6.3,4,4,0,0,1-2.88,4,4.42,4.42,0,0,1-5.18-1.55,4.19,4.19,0,0,1-.59-2.07A13.89,13.89,0,0,1,50.3,45,41.55,41.55,0,0,0,54.83,41,5,5,0,0,0,56,38.19c0.23-2.83-1.59-4.65-4.52-4.84-3.54-.23-6.52.69-8.6,3.82a4.19,4.19,0,0,1-4.35,2c-3-.5-4.29-2.94-3.06-5.75a12.84,12.84,0,0,1,6.25-6.2A21.71,21.71,0,0,1,50.79,25Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M53.78,69.88C53.8,73.09,52,75,48.85,75s-5.25-1.84-5.26-4.53c0-3.73,1.67-5.59,5-5.69C51.3,64.7,54.12,66.36,53.78,69.88Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tr_table">
                      <td class="td_tr_table">1</td>
                      <td class="tr_temp1 w-[50%]">
                        <a
                          class="_2C5PJOUH6RqyuBNEwaCE9X"
                          href="https://store.steampowered.com/app/1675200/Steam_Deck?snr=1_7001_topselling__7003"
                        >
                          <img
                            class="_2dODJrHKWs6F9v9QpgzihO inline-block h-[52px] align-middle"
                            src="https://cdn.akamai.steamstatic.com/steam/apps/1675200/capsule_231x87.jpg?t=1699990406"
                          />
                          <div class="_1n_4-zvf0n4aqGEksbgW9N ml-2">
                            Steam Deck
                          </div>
                        </a>
                      </td>
                      <td class="tr_temp">
                        <div class="_30rPOgtyETKSFTmKGlL7LD">
                          <div class="tqNH01O5etkpJLgUyBPcP StoreSalePriceWidgetContainer">
                            <div class="Wh0L8EnwsPV_8VAu8TOYr">$349.00</div>
                          </div>
                        </div>
                      </td>
                      <td class="text-[#68bb28] temp">
                        <div class="_2OA1JW-4H-f01kM7myTUuu Focusable">1.474.866</div>
                      </td>
                      <td class="td_end">
                        <div class="td_div">1.474.866</div>
                      </td>
                    </tr>
                    <div style={{ height: "2px" }}></div>
                    <tr className="tr_table py-[1px]">
                      <td class="td_tr_table">2</td>
                      <td class="tr_temp1 w-[50%]">
                        <a
                          class="_2C5PJOUH6RqyuBNEwaCE9X"
                          href="https://store.steampowered.com/app/1675200/Steam_Deck?snr=1_7001_topselling__7003"
                        >
                          <img
                            class="_2dODJrHKWs6F9v9QpgzihO inline-block h-[52px] align-middle"
                            src="https://cdn.akamai.steamstatic.com/steam/apps/1675200/capsule_231x87.jpg?t=1699990406"
                          />
                          <div class="_1n_4-zvf0n4aqGEksbgW9N ml-2">
                            Steam Deck
                          </div>
                        </a>
                      </td>
                      <td class="tr_temp">
                        <div class="_30rPOgtyETKSFTmKGlL7LD">
                          <div class="tqNH01O5etkpJLgUyBPcP StoreSalePriceWidgetContainer">
                            <div class="Wh0L8EnwsPV_8VAu8TOYr">$349.00</div>
                          </div>
                        </div>
                      </td>
                      <td class="text-[#68bb28] temp">
                        <div class="_2OA1JW-4H-f01kM7myTUuu Focusable">1.474.866</div>
                      </td>
                      <td class="td_end">
                        <div class="td_div">1.474.866</div>
                      </td>
                    </tr>
                    <div style={{ height: "2px" }}></div>
                    <tr className="tr_table py-[1px]">
                      <td class="td_tr_table">3</td>
                      <td class="tr_temp1 w-[50%]">
                        <a
                          class="_2C5PJOUH6RqyuBNEwaCE9X"
                          href="https://store.steampowered.com/app/1675200/Steam_Deck?snr=1_7001_topselling__7003"
                        >
                          <img
                            class="_2dODJrHKWs6F9v9QpgzihO inline-block h-[52px] align-middle"
                            src="https://cdn.akamai.steamstatic.com/steam/apps/1675200/capsule_231x87.jpg?t=1699990406"
                          />
                          <div class="_1n_4-zvf0n4aqGEksbgW9N ml-2">
                            Steam Deck
                          </div>
                        </a>
                      </td>
                      <td class="tr_temp">
                        <div class="_30rPOgtyETKSFTmKGlL7LD">
                          <div class="tqNH01O5etkpJLgUyBPcP StoreSalePriceWidgetContainer">
                            <div class="Wh0L8EnwsPV_8VAu8TOYr">$349.00</div>
                          </div>
                        </div>
                      </td>
                      <td class="text-[#68bb28] temp">
                        <div class="_2OA1JW-4H-f01kM7myTUuu Focusable">1.474.866</div>
                      </td>
                      <td class="td_end">
                        <div class="td_div">1.474.866</div>
                      </td>
                    </tr>
                    <div style={{ height: "2px" }}></div>

                    <tr className="tr_table py-[1px]">
                      <td class="td_tr_table">4</td>
                      <td class="tr_temp1 w-[50%]">
                        <a
                          class="_2C5PJOUH6RqyuBNEwaCE9X"
                          href="https://store.steampowered.com/app/1675200/Steam_Deck?snr=1_7001_topselling__7003"
                        >
                          <img
                            class="_2dODJrHKWs6F9v9QpgzihO inline-block h-[52px] align-middle"
                            src="https://cdn.akamai.steamstatic.com/steam/apps/1675200/capsule_231x87.jpg?t=1699990406"
                          />
                          <div class="_1n_4-zvf0n4aqGEksbgW9N ml-2">
                            Steam Deck
                          </div>
                        </a>
                      </td>
                      <td class="tr_temp">
                        <div class="_30rPOgtyETKSFTmKGlL7LD">
                          <div class="tqNH01O5etkpJLgUyBPcP StoreSalePriceWidgetContainer">
                            <div class="Wh0L8EnwsPV_8VAu8TOYr">$349.00</div>
                          </div>
                        </div>
                      </td>
                      <td class="text-[#68bb28] temp">
                        <div class="_2OA1JW-4H-f01kM7myTUuu Focusable">1.474.866</div>
                      </td>
                      <td class="td_end">
                        <div class="td_div">1.474.866</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
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

export default PlayTop;
