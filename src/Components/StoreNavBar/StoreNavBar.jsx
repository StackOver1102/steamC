import { Link } from "react-router-dom";
import "./index.css";
const StoreNavBar = ({ isLoggedIn = true }) => {
  return (
    <div className="relative w-[940px] mx-auto">
      <div id="store-nav-bar" className="block">
        <div
          id="store-header"
          className="bg-transparent px-0 h-[66px] mb-[16px] min-w-[940px]"
        >
          <div id="header-content" className="relative w-[940px] mx-auto z-40">
            <div id="store-nav-area" className="h-[35px] my-8">
              <div
                id="store-nav-bg"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(62, 103, 150, 0.919) 11.38%, rgba(58, 120, 177, 0.8) 25.23%, rgb(15, 33, 110) 100%)",
                }}
                className="h-[35px] my-8"
              >
                <div
                  id="wishlist-top-button"
                  className="absolute top-[-25px] right-0"
                >
                  <div className="flex flex-row">
                    {isLoggedIn && (
                      <div
                        id="wishlist-button"
                        className="w-[96px] h-[20px] bg-[#6e8902] px-[25px] pt-[3px]  text-[#a1cd07] text-[11px] uppercase text-center hover:bg-[#88af04] hover:text-[black] cursor-pointer"
                      >
                        Cart(0)
                      </div>
                    )}
                  </div>
                </div>
                <div id="store-nav" className="flex h-[35px]">
                  <ul
                    className="flex p-[1px] gap-[20px] cursor-pointer whitespace-nowrap  text-[13px] leading-8 font-bold pr-[10px] pl-[15px]"
                    style={{ textShadow: "0px 2px 3px rgba(0, 0, 0, 0.3)" }}
                  >
                    <li className="relative group  ">
                      <a className="text-[#e5e5e5] text-[13px]">Your Store</a>
                      <ul className="color absolute hidden bg-white border rounded-md shadow-lg z-10 top-full left-0 w-max p-2 space-y-2 group-hover:block ">
                        <li>
                          <a className="text-[#D8D8D8] text-[13px]">
                            New & Noteworthy
                          </a>
                        </li>
                        <li>
                          <a className="text-[#D8D8D8] text-[13px]">
                            Community Recommendations
                          </a>
                        </li>
                        <li>
                          <a className="text-[#D8D8D8] text-[13px]">
                            Recently Viewed
                          </a>
                        </li>
                        <li>
                          <a className="text-[#D8D8D8] text-[13px]">
                            Steam Curators
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="noteworthy relative group">
                      <a className="text-[#e5e5e5] text-[13px]">
                        New & Noteworthy
                      </a>
                      <ul className="color absolute hidden bg-white border rounded-md shadow-lg z-10 top-full left-0 w-max p-2 space-y-2 group-hover:block">
                        <li className="head">
                          <a className="text-[#D8D8D8] text-[13px]">Popular</a>
                        </li>
                        <li>
                          <a className="text-[#D8D8D8] text-[13px]">
                            Top Sellers
                          </a>
                        </li>
                        <li>
                          <a className="text-[#D8D8D8] text-[13px]">
                            Most Played
                          </a>
                        </li>
                        <div className="endLine-cont">
                          <div className="endLine"></div>
                        </div>
                        <li>
                          <a className="text-[#D8D8D8] text-[13px]">
                            New Releases
                          </a>
                        </li>
                        <li className="head">
                          <a className="text-[#D8D8D8] text-[13px]">
                            New & Updates
                          </a>
                        </li>
                        <li>
                          <a className="text-[#D8D8D8] text-[13px]">
                            Recently Updated
                          </a>
                        </li>
                        <div className="endLine-cont">
                          <div className="endLine"></div>
                        </div>
                        <li className="head">
                          <a className="text-[#D8D8D8] text-[13px]">
                            PROMOS & EVENTS
                          </a>
                        </li>
                        <li>
                          <a className="text-[#D8D8D8] text-[13px]">
                            Special Offers
                          </a>
                        </li>
                        <li>
                          <a className="text-[#D8D8D8] text-[13px]">
                            Sale Events
                          </a>
                        </li>
                        <div className="endLine-cont">
                          <div className="endLine"></div>
                        </div>
                        <li>
                          <a className="text-[#D8D8D8] text-[13px]">
                            Steam Replay 2022
                          </a>
                        </li>
                        <li>
                          <a className="text-[#D8D8D8] text-[13px]">
                            Steam Next Fest
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="relative group">
                      <div>
                        <a className="text-[#e5e5e5] text-[13px]">Categories</a>
                        <ul
                          className=" color absolute hidden bg-white border rounded-md shadow-lg z-10 top-full left-0 w-max p-2  group-hover:flex gap-[55px] "
                          style={{ left: "-240px", maxWidth: "1051.440px" }}
                        >
                          <div className="border-r-2 border-gray-200  pr-[15px]">
                            <li className="head">
                              <a>SPECIAL SECTIONS</a>
                            </li>
                            <li>
                              <a className="text-[#D8D8D8] text-[13px]">
                                Free to play
                              </a>
                            </li>
                            <li>
                              <a className="text-[#D8D8D8] text-[13px]">
                                Demos
                              </a>
                            </li>
                            <li>
                              <a className="text-[#D8D8D8] text-[13px]">
                                Early access
                              </a>
                            </li>
                          </div>
                          <div>
                            <li className="head">
                              <a>GENRES</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <Link to="/category/1">Action</Link>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Arcade & Rhythm</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Fighting & Martial Arts</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>First-Person Shooter</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Hack & Slash</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Platformer & Runner</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Third-Person Shooter</a>
                            </li>
                            <li
                              style={{ marginBottom: "8px" }}
                              className="text-[#D8D8D8] text-[13px]"
                            >
                              <a className="text-[#D8D8D8] text-[13px]">
                                Shmup
                              </a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Adventure</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Adventure RPG</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Casual</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Hidden Object</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Metroidvania</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Puzzle</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Story-Rich</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Visual Novel</a>
                            </li>
                          </div>
                          <div>
                            <li
                              className="text-[#D8D8D8] text-[13px]"
                              style={{ marginTop: "38px" }}
                            >
                              <a>Role-Playing</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Action RPG</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Adventure RPG</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>JRPG</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Party-Based</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Rogue-Like</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Strategy RPG</a>
                            </li>
                            <li
                              style={{ marginBottom: "8px" }}
                              className="text-[#D8D8D8] text-[13px]"
                            >
                              <a>Turn-Based</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Simulation</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Building & Automation</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Dating</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Hobby & Job</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Life & Immersive</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Sandbox & Physics</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Space & Flight</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Farming & Crafting</a>
                            </li>
                          </div>
                          <div className="border-r-2 border-gray-200  pr-[15px]">
                            <li
                              style={{ marginTop: "38px" }}
                              className="text-[#D8D8D8] text-[13px]"
                            >
                              <a>Strategy</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Card & Board</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>City & Settlement</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Grand & 4X</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Military</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Real-Time Strategy</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Tower Defense</a>
                            </li>
                            <li
                              style={{ marginBottom: "8px" }}
                              className="text-[#D8D8D8] text-[13px]"
                            >
                              <a>Turn-Based Strategy</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Sports & Racing</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>All Sports</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Fishing & Hunting</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Individual Sports</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Racing</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Racing Sim</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Sports Sim</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Team Sports</a>
                            </li>
                          </div>
                          <div>
                            <li className="head">
                              <a>THEMES</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Anime</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Horror</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Mystery & Detective</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Open World</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Sci-Fi & Cyberpunk</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Space</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Survival</a>
                            </li>
                            <li
                              className="head"
                              style={{ marginBlock: "22px" }}
                            >
                              <a>PLAYER SUPPORT</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Co-Operative</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>LAN</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Local & Party</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>MMO</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Multiplayer</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Online Competitive</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Singleplayer</a>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a className="text-[#e5e5e5] text-[13px]">Points Shop</a>
                    </li>
                    <li>
                      <a className="text-[#e5e5e5] text-[13px]">News</a>
                    </li>
                    <li>
                      <a className="text-[#e5e5e5] text-[13px]">Labs</a>
                    </li>
                  </ul>

                  <div
                    id="search-flex-spacer"
                    className="flex-1 w-[20px]"
                  ></div>
                  <div
                    id="search-area"
                    className="flex-grow flex-shrink-0 max-w-[210px]"
                  >
                    <div
                      id="store-search"
                      className="float-none px-1 pt=[3px] pb-[2px] h-[30px]"
                    >
                      <form action="/" id="search-form" className="block">
                        <input
                          type="text"
                          placeholder="search"
                          maxLength={64}
                          name="term"
                          style={{
                            textShadow: "1px 1px 0px rgba( 255, 255, 255, 0.1)",
                          }}
                          onMouseOver={(e) => {
                            e.target.style.border = "1px solid teal";
                          }}
                          onMouseOut={(e) => {
                            e.target.style.border = "none";
                          }}
                          className="mt-[5px] inline-block bg-[#305d8a] text-white px-2 focus:outline-none rounded-sm placeholder:text-black placeholder:text-opacity-70 italic py-[1px] font-light"
                        />
                        <a href="#" className="absolute right-[2px] text-white">
                          <img
                            src="https://store.cloudflare.steamstatic.com/public/images/v6/search_icon_btn.png"
                            className="w-[25px] h-[25px] relative top-[5px] right-[1px]"
                          />
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreNavBar;
