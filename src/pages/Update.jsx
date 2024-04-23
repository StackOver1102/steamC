import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import StoreNavBar from "../Components/StoreNavBar/StoreNavBar";
import LoginBar from "../Components/LoginBar/LoginBar";
import Footer from "../Components/Footer/Footer";

function Update() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-full">
      <Navbar />
      <StoreNavBar isLoggedIn={isLoggedIn} />
      <div className=" w-[972px] relative mx-auto">
        <div className="w-full">
          <div className=" w-full flex flex-col items-center box-border">
            <div className="sticky top-0 h-[70px] z-[3] bg-inherit text-[24px] leading-[39px] font-semibold uppercase py-[14px]">
              <div class="text_h1">
                <span>Hôm nay</span>
                <div class="text-border"></div>
              </div>
            </div>
          </div>
          <div className="uRe48Q2FKb4aYFYW4wLei">
            <div className="_27AwJ2KTwTjT_IsecPg_I0 mk_unZNokCM8FBgfAD8G9 _1fwVUhCl520GyEwNCca3ea">
              <a>
                <div className="a0iPyOQq-F_qNEq2ShaGw">
                  <div className="_2W5LCUMswgquwVXkXBfiSl">
                    <div className="ymS8RaOqFW2QlKzkdQkxw">
                      <div className="_1SP_7pOu_ybhY8alURRoXo">
                        <div className="NopR2mR9The9BdP5rubjZ">
                          <div className="_2SYiaDJuW8kXAsdsmM_OQk">
                            <div className="_1bEUEmPv95oauR2A65ZXW9">
                              <img
                                class="_3wvlHErTQB-3R5lPOLI9ej"
                                src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/1142710/6db17b5e504c0850a9a60edac9152de019d0d3a8.jpg"
                              />
                              <div class="_2BL8LuuAf2kMJn9QbA2Ais">
                                Total War: WARHAMMER III{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="_3myvq7Z3dwZDNI6Ityh7Tt">
                          Thrones Of Decay: Introducing Malakai Makaisson
                        </div>
                        <div class="_1aeC3MzcYvJgev5T5jkXIH">
                          <div class="_184La5nT8EBJDvgxxbwZ66 mk_unZNokCM8FBgfAD8G9">
                            Sự kiện tin tức
                          </div>
                          <div class="Focusable">
                            <div class="bg1_S73RQlsdzUA-FRJJO">
                              30 phút trước
                            </div>
                          </div>
                        </div>
                        <div
                          class="flex-grow text-[14px] font-light leading-[19px] text-[#e4e8ec] word"
                          style={{
                            wordBreak: "break-word",
                            wordWrap: "break-word",
                          }}
                        >
                          This week, we would like to introduce another
                          Legendary Lord to arrive in Thrones of Decay - Malakai
                          Makaisson.
                        </div>
                      </div>
                    </div>
                    <div class="_1z05mwBfYTxKtHw1VUnZ0l">
                      <div class="_2vLZ-nT2tdJZFjdT20zsb4">
                        <div
                          class="Zo12Ux4F9OHSk8iLvmTpM"
                          style={{
                            backgroundImage:
                              "url('https://clan.akamai.steamstatic.com/images/39760201/dd57843ac3ff2cf14ed9a7041e507bb7f26d5a4d_400x225.png')",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="uRe48Q2FKb4aYFYW4wLei mt-[20px]">
            <div className="_27AwJ2KTwTjT_IsecPg_I0 mk_unZNokCM8FBgfAD8G9 _1fwVUhCl520GyEwNCca3ea">
              <a>
                <div className="a0iPyOQq-F_qNEq2ShaGw">
                  <div className="_2W5LCUMswgquwVXkXBfiSl">
                    <div className="ymS8RaOqFW2QlKzkdQkxw">
                      <div className="_1SP_7pOu_ybhY8alURRoXo">
                        <div className="NopR2mR9The9BdP5rubjZ">
                          <div className="_2SYiaDJuW8kXAsdsmM_OQk">
                            <div className="_1bEUEmPv95oauR2A65ZXW9">
                              <img
                                class="_3wvlHErTQB-3R5lPOLI9ej"
                                src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/1142710/6db17b5e504c0850a9a60edac9152de019d0d3a8.jpg"
                              />
                              <div class="_2BL8LuuAf2kMJn9QbA2Ais">
                                Total War: WARHAMMER III{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="_3myvq7Z3dwZDNI6Ityh7Tt">
                          Thrones Of Decay: Introducing Malakai Makaisson
                        </div>
                        <div class="_1aeC3MzcYvJgev5T5jkXIH">
                          <div class="_184La5nT8EBJDvgxxbwZ66 mk_unZNokCM8FBgfAD8G9">
                            Sự kiện tin tức
                          </div>
                          <div class="Focusable">
                            <div class="bg1_S73RQlsdzUA-FRJJO">
                              30 phút trước
                            </div>
                          </div>
                        </div>
                        <div
                          class="flex-grow text-[14px] font-light leading-[19px] text-[#e4e8ec] word"
                          style={{
                            wordBreak: "break-word",
                            wordWrap: "break-word",
                          }}
                        >
                          This week, we would like to introduce another
                          Legendary Lord to arrive in Thrones of Decay - Malakai
                          Makaisson.
                        </div>
                      </div>
                    </div>
                    <div class="_1z05mwBfYTxKtHw1VUnZ0l">
                      <div class="_2vLZ-nT2tdJZFjdT20zsb4">
                        <div
                          class="Zo12Ux4F9OHSk8iLvmTpM"
                          style={{
                            backgroundImage:
                              "url('https://clan.akamai.steamstatic.com/images/39760201/dd57843ac3ff2cf14ed9a7041e507bb7f26d5a4d_400x225.png')",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="uRe48Q2FKb4aYFYW4wLei mt-[20px]">
            <div className="_27AwJ2KTwTjT_IsecPg_I0 mk_unZNokCM8FBgfAD8G9 _1fwVUhCl520GyEwNCca3ea">
              <a>
                <div className="a0iPyOQq-F_qNEq2ShaGw">
                  <div className="_2W5LCUMswgquwVXkXBfiSl">
                    <div className="ymS8RaOqFW2QlKzkdQkxw">
                      <div className="_1SP_7pOu_ybhY8alURRoXo">
                        <div className="NopR2mR9The9BdP5rubjZ">
                          <div className="_2SYiaDJuW8kXAsdsmM_OQk">
                            <div className="_1bEUEmPv95oauR2A65ZXW9">
                              <img
                                class="_3wvlHErTQB-3R5lPOLI9ej"
                                src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/1142710/6db17b5e504c0850a9a60edac9152de019d0d3a8.jpg"
                              />
                              <div class="_2BL8LuuAf2kMJn9QbA2Ais">
                                Total War: WARHAMMER III{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="_3myvq7Z3dwZDNI6Ityh7Tt">
                          Thrones Of Decay: Introducing Malakai Makaisson
                        </div>
                        <div class="_1aeC3MzcYvJgev5T5jkXIH">
                          <div class="_184La5nT8EBJDvgxxbwZ66 mk_unZNokCM8FBgfAD8G9">
                            Sự kiện tin tức
                          </div>
                          <div class="Focusable">
                            <div class="bg1_S73RQlsdzUA-FRJJO">
                              30 phút trước
                            </div>
                          </div>
                        </div>
                        <div
                          class="flex-grow text-[14px] font-light leading-[19px] text-[#e4e8ec] word"
                          style={{
                            wordBreak: "break-word",
                            wordWrap: "break-word",
                          }}
                        >
                          This week, we would like to introduce another
                          Legendary Lord to arrive in Thrones of Decay - Malakai
                          Makaisson.
                        </div>
                      </div>
                    </div>
                    <div class="_1z05mwBfYTxKtHw1VUnZ0l">
                      <div class="_2vLZ-nT2tdJZFjdT20zsb4">
                        <div
                          class="Zo12Ux4F9OHSk8iLvmTpM"
                          style={{
                            backgroundImage:
                              "url('https://clan.akamai.steamstatic.com/images/39760201/dd57843ac3ff2cf14ed9a7041e507bb7f26d5a4d_400x225.png')",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {!isLoggedIn && <LoginBar />}
      <Footer />
    </div>
  );
}

export default Update;
