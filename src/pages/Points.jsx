import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import LoginBar from "../Components/LoginBar/LoginBar";
import StoreNavBar from "../Components/StoreNavBar/StoreNavBar";
import Navbar from "../Components/Navbar/Navbar";
import data from "../mockData/data.json";
import { Link } from "react-router-dom";
function Points() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeCarousel, setActiveCarousel] = useState(1);
  const [featuredGames, setFeaturedGames] = useState([]);
  const [transition, setTransition] = useState(false);

  const chunk = (arr, size) => {
    const newArr = [];
    let id = 1;
    for (let i = 0; i < arr.length; i += size) {
      const chunk = {
        id: id,
        items: arr.slice(i, i + size),
      };
      newArr.push(chunk);
      id++;
    }
    return newArr;
  };

  useEffect(() => {
    try {
      const featuredGames = chunk(data, 5);
      setFeaturedGames(featuredGames);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleAddCarousel = () => {
    setTransition(true);
    setTimeout(() => {
      setActiveCarousel((prev) => (prev % 4) + 1);
      setTimeout(() => {
        setTransition(false);
      }, 10);
    }, 300);
  };

  const handleMinusCarousel = () => {
    setTransition(true);
    setTimeout(() => {
      setActiveCarousel((prev) => ((prev - 2 + 4) % 4) + 1);
      setTimeout(() => {
        setTransition(false);
      }, 10);
    }, 300);
  };

  const handleThumbClick = (id) => {
    setTransition(true);
    setTimeout(() => {
      setActiveCarousel(id);
      setTimeout(() => {
        setTransition(false);
      }, 10);
    }, 300);
  };
  return (
    <div className="w-full">
      <Navbar />
      <StoreNavBar isLoggedIn={isLoggedIn} />
      <div className=" w-[972px] relative mx-auto">
        <div className="border-t-[1px] border-black">
          <div className="w-[940px] mx-auto mb-[100px] h-[1500px]">
            <div
              className="mt-3 overflow-hidden text-[14px] game_description_column text-[#acb2b8]"
              style={{ fontFamily: "Motiva Sans, sans-serif" }}
            >
              <h1 className="text-[20px] uppercase text-[#fff] pt-[2px] font-semibold">
                VẬT PHẨM PHỔ BIẾN
              </h1>
              <h1 className="text-[15px] text-[#ffff]">
                Một số vật phẩm hiện được ưa chuộng trong cửa hàng điểm.
              </h1>
              <div className=" mt-[20px]">
                <div className="">
                  <div
                    id="special offers"
                    className="mb-[20px] relative z-auto"
                  >
                    <div id="carousel-container" className="relative">
                      <div
                        id="carousel-items"
                        className="h-[390px] relative clear-both"
                      >
                        {featuredGames.map((carousel) => {
                          if (carousel.id === activeCarousel) {
                            return (
                              <div
                                id="special-offers-group"
                                className={`flex ${transition && "opacity-0"}
                   transition-all transform-gpu duration-1000 ease-in-out`}
                                key={carousel.id}
                              >
                                {carousel.items.map((item, index) => {
                                  const salePrice =
                                    item.price -
                                    item.price * (item.sale_deal / 100);
                                  const formattedDate = new Date(
                                    item.deal_ends
                                  ).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                  });
                                  const formattedTime = new Date(
                                    item.deal_ends
                                  ).toLocaleTimeString("en-US", {
                                    hour: "numeric",
                                    minute: "numeric",
                                  });
                                  const formattedDateTime = `${formattedDate} @ ${formattedTime}.`;

                                  return (
                                    <div
                                      style={{
                                        backgroundImage:
                                          "url(https://store.cloudflare.steamstatic.com/public/images/v6/spotlight_background.jpg?v=1)",
                                      }}
                                      className="mr-[11px] h-[390px] relative "
                                      key={item + index}
                                    >
                                      <div className="pl-0 pt-0 w-[306px] overflow-hidden">
                                        <Link to={`/product/${item.id}`}>
                                          <img
                                            className="overflow-clip h-[271px] w-full"
                                            src={item.special_img}
                                            alt=""
                                          />
                                        </Link>
                                      </div>
                                      <div
                                        id="spotlight-content"
                                        className="m-0 min-h-[23px] pt-2 pb-4 px-4 text-[#9099a1] text-[12px] absolute bottom-0 w-[306px]"
                                        style={{
                                          backgroundImage:
                                            "url( https://store.cloudflare.steamstatic.com/public/images/v6/home/background_spotlight.jpg )",
                                          backgroundSize: "cover",
                                          backgroundPosition: "center",
                                          backgroundRepeat: "no-repeat",
                                        }}
                                      >
                                        <h2 className="uppercase text-[14px] text-white mb-[10px] pt-[2px] tracking-wide block">
                                          Weekend Deal
                                        </h2>
                                        <div
                                          id="offer"
                                          className="font-light text-[#acdbf5]"
                                        >
                                          Offer ends {formattedDateTime}
                                        </div>
                                        <div
                                          id="sale-amount"
                                          className="mt-[10px]"
                                        >
                                          <div
                                            id="discount-block"
                                            className="relative flex"
                                          >
                                            <div className="leading-[34px] px-[5px] text-[25px] font-bold text-[#BEEE11] bg-[#4c6b22] inline-block">
                                              -{item.sale_deal}%
                                            </div>
                                            <div
                                              id="discount-prices"
                                              className="leading-[13px] px-2 flex flex-col items-end content-center bg-[#344654]"
                                            >
                                              <div
                                                id="original_price"
                                                className="relative  w-fit text-[#738895] text-[11px] leading-3"
                                              >
                                                <div
                                                  className="left-0 right-0 absolute top-[43%] border-b-[#738895] border-b-[1px]"
                                                  style={{
                                                    // transform: "skewY(-8deg)",
                                                    boxShadow: "0 0 2px black",
                                                  }}
                                                >
                                                  {" "}
                                                </div>
                                                ${item.price}
                                              </div>
                                              <div className="text-[#BEEE11] leading-4 text-[15px]">
                                                ${salePrice.toFixed(2)}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            );
                          }
                        })}
                        <div
                          id="arrow-left"
                          className="left-[-46px] absolute top-[38%] w-auto h-auto py-9 px-[11px] cursor-pointer"
                          style={{
                            background:
                              "linear-gradient( to right, rgba( 0, 0, 0, 0.3) 5%,rgba( 0, 0, 0, 0) 95%)",
                            backgroundSize: "cover",
                          }}
                          onClick={handleMinusCarousel}
                        >
                          <div
                            style={{
                              backgroundImage:
                                "url(https://store.cloudflare.steamstatic.com/public/images/v6/arrows.png)",
                            }}
                            className="w-[23px] h-9 transform rotate-180"
                          ></div>
                        </div>
                        <div
                          id="arrow-right"
                          className="right-[-46px] absolute top-[38%] w-auto h-auto py-9 px-[11px] cursor-pointer"
                          style={{
                            background:
                              "linear-gradient( to left, rgba( 0, 0, 0, 0.3) 5%,rgba( 0, 0, 0, 0) 95%)",
                            backgroundSize: "cover",
                          }}
                          onClick={handleAddCarousel}
                        >
                          <div
                            style={{
                              backgroundImage:
                                "url(https://store.cloudflare.steamstatic.com/public/images/v6/arrows.png)",
                            }}
                            className="w-[23px] h-9"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="carousel-thumbs"
                    className="text-center min-h-[37px] pb-1"
                  >
                    <div
                      className="inline-block w-[15px] h-[9px] rounded-sm  transition-colors duration-300 cursor-pointer my-3 mx-[2px]"
                      key={"thumb" + 1}
                      onClick={() => handleThumbClick(1)}
                      style={{
                        backgroundColor:
                          1 === activeCarousel
                            ? "hsla(202,60%,100%,0.4)"
                            : "hsla(202,60%,100%,0.2)",
                      }}
                    ></div>
                    <div
                      className="inline-block w-[15px] h-[9px] rounded-sm  transition-colors duration-300 cursor-pointer my-3 mx-[2px]"
                      key={"thumb" + 2}
                      onClick={() => handleThumbClick(2)}
                      style={{
                        backgroundColor:
                          2 === activeCarousel
                            ? "hsla(202,60%,100%,0.4)"
                            : "hsla(202,60%,100%,0.2)",
                      }}
                    ></div>
                    <div
                      className="inline-block w-[15px] h-[9px] rounded-sm  transition-colors duration-300 cursor-pointer my-3 mx-[2px]"
                      key={"thumb" + 3}
                      onClick={() => handleThumbClick(3)}
                      style={{
                        backgroundColor:
                          3 === activeCarousel
                            ? "hsla(202,60%,100%,0.4)"
                            : "hsla(202,60%,100%,0.2)",
                      }}
                    ></div>
                    <div
                      className="inline-block w-[15px] h-[9px] rounded-sm  transition-colors duration-300 cursor-pointer my-3 mx-[2px]"
                      key={"thumb" + 4}
                      onClick={() => handleThumbClick(4)}
                      style={{
                        backgroundColor:
                          4 === activeCarousel
                            ? "hsla(202,60%,100%,0.4)"
                            : "hsla(202,60%,100%,0.2)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              <h2 className="text-[20px] uppercase text-[#fff] pt-[2px] font-semibold"></h2>
              <h1 className="text-[20px] uppercase text-[#fff] pt-[2px] font-semibold mt-4">
                HÌNH DÁN ĐỘNG PHỔ BIẾN
              </h1>
              <h1 className="text-[15px] text-[#ffff]">
                Một số vật phẩm hiện được ưa chuộng trong cửa hàng điểm.
              </h1>
              <div className=" mt-[20px]">
                <div className="">
                  <div
                    id="special offers"
                    className="mb-[20px] relative z-auto"
                  >
                    <div id="carousel-container" className="relative">
                      <div
                        id="carousel-items"
                        className="h-[390px] relative clear-both"
                      >
                        {featuredGames.map((carousel) => {
                          if (carousel.id === activeCarousel) {
                            return (
                              <div
                                id="special-offers-group"
                                className={`flex ${transition && "opacity-0"}
                   transition-all transform-gpu duration-1000 ease-in-out`}
                                key={carousel.id}
                              >
                                {carousel.items.map((item, index) => {
                                  const salePrice =
                                    item.price -
                                    item.price * (item.sale_deal / 100);
                                  const formattedDate = new Date(
                                    item.deal_ends
                                  ).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                  });
                                  const formattedTime = new Date(
                                    item.deal_ends
                                  ).toLocaleTimeString("en-US", {
                                    hour: "numeric",
                                    minute: "numeric",
                                  });
                                  const formattedDateTime = `${formattedDate} @ ${formattedTime}.`;

                                  return (
                                    <div
                                      style={{
                                        backgroundImage:
                                          "url(https://store.cloudflare.steamstatic.com/public/images/v6/spotlight_background.jpg?v=1)",
                                      }}
                                      className="mr-[11px] h-[390px] relative "
                                      key={item + index}
                                    >
                                      <div className="pl-0 pt-0 w-[306px] overflow-hidden">
                                        <Link to={`/product/${item.id}`}>
                                          <img
                                            className="overflow-clip h-[271px] w-full"
                                            src={item.special_img}
                                            alt=""
                                          />
                                        </Link>
                                      </div>
                                      <div
                                        id="spotlight-content"
                                        className="m-0 min-h-[23px] pt-2 pb-4 px-4 text-[#9099a1] text-[12px] absolute bottom-0 w-[306px]"
                                        style={{
                                          backgroundImage:
                                            "url( https://store.cloudflare.steamstatic.com/public/images/v6/home/background_spotlight.jpg )",
                                          backgroundSize: "cover",
                                          backgroundPosition: "center",
                                          backgroundRepeat: "no-repeat",
                                        }}
                                      >
                                        <h2 className="uppercase text-[14px] text-white mb-[10px] pt-[2px] tracking-wide block">
                                          Weekend Deal
                                        </h2>
                                        <div
                                          id="offer"
                                          className="font-light text-[#acdbf5]"
                                        >
                                          Offer ends {formattedDateTime}
                                        </div>
                                        <div
                                          id="sale-amount"
                                          className="mt-[10px]"
                                        >
                                          <div
                                            id="discount-block"
                                            className="relative flex"
                                          >
                                            <div className="leading-[34px] px-[5px] text-[25px] font-bold text-[#BEEE11] bg-[#4c6b22] inline-block">
                                              -{item.sale_deal}%
                                            </div>
                                            <div
                                              id="discount-prices"
                                              className="leading-[13px] px-2 flex flex-col items-end content-center bg-[#344654]"
                                            >
                                              <div
                                                id="original_price"
                                                className="relative  w-fit text-[#738895] text-[11px] leading-3"
                                              >
                                                <div
                                                  className="left-0 right-0 absolute top-[43%] border-b-[#738895] border-b-[1px]"
                                                  style={{
                                                    // transform: "skewY(-8deg)",
                                                    boxShadow: "0 0 2px black",
                                                  }}
                                                >
                                                  {" "}
                                                </div>
                                                ${item.price}
                                              </div>
                                              <div className="text-[#BEEE11] leading-4 text-[15px]">
                                                ${salePrice.toFixed(2)}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            );
                          }
                        })}
                        <div
                          id="arrow-left"
                          className="left-[-46px] absolute top-[38%] w-auto h-auto py-9 px-[11px] cursor-pointer"
                          style={{
                            background:
                              "linear-gradient( to right, rgba( 0, 0, 0, 0.3) 5%,rgba( 0, 0, 0, 0) 95%)",
                            backgroundSize: "cover",
                          }}
                          onClick={handleMinusCarousel}
                        >
                          <div
                            style={{
                              backgroundImage:
                                "url(https://store.cloudflare.steamstatic.com/public/images/v6/arrows.png)",
                            }}
                            className="w-[23px] h-9 transform rotate-180"
                          ></div>
                        </div>
                        <div
                          id="arrow-right"
                          className="right-[-46px] absolute top-[38%] w-auto h-auto py-9 px-[11px] cursor-pointer"
                          style={{
                            background:
                              "linear-gradient( to left, rgba( 0, 0, 0, 0.3) 5%,rgba( 0, 0, 0, 0) 95%)",
                            backgroundSize: "cover",
                          }}
                          onClick={handleAddCarousel}
                        >
                          <div
                            style={{
                              backgroundImage:
                                "url(https://store.cloudflare.steamstatic.com/public/images/v6/arrows.png)",
                            }}
                            className="w-[23px] h-9"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="carousel-thumbs"
                    className="text-center min-h-[37px] pb-1"
                  >
                    <div
                      className="inline-block w-[15px] h-[9px] rounded-sm  transition-colors duration-300 cursor-pointer my-3 mx-[2px]"
                      key={"thumb" + 1}
                      onClick={() => handleThumbClick(1)}
                      style={{
                        backgroundColor:
                          1 === activeCarousel
                            ? "hsla(202,60%,100%,0.4)"
                            : "hsla(202,60%,100%,0.2)",
                      }}
                    ></div>
                    <div
                      className="inline-block w-[15px] h-[9px] rounded-sm  transition-colors duration-300 cursor-pointer my-3 mx-[2px]"
                      key={"thumb" + 2}
                      onClick={() => handleThumbClick(2)}
                      style={{
                        backgroundColor:
                          2 === activeCarousel
                            ? "hsla(202,60%,100%,0.4)"
                            : "hsla(202,60%,100%,0.2)",
                      }}
                    ></div>
                    <div
                      className="inline-block w-[15px] h-[9px] rounded-sm  transition-colors duration-300 cursor-pointer my-3 mx-[2px]"
                      key={"thumb" + 3}
                      onClick={() => handleThumbClick(3)}
                      style={{
                        backgroundColor:
                          3 === activeCarousel
                            ? "hsla(202,60%,100%,0.4)"
                            : "hsla(202,60%,100%,0.2)",
                      }}
                    ></div>
                    <div
                      className="inline-block w-[15px] h-[9px] rounded-sm  transition-colors duration-300 cursor-pointer my-3 mx-[2px]"
                      key={"thumb" + 4}
                      onClick={() => handleThumbClick(4)}
                      style={{
                        backgroundColor:
                          4 === activeCarousel
                            ? "hsla(202,60%,100%,0.4)"
                            : "hsla(202,60%,100%,0.2)",
                      }}
                    ></div>
                  </div>
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

export default Points;
