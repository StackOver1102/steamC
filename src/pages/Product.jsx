import React, { useEffect, useState, useContext } from "react";
import StoreNavBar from "../Components/StoreNavBar/StoreNavBar";
import TitleBar from "../Components/Product/TitleBar";
import ProductCarousel from "../Components/Product/ProductCarousel";
import Purchase from "../Components/Product/Purchase";
import { Link, useParams } from "react-router-dom";
import data from "../mockData/data.json";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import "./index.css";
import CategoryCarousel from "../Components/Carousel/Category";
import Comment from "../Components/Comment/Comment";
const ProductPage = ({ setRecentlyViewed, recentlyViewed }) => {
  const [game, setGame] = useState({});
  const [loading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getGame = async () => {
      try {
        const result = data.filter((item) => item.id == id);
        if (result) {
          const images = result[0].images.map((image) => ({
            url: image,
            type: "image",
          }));
          const videos = result[0].videos.map((video) => ({
            url: video,
            type: "video",
          }));
          setCarouselData([...videos, ...images]);

          setGame(result);

          setIsLoading(false);
        }
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    getGame();
  }, []);

  useEffect(() => {
    if (!recentlyViewed.includes(game.title && game.id)) {
      const newRecentlyViewed = recentlyViewed.filter(
        (item) => item.id !== game.id
      );
      setRecentlyViewed([
        { title: game.title, id: game.id },
        ...newRecentlyViewed,
      ]);
    } else {
      return;
    }
  }, [!loading]);
  // useEffect(() => {
  //   let images, videos;
  //   if (game) {
  //     images = game[0].images.map((image) => ({
  //       url: image,
  //       type: "image",
  //     }));
  //   }

  //   if (videos) {
  //     videos = game[0].videos.map((video) => ({
  //       url: video,
  //       type: "video",
  //     }));
  //   }

  //   setCarouselData([...videos, ...images]);
  // }, [game]);
  const [carouselData, setCarouselData] = useState([]);
  const [mainDisplay, setMainDisplay] = useState(0);
  const [handlePosition, setHandlePosition] = useState(0);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [lastSlide, setLastSlide] = useState(false);
  const handleLeftClick = () => {
    const newIndex =
      (mainDisplay - 1 + carouselData.length) % carouselData.length;
    setMainDisplay(
      (prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length
    );
    setHandlePosition((newIndex / carouselData.length) * 90);
    carouselData.length - 1 === newIndex || carouselData.length - 2 === newIndex
      ? setLastSlide(true)
      : setLastSlide(false);
  };

  const handleRightClick = () => {
    const newIndex =
      (mainDisplay + 1 + carouselData.length) % carouselData.length;
    setMainDisplay((prevIndex) => (prevIndex + 1) % carouselData.length);
    setHandlePosition((newIndex / (carouselData.length - 1)) * 90);
    carouselData.length - 1 === newIndex || carouselData.length - 2 === newIndex
      ? setLastSlide(true)
      : setLastSlide(false);
  };

  const handleMiniClick = (index) => {
    setMainDisplay(index);
    setHandlePosition((index / (carouselData.length - 1)) * 90);
    carouselData.length - 1 === index || carouselData.length - 2 === index
      ? setLastSlide(true)
      : setLastSlide(false);
  };

  return (
    <>
      <Navbar />
      <StoreNavBar isLoggedIn={isLoggedIn} />
      {loading ? <div>Loading...</div> : <TitleBar game={game} />}
      {loading ? <div>Loading...</div> : <ProductCarousel game={game} />}
      <div className="w-[940px] mx-auto mb-[100px] h-[1500px]">
        <div className=" float-left w-[616px] ">
          <div
            style={{
              background:
                "linear-gradient( -60deg, rgba(226,244,255,0.3) 5%,rgba(84, 107, 115, 0.3) 95%)",
            }}
            className="relative rounded font-normal text-[13px] text-[#c6d4df] p-4 pb-[26px] mb-7"
          >
            <div className="float-right">
              <span
                className="w-5 h-5 inline-block bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3)",
                }}
              />
              <span
                className="w-5 h-5 inline-block bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(https://store.akamai.steamstatic.com/public/images/v6/icon_platform_linux.png)",
                }}
              />
            </div>
            <h1 className="text-[21px] text-white block font-normal">
              Chơi {game[0]?.title}
            </h1>
            <div className="absolute right-4 bottom-[-17px] left-4 overflow-x-auto  whitespace-nowrap  text-right">
              <div className="h-[36px]  bg-[#000000] py-[2px] pr-[2px] rounded-sm whitespace-nowrap flex float-end items-center">
                <div class="game_purchase_price price mx-3">Chơi miễn phí </div>
                <div class="relative inline-block ml-[2px] align-middle ">
                  <button
                    className=" text-white font-bold py-2 px-4 rounded "
                    style={{
                      background:
                        "linear-gradient(to right, #75b022 5%, #588a1b 95%)",
                    }}
                  >
                    Chơi trò chơi
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
            className="relative rounded font-normal text-[13px] text-[#c6d4df] p-4 pb-[26px] "
          >
            <div>
              <div className="float-right">
                <span
                  className="w-5 h-5 inline-block bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url(https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3)",
                  }}
                />
                <span
                  className="w-5 h-5 inline-block bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url(https://store.akamai.steamstatic.com/public/images/v6/icon_platform_linux.png)",
                  }}
                />
              </div>
              <h1 className="text-[21px] text-white block font-normal">
                Mua Gói nâng cấp trạng thái Prime
              </h1>
              <p>
                Người chơi {game[0]?.title} có cùng trạng thái Prime được xếp
                trận với nhau, và được nhận quyền lợi dành riêng cho Prime như
                đồ lưu niệm, vật phẩm rơi ngẫu nhiên, và hòm vũ khí. Sản phẩm
                này không đủ điều kiện để được hoàn tiền
              </p>
              <p className="py-2">
                Gói này trao trạng thái Prime cho tài khoản {game[0]?.title}.
              </p>
              <span className="py-2">
                Sản phẩm này không đủ điều kiện để được hoàn tiền
              </span>
              <div className="absolute right-4 bottom-[-17px] left-4 overflow-x-auto  whitespace-nowrap  text-right">
                <div className="h-[36px]  bg-[#000000] py-[2px] pr-[2px] rounded-sm whitespace-nowrap flex float-end items-center">
                  <div class="game_purchase_price price mx-3">
                    ${game[0]?.price}{" "}
                  </div>
                  <div class="relative inline-block ml-[2px] align-middle ">
                    <button
                      className=" text-white font-bold py-2 px-4 rounded "
                      style={{
                        background:
                          "linear-gradient(to right, #75b022 5%, #588a1b 95%)",
                      }}
                    >
                      Thêm vào giỏ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="h-[26px] py-[25px] px-[16px] text-right text-[12px] text-[#acb5be]"
            style={{
              background:
                "linear-gradient(-60deg, rgba(226, 244, 255, 0.2) 0%, rgba(97, 100, 101, 0.2) 100%)",
            }}
          >
            <span>
              Sản phẩm này không đủ điều kiện để được hoàn tiền. Tìm hiểu thêm
            </span>
          </div>

          <div
            className="mt-8 overflow-hidden text-[14px] game_description_column text-[#acb2b8]"
            style={{ fontFamily: "Motiva Sans, sans-serif" }}
          >
            <h2 className="text-[14px] uppercase text-[#fff] pt-[2px] font-normal">
              Về trò chơi này
            </h2>
            <p className="text-[#acb2b8] my-2">
              Trong hai thập kỷ qua, Counter-Strike đã mang lại trải nghiệm thi
              đấu cao cấp, được nhào nặn bởi hàng triệu người chơi trên toàn
              cầu. Và giờ chương tiếp theo của câu chuyện CS chuẩn bị khởi màn.
              Đây là Counter-Strike 2
            </p>
            <p className="text-[#acb2b8] my-4">
              Là phiên bản nâng cấp miễn phí của CS:GO, Counter-Strike 2 là bước
              nhảy vọt lớn nhất về công nghệ trong lịch sử Counter-Strike. Xây
              dựng trên engine Source 2, Counter-Strike 2 được hiện đại hóa với
              hệ thống dựng hình dựa trên quy tắc vật lý ở thế giới thực
              (physically-based rendering), hệ thống hạ tầng mạng tiên tiến, và
              công cụ workshop dành cho cộng đồng đã cải tiến.
            </p>
            <p className="text-[#acb2b8] my-4">
              Ngoài lối chơi kinh điển tập trung vào nhiệm vụ mà Counter-Strike
              đã khai phá từ năm 1999, Counter-Strike 2 bao gồm các tính năng
              sau:
            </p>

            <ul class="list-disc list-inside">
              <li>Hệ số CS hoàn toàn mới kèm theo chế độ Premier cập nhật</li>
              <li>Bảng xếp hạng toàn cầu và khu vực</li>
              <li>Bản đồ màn chơi được nâng cấp và đại tu hoàn toàn</li>
              <li>Lựu đạn khói được thay đổi linh hoạt, thay đổi cuộc chơi</li>
              <li>Lối chơi hoạt động độc lập với hệ thống tick-rate</li>
              <li>Âm thanh và đồ họa được thiết kế lại</li>
              <li>Tất cả vật phẩm từ CS:GO đều được mang tới CS2</li>
            </ul>
          </div>

          <div
            className="mt-8 overflow-hidden text-[14px] game_description_column text-[#acb2b8]"
            style={{ fontFamily: "Motiva Sans, sans-serif" }}
          >
            <h2 className="text-[14px] uppercase text-[#fff] pt-[2px] font-normal">
              MÔ TẢ NỘI DUNG NGƯỜI LỚN
            </h2>
            <p className="text-[#acb2b8] my-2">
              Nội dung theo lời tả của nhà phát triển:
            </p>
            <p className="text-[#acb2b8] my-2 italic">
              Có nhiều hình ảnh máu me và bạo lực.
            </p>
          </div>

          <div
            className="mt-8 overflow-hidden text-[14px] game_description_column text-[#acb2b8]"
            style={{ fontFamily: "Motiva Sans, sans-serif" }}
          >
            <h2 className="text-[14px] uppercase text-[#fff] pt-[2px] font-normal">
              YÊU CẦU HỆ THỐNG
            </h2>
            <p className="text-[#acb2b8] mt-2">TỐI THIỂU: </p>
            <p className="text-[#acb2b8]">HĐH: Windows® 10</p>
            <p className="text-[#acb2b8]">
              Bộ xử lý: Vi xử lý với 4 luồng phần cứng - Intel® Core™ i5 750 trở
              lên
            </p>
            <p className="text-[#acb2b8]">Bộ nhớ: 8 GB RAM</p>
            <p className="text-[#acb2b8]">
              Đồ họa: Card màn hình phải từ 1 GB trở lên và nên tương thích với
              DirectX 11 với hỗ trợ Shader Model 5.0
            </p>
            <p className="text-[#acb2b8]">DirectX: Phiên bản 11</p>
            <p className="text-[#acb2b8]">Lưu trữ: 85 GB chỗ trống khả dụng</p>
          </div>

          <div
            className="mt-8 overflow-hidden text-[14px] game_description_column text-[#acb2b8]"
            style={{ fontFamily: "Motiva Sans, sans-serif" }}
          >
            <div>
              <div class="">
                <a
                  href="https://store.steampowered.com/recommended/morelike/app/730/?snr=1_5_9__300"
                  class="float-right text-[#67c1f5] rounded-[1px] py-[2px] px-[4px] text-[11px]"
                >
                  Xem tất cả
                </a>
              </div>
              <h2 className="text-[14px] uppercase text-[#fff] pt-[2px] font-normal">
                SẢN PHẨM TƯƠNG TỰ
              </h2>
            </div>
            <div
              id="highlight-strip"
              className="mt-[4px] relative h-[160px] mb-1 overflow-x-hidden overflow-y-hidden z-40 w-auto"
            >
              <div
                className={`w-[1940px] left-0 absolute overflow-clip  ${
                  lastSlide ? "-translate-x-32" : "translate-x-0"
                } duration-300 transition-all`}
              >
                {carouselData.map((item, index) => (
                  <div
                    className={`float-left h-[155px] w-[201px] cursor-pointer text-center m-[2px] relative p-3 ${
                      index === mainDisplay &&
                      "shadow-lg shadow-[#67c1f5] border-[1px] border=[#67c1f5]"
                    }`}
                    key={item + index}
                    style={{
                      background: " rgba( 0, 0, 0, 0.2 )",
                    }}
                    onClick={() => handleMiniClick(index)}
                  >
                    {item.type === "image" ? (
                      <>
                        <img src={item.url} />
                        <div>
                          <h4 className="text-[13px] text-[#8f98a0] w-[171px] text-ellipsis overflow-hidden whitespace-nowrap mb-0	">
                            Tom Clancy's Rainbow Six® Siege
                          </h4>
                          <div className="">
                            <span className="items-center">Chơi miễn phí</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <img
                          className="brightness-75"
                          src={game[0]?.game_image}
                        />
                        <div
                          id="marker"
                          className="absolute top-12 left-[80px] w-[32px] h-[32px] bg-[url(https://store.cloudflare.steamstatic.com/public/images/v5/ico_game_highlight_video.png)]"
                        ></div>
                        <div>
                          <h4 className="text-[13px] text-[#8f98a0] w-[171px] text-ellipsis overflow-hidden whitespace-nowrap mb-0	">
                            Tom Clancy's Rainbow Six® Siege
                          </h4>
                          <div className="">
                            <span className="items-center">Chơi miễn phí</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div id="slider" className="relative h-[25px]">
              <div
                id="slider-left"
                className="absolute w-[38px] top-0 bottom-0 rounded-[3px] cursor-pointer bg-[#233c5166]"
                onClick={() => handleLeftClick()}
              >
                <span
                  className="inline-block w-[9px] h-[7px] ml-[13px] mt-[5px]"
                  style={{
                    backgroundImage:
                      "url(https://store.cloudflare.steamstatic.com/public/images//v6/icon_cluster_controls.png)",
                    backgroundPosition: "-18px 0px",
                    backgroundRepeat: "no-repeat",
                  }}
                ></span>
              </div>
              <div
                id="slider-bar"
                className="absolute left-[39px] right-[39px] top-0 bottom-0 bg-[#233c5166] rounded-[3px]"
              >
                <div
                  id="handle"
                  style={{
                    background:
                      "linear-gradient(135deg, #3d6c8d 0%,#2e5470 100%)",
                    left: `${handlePosition}%`,
                  }}
                  className={`relative w-[60px] cursor-pointer h-[25px] z-50 rounded-[3px]`}
                ></div>
              </div>
              <div
                id="slider-right"
                className="absolute w-[38px] top-0 bottom-0 rounded-[3px] cursor-pointer bg-[#233c5166] right-0 "
                onClick={() => {
                  handleRightClick();
                }}
              >
                <span
                  className="inline-block w-[9px] h-[7px] ml-[13px] mt-[5px] transform rotate-180"
                  style={{
                    backgroundImage:
                      "url(https://store.cloudflare.steamstatic.com/public/images//v6/icon_cluster_controls.png)",
                    backgroundPosition: "-18px 0px",
                    backgroundRepeat: "no-repeat",
                  }}
                ></span>
              </div>
            </div>
          </div>

          <div
            className="mt-8 overflow-hidden text-[14px] game_description_column text-[#acb2b8]"
            style={{ fontFamily: "Motiva Sans, sans-serif" }}
          >
            <h2 className="text-[14px] uppercase text-[#fff] pt-[2px] font-normal">
              THẨM ĐỊNH VIÊN NÓI GÌ
            </h2>
            <div className="p-5" style={{ background: "rgba( 0, 0, 0, 0.2 )" }}>
              <p className="text-[#acb2b8] mt-2">
                13,377 thẩm định viên đã đánh giá sản phẩm này. Nhấp vào đây để
                xem.
              </p>
            </div>
          </div>

          {/* <CategoryCarousel /> */}
        </div>
        {/* right */}
        <div className="float-right w-[308px] ml-[14px]  overflow-hidden">
          <div
            class="mb-0 text-[#fff] text-base py-3 px-4"
            style={{ background: "rgba(0, 0, 0, 0.2" }}
          >
            Trò chơi này có phù hợp với bạn?
          </div>
          <div
            className="text-[#acb2b8] text-sm leading-5 p-4 mb-2 mt-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%)",
            }}
          >
            <p>
              Đăng nhập để thấy lí do bạn có thể thích hoặc không thích sản phẩm
              này dựa trên các trò chơi, bạn bè và thẩm định viên đang theo dõi.
            </p>
            <div className="flex  items-center justify-between mt-2">
              <Link
                class="mb-1 rounded border-none p-2 inline-block cursor-pointer text-[#67c1f5]"
                style={{ background: "rgba( 103, 193, 245, 0.2 )" }}
                to="/login"
              >
                <span>Đăng nhập</span>
              </Link>
              hoặc
              <br />
              <Link
                class="mb-1 rounded border-none p-2 inline-block cursor-pointer text-[#67c1f5]"
                style={{ background: "rgba( 103, 193, 245, 0.2 )" }}
                to="/"
              >
                <span>Mở qua Steam</span>
              </Link>
            </div>
          </div>

          <div
            className="p-4 mb-2 mt-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%)",
            }}
          >
            <Link
              to="/"
              className="flex items-center mb-[2px]"
              style={{ background: "rgba(0, 0, 0, 0.2" }}
            >
              <div class="my-2 mx-[6px] flex">
                <img
                  className="w-auto h-4"
                  src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_multiPlayer.png"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                />
              </div>
              <div
                class="text-[#66c0f4] flex justify-between py-[6px] px-2 h-full w-full rounded "
                style={{
                  background: "rgba( 103, 193, 245, 0.1 )",
                }}
              >
                Nhiều người chơi xuyên hệ máy
              </div>
            </Link>
            <Link
              to="/"
              className="flex items-center mb-[2px]"
              style={{ background: "rgba(0, 0, 0, 0.2" }}
            >
              <div class="my-2 mx-[6px] flex">
                <img
                  className="w-auto h-4"
                  src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_multiPlayer.png"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                />
              </div>
              <div
                class="text-[#66c0f4] flex justify-between py-[6px] px-2 h-full w-full rounded "
                style={{
                  background: "rgba( 103, 193, 245, 0.1 )",
                }}
              >
                Nhiều người chơi xuyên hệ máy
              </div>
            </Link>
            <Link
              to="/"
              className="flex items-center mb-[2px]"
              style={{ background: "rgba(0, 0, 0, 0.2" }}
            >
              <div class="my-2 mx-[6px] flex">
                <img
                  className="w-auto h-4"
                  src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_multiPlayer.png"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                />
              </div>
              <div
                class="text-[#66c0f4] flex justify-between py-[6px] px-2 h-full w-full rounded "
                style={{
                  background: "rgba( 103, 193, 245, 0.1 )",
                }}
              >
                Nhiều người chơi xuyên hệ máy
              </div>
            </Link>
            <Link
              to="/"
              className="flex items-center mb-[2px]"
              style={{ background: "rgba(0, 0, 0, 0.2" }}
            >
              <div class="my-2 mx-[6px] flex">
                <img
                  className="w-auto h-4"
                  src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_multiPlayer.png"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                />
              </div>
              <div
                class="text-[#66c0f4] flex justify-between py-[6px] px-2 h-full w-full rounded "
                style={{
                  background: "rgba( 103, 193, 245, 0.1 )",
                }}
              >
                Nhiều người chơi xuyên hệ máy
              </div>
            </Link>
            <Link
              to="/"
              className="flex items-center mb-[2px]"
              style={{ background: "rgba(0, 0, 0, 0.2" }}
            >
              <div class="my-2 mx-[6px] flex">
                <img
                  className="w-auto h-4"
                  src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_multiPlayer.png"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                />
              </div>
              <div
                class="text-[#66c0f4] flex justify-between py-[6px] px-2 h-full w-full rounded "
                style={{
                  background: "rgba( 103, 193, 245, 0.1 )",
                }}
              >
                Nhiều người chơi xuyên hệ máy
              </div>
            </Link>
            <Link
              to="/"
              className="flex items-center mb-[2px]"
              style={{ background: "rgba(0, 0, 0, 0.2" }}
            >
              <div class="my-2 mx-[6px] flex">
                <img
                  className="w-auto h-4"
                  src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_multiPlayer.png"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                />
              </div>
              <div
                class="text-[#66c0f4] flex justify-between py-[6px] px-2 h-full w-full rounded "
                style={{
                  background: "rgba( 103, 193, 245, 0.1 )",
                }}
              >
                Nhiều người chơi xuyên hệ máy
              </div>
            </Link>
            <Link
              to="/"
              className="flex items-center mb-[2px]"
              style={{ background: "rgba(0, 0, 0, 0.2" }}
            >
              <div class="my-2 mx-[6px] flex">
                <img
                  className="w-auto h-4"
                  src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_multiPlayer.png"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                />
              </div>
              <div
                class="text-[#66c0f4] flex justify-between py-[6px] px-2 h-full w-full rounded "
                style={{
                  background: "rgba( 103, 193, 245, 0.1 )",
                }}
              >
                Nhiều người chơi xuyên hệ máy
              </div>
            </Link>
            <Link
              to="/"
              className="flex items-center mb-[2px]"
              style={{ background: "rgba(0, 0, 0, 0.2" }}
            >
              <div class="my-2 mx-[6px] flex">
                <img
                  className="w-auto h-4"
                  src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_multiPlayer.png"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                />
              </div>
              <div
                class="text-[#66c0f4] flex justify-between py-[6px] px-2 h-full w-full rounded "
                style={{
                  background: "rgba( 103, 193, 245, 0.1 )",
                }}
              >
                Nhiều người chơi xuyên hệ máy
              </div>
            </Link>
            <Link
              to="/"
              className="flex items-center mb-[2px]"
              style={{ background: "rgba(0, 0, 0, 0.2" }}
            >
              <div class="my-2 mx-[6px] flex">
                <img
                  className="w-auto h-4"
                  src="https://store.akamai.steamstatic.com/public/images/v6/ico/ico_multiPlayer.png"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                />
              </div>
              <div
                class="text-[#66c0f4] flex justify-between py-[6px] px-2 h-full w-full rounded "
                style={{
                  background: "rgba( 103, 193, 245, 0.1 )",
                }}
              >
                Nhiều người chơi xuyên hệ máy
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Comment />

      {/* {loading ? <div>Loading...</div> : <Purchase game={game} />} */}
      <Footer />
    </>
  );
};

export default ProductPage;
