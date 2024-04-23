import React from "react";

export default function Comment() {
  return (
    <div className="border-t-[1px] border-black">
      <div className="w-[940px] mx-auto mb-[100px] h-[1500px]">
        <div
          className="mt-3 overflow-hidden text-[14px] game_description_column text-[#acb2b8]"
          style={{ fontFamily: "Motiva Sans, sans-serif" }}
        >
          <h1 className="text-[14px] uppercase text-[#fff] pt-[2px] font-normal">
            ĐÁNH GIÁ CỦA KHÁCH HÀNG
          </h1>

          <div className="p-2 " style={{ background: "#2a475e" }}>
            <p className="text-[#acb2b8] mt- items-center">
              Đánh giá được viết trước ngày 28 Thg09, 2023 @ 5:30am là dành cho
              CS:GO, phiên bản cũ của Counter-Strike 2.
            </p>
          </div>
          <div className="flex mt-[2px] mb-4">
            <div className="w-[60%]">
              <div style={{ background: "#2a475e" }}>
                <div className="flex flex-col p-2">
                  <p>Đánh giá chung:</p>
                  <p>
                    <span className="text-[#66C0F4] text-[17px]">
                      Rất tích cực
                    </span>{" "}
                    (8,006,382 đánh giá){" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[40%]">
              <div style={{ background: "rgba( 148, 217, 255, 0.2 )" }}>
                <div className="flex flex-col p-2">
                  <p>Đánh giá gần đây:</p>
                  <p>
                    <span className="text-[#66C0F4] text-[17px]">
                      Khá tích cự:
                    </span>{" "}
                    Khá tích cực (62,379 đánh giá)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" border-t-[1px] border-black">
            <h2>ĐÁNH GIÁ CÓ ÍCH NHẤT TRONG 30 NGÀY QUA</h2>

            <div className=" float-left w-[616px] mt-2 ">
              <div
                style={{
                  background:
                    "linear-gradient( -60deg, rgba(226,244,255,0.3) 5%,rgba(84, 107, 115, 0.3) 95%)",
                }}
                className="relative rounded font-normal text-[13px] text-[#c6d4df] p-2 pb-[26px] mb-7 flex"
              >
                <div className="w-[40%]">
                  <div class="leftcol flex items-center">
                    <div class="avatar mr-4">
                      <a href="https://steamcommunity.com/profiles/76561199188808317/">
                        <div
                          class="playerAvatar offline"
                          data-miniprofile="1228542589"
                        >
                          <img
                            class="w-8 h-8"
                            src="https://avatars.akamai.steamstatic.com/e512258917a6ac0a1c52c22c3dea6b1650da542b.jpg"
                            srcset="https://avatars.akamai.steamstatic.com/e512258917a6ac0a1c52c22c3dea6b1650da542b.jpg 1x, https://avatars.akamai.steamstatic.com/e512258917a6ac0a1c52c22c3dea6b1650da542b_medium.jpg 2x"
                            alt="ThanhZT"
                          />
                        </div>
                      </a>
                    </div>
                    <div>
                      <div class="persona_name mb-1">
                        <a
                          href="https://steamcommunity.com/profiles/76561199188808317/"
                          data-miniprofile="1228542589"
                        >
                          ThanhZT
                        </a>
                      </div>
                      <div class="num_reviews text-sm">
                        <a href="https://steamcommunity.com/profiles/76561199188808317/recommended/">
                          3 đánh giá
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[60%] flex flex-col">
                  <div className="flex">
                    <div
                      className="w-full flex"
                      style={{ background: "rgba( 0, 0, 0, 0.2 )" }}
                    >
                      <div className="w-[10%]">
                        <img
                          id="votingImage"
                          src="https://store.akamai.steamstatic.com/public/shared/images/userreviews/icon_thumbsUp_v6.png"
                          width="40"
                          height="40"
                        />
                      </div>
                      <div className="w-[90%] ml-2">
                        <div>
                          <p className="text-[16px] text-[#fff]">Tích cực</p>
                          <p className="text-[#8091a2] text-[11px]">
                            1.6 giờ được ghi nhận{" "}
                          </p>
                        </div>
                        <div className="float-right absolute top-[12px] right-[10px]">
                          <img src="https://store.akamai.steamstatic.com/public/shared/images/userreviews/icon_review_notcounted.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#4d6c8b] border-[1px] border-[#779abc] border-solid w-fit cursor-default	leading-[13px] mt-2">
                    <p className="uppercase">Đánh giá truy cập sớm</p>
                  </div>
                  <div className="inline-block cursor-default leading-[13px] mt-2">
                    <p className="uppercase text-[10px] text-[#8091a2]">
                      Đăng ngày: 19 Tháng 4{" "}
                    </p>
                  </div>
                  <div className="inline-block cursor-default leading-[13px] mt-2 mb-2">
                    <p>
                      Perry good game play and art, Optimal maybe not good but i
                      believe in moon studio is Conscientious developer
                    </p>
                  </div>
                  <div className="border-b-[1px] border-[#363f4c]"></div>
                  <div className="inline-block cursor-default leading-[13px] mt-2">
                    <p className="uppercase text-[10px] text-[#8091a2]">
                      Đánh giá này có hữu ích?{" "}
                    </p>
                  </div>
                  <div className="flex pt-2">
                    <div>
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Có
                      </button>
                    </div>
                    <div className="pl-2">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Không
                      </button>
                    </div>
                    <div className="pl-2">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Hài hước
                      </button>
                    </div>
                    <div className="pl-2">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Trao thưởng
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  background:
                    "linear-gradient( -60deg, rgba(226,244,255,0.3) 5%,rgba(84, 107, 115, 0.3) 95%)",
                }}
                className="relative rounded font-normal text-[13px] text-[#c6d4df] p-2 pb-[26px] mb-7 flex"
              >
                <div className="w-[40%]">
                  <div class="leftcol flex items-center">
                    <div class="avatar mr-4">
                      <a href="https://steamcommunity.com/profiles/76561199188808317/">
                        <div
                          class="playerAvatar offline"
                          data-miniprofile="1228542589"
                        >
                          <img
                            class="w-8 h-8"
                            src="https://avatars.akamai.steamstatic.com/e512258917a6ac0a1c52c22c3dea6b1650da542b.jpg"
                            srcset="https://avatars.akamai.steamstatic.com/e512258917a6ac0a1c52c22c3dea6b1650da542b.jpg 1x, https://avatars.akamai.steamstatic.com/e512258917a6ac0a1c52c22c3dea6b1650da542b_medium.jpg 2x"
                            alt="ThanhZT"
                          />
                        </div>
                      </a>
                    </div>
                    <div>
                      <div class="persona_name mb-1">
                        <a
                          href="https://steamcommunity.com/profiles/76561199188808317/"
                          data-miniprofile="1228542589"
                        >
                          ThanhZT
                        </a>
                      </div>
                      <div class="num_reviews text-sm">
                        <a href="https://steamcommunity.com/profiles/76561199188808317/recommended/">
                          3 đánh giá
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[60%] flex flex-col">
                  <div className="flex">
                    <div
                      className="w-full flex"
                      style={{ background: "rgba( 0, 0, 0, 0.2 )" }}
                    >
                      <div className="w-[10%]">
                        <img
                          id="votingImage"
                          src="https://store.akamai.steamstatic.com/public/shared/images/userreviews/icon_thumbsUp_v6.png"
                          width="40"
                          height="40"
                        />
                      </div>
                      <div className="w-[90%] ml-2">
                        <div>
                          <p className="text-[16px] text-[#fff]">Tích cực</p>
                          <p className="text-[#8091a2] text-[11px]">
                            1.6 giờ được ghi nhận{" "}
                          </p>
                        </div>
                        <div className="float-right absolute top-[12px] right-[10px]">
                          <img src="https://store.akamai.steamstatic.com/public/shared/images/userreviews/icon_review_notcounted.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#4d6c8b] border-[1px] border-[#779abc] border-solid w-fit cursor-default	leading-[13px] mt-2">
                    <p className="uppercase">Đánh giá truy cập sớm</p>
                  </div>
                  <div className="inline-block cursor-default leading-[13px] mt-2">
                    <p className="uppercase text-[10px] text-[#8091a2]">
                      Đăng ngày: 19 Tháng 4{" "}
                    </p>
                  </div>
                  <div className="inline-block cursor-default leading-[13px] mt-2 mb-2">
                    <p>
                      Perry good game play and art, Optimal maybe not good but i
                      believe in moon studio is Conscientious developer
                    </p>
                  </div>
                  <div className="border-b-[1px] border-[#363f4c]"></div>
                  <div className="inline-block cursor-default leading-[13px] mt-2">
                    <p className="uppercase text-[10px] text-[#8091a2]">
                      Đánh giá này có hữu ích?{" "}
                    </p>
                  </div>
                  <div className="flex pt-2">
                    <div>
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Có
                      </button>
                    </div>
                    <div className="pl-2">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Không
                      </button>
                    </div>
                    <div className="pl-2">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Hài hước
                      </button>
                    </div>
                    <div className="pl-2">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Trao thưởng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  background:
                    "linear-gradient( -60deg, rgba(226,244,255,0.3) 5%,rgba(84, 107, 115, 0.3) 95%)",
                }}
                className="relative rounded font-normal text-[13px] text-[#c6d4df] p-2 pb-[26px] mb-7 flex"
              >
                <div className="w-[40%]">
                  <div class="leftcol flex items-center">
                    <div class="avatar mr-4">
                      <a href="https://steamcommunity.com/profiles/76561199188808317/">
                        <div
                          class="playerAvatar offline"
                          data-miniprofile="1228542589"
                        >
                          <img
                            class="w-8 h-8"
                            src="https://avatars.akamai.steamstatic.com/e512258917a6ac0a1c52c22c3dea6b1650da542b.jpg"
                            srcset="https://avatars.akamai.steamstatic.com/e512258917a6ac0a1c52c22c3dea6b1650da542b.jpg 1x, https://avatars.akamai.steamstatic.com/e512258917a6ac0a1c52c22c3dea6b1650da542b_medium.jpg 2x"
                            alt="ThanhZT"
                          />
                        </div>
                      </a>
                    </div>
                    <div>
                      <div class="persona_name mb-1">
                        <a
                          href="https://steamcommunity.com/profiles/76561199188808317/"
                          data-miniprofile="1228542589"
                        >
                          ThanhZT
                        </a>
                      </div>
                      <div class="num_reviews text-sm">
                        <a href="https://steamcommunity.com/profiles/76561199188808317/recommended/">
                          3 đánh giá
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[60%] flex flex-col">
                  <div className="flex">
                    <div
                      className="w-full flex"
                      style={{ background: "rgba( 0, 0, 0, 0.2 )" }}
                    >
                      <div className="w-[10%]">
                        <img
                          id="votingImage"
                          src="https://store.akamai.steamstatic.com/public/shared/images/userreviews/icon_thumbsUp_v6.png"
                          width="40"
                          height="40"
                        />
                      </div>
                      <div className="w-[90%] ml-2">
                        <div>
                          <p className="text-[16px] text-[#fff]">Tích cực</p>
                          <p className="text-[#8091a2] text-[11px]">
                            1.6 giờ được ghi nhận{" "}
                          </p>
                        </div>
                        <div className="float-right absolute top-[12px] right-[10px]">
                          <img src="https://store.akamai.steamstatic.com/public/shared/images/userreviews/icon_review_notcounted.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#4d6c8b] border-[1px] border-[#779abc] border-solid w-fit cursor-default	leading-[13px] mt-2">
                    <p className="uppercase">Đánh giá truy cập sớm</p>
                  </div>
                  <div className="inline-block cursor-default leading-[13px] mt-2">
                    <p className="uppercase text-[10px] text-[#8091a2]">
                      Đăng ngày: 19 Tháng 4{" "}
                    </p>
                  </div>
                  <div className="inline-block cursor-default leading-[13px] mt-2 mb-2">
                    <p>
                      Perry good game play and art, Optimal maybe not good but i
                      believe in moon studio is Conscientious developer
                    </p>
                  </div>
                  <div className="border-b-[1px] border-[#363f4c]"></div>
                  <div className="inline-block cursor-default leading-[13px] mt-2">
                    <p className="uppercase text-[10px] text-[#8091a2]">
                      Đánh giá này có hữu ích?{" "}
                    </p>
                  </div>
                  <div className="flex pt-2">
                    <div>
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Có
                      </button>
                    </div>
                    <div className="pl-2">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Không
                      </button>
                    </div>
                    <div className="pl-2">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Hài hước
                      </button>
                    </div>
                    <div className="pl-2">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Trao thưởng
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  background:
                    "linear-gradient( -60deg, rgba(226,244,255,0.3) 5%,rgba(84, 107, 115, 0.3) 95%)",
                }}
                className="relative rounded font-normal text-[13px] text-[#c6d4df] p-2 pb-[26px] mb-7 "
              >
                <h1 className="text-center text-[16px] text-[#67c1f5] pt-[30px] mb-[20px]">
                  Không còn đánh giá nào khớp với bộ lọc trên.
                </h1>
                <p className="text-[14px] text-[#898A8C] text-center px-4 ">
                  Chỉnh bộ lọc ở trên để xem thêm đánh giá khác
                </p>
              </div>
            </div>
            {/* right */}
          </div>
        </div>
      </div>
    </div>
  );
}
