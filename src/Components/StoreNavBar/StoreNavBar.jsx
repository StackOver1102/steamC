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
                      <a className="text-[#e5e5e5] text-[13px]">
                        Cửa hàng của bạn
                      </a>
                      <ul className="color absolute hidden bg-white border rounded-md shadow-lg z-10 top-full left-0 w-max p-2 space-y-2 group-hover:block ">
                        <li>
                          <Link className="text-[#D8D8D8] text-[13px]" to="/">
                            Trang chủ
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="text-[#D8D8D8] text-[13px]"
                            to="/communityrecommendations"
                          >
                            Khuyến nghị từ cộng đồng
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="text-[#D8D8D8] text-[13px]"
                            to="/history"
                          >
                            Đã xem gần đây
                          </Link>
                        </li>
                        <li>
                          <a className="text-[#D8D8D8] text-[13px]">
                            Thẩm định Steam
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="noteworthy relative group">
                      <a className="text-[#e5e5e5] text-[13px]">
                        Mới & Đáng chú ý
                      </a>
                      <ul className="color absolute hidden bg-white border rounded-md shadow-lg z-10 top-full left-0 w-max p-2 space-y-2 group-hover:block">
                        <li className="head">
                          <a className="text-[#D8D8D8] text-[13px]">Phổ biến</a>
                        </li>
                        <li>
                          <Link
                            className="text-[#D8D8D8] text-[13px]"
                            to="/topseller"
                          >
                            Bán chạy nhất
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="text-[#D8D8D8] text-[13px]"
                            to="/mostplayed"
                          >
                            Chơi nhiều nhất
                          </Link>
                        </li>
                        <div className="endLine-cont">
                          <div className="endLine"></div>
                        </div>
                        <li>
                          <Link
                            className="text-[#D8D8D8] text-[13px]"
                            to="/news"
                          >
                            Mới ra mắt
                          </Link>
                        </li>
                        <li className="head">
                          <Link
                            className="text-[#D8D8D8] text-[13px]"
                            to="/upcoming"
                          >
                            Sắp ra mắt
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="text-[#D8D8D8] text-[13px]"
                            to="/update"
                          >
                            Mới cập nhật
                          </Link>
                        </li>
                        <div className="endLine-cont">
                          <div className="endLine"></div>
                        </div>
                      </ul>
                    </li>
                    <li className="relative group">
                      <div>
                        <a className="text-[#e5e5e5] text-[13px]">Danh mục</a>
                        <ul
                          className=" color absolute hidden bg-white border rounded-md shadow-lg z-10 top-full left-0 w-max p-2  group-hover:flex gap-[55px] "
                          style={{ left: "-240px", maxWidth: "1051.440px" }}
                        >
                          <div className="border-r-2 border-gray-200  pr-[15px]">
                            <li className="head">
                              <a>Mục đặc biệt</a>
                            </li>
                            <li>
                              <a className="text-[#D8D8D8] text-[13px]">
                                Chơi miễn phí
                              </a>
                            </li>
                            <li>
                              <a className="text-[#D8D8D8] text-[13px]">
                                Demos
                              </a>
                            </li>
                            <li>
                              <a className="text-[#D8D8D8] text-[13px]">
                                Truy cập sớm
                              </a>
                            </li>
                          </div>
                          <div>
                            <li className="head">
                              <a>Thể loại</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <Link to="/category/action">Hành động</Link>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Arcade & nhịp điệu</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Bắn súng góc nhìn thứ ba</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Bắn súng góc nhìn thứ nhất</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Chặt chém</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Platformer & Rượt đuổi</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>shmup</a>
                            </li>
                            <li
                              style={{ marginBottom: "8px" }}
                              className="text-[#D8D8D8] text-[13px]"
                            >
                              <a className="text-[#D8D8D8] text-[13px]">
                                Đối kháng & Võ thuật
                              </a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Phiêu lưu</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Giàu cốt truyện</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Giải đố</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Metroidvania</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Nhập vai phiêu lưu</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Tìm đồ vật</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Visual Novel</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Đơn giản</a>
                            </li>
                          </div>
                          <div>
                            <li
                              className="text-[#D8D8D8] text-[13px]"
                              style={{ marginTop: "38px" }}
                            >
                              <a>Nhập vai</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Hành động nhập vai</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>JRPG</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Nhập vai chiến thuật</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Nhập vai phiêu lưu</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Rogue-Like</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Theo lượt</a>
                            </li>
                            <li
                              style={{ marginBottom: "8px" }}
                              className="text-[#D8D8D8] text-[13px]"
                            >
                              <a>Tổ đội</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Mô phỏng</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Nông trại & Chế tác</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Thú vui & Công việc</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Vũ trụ & Máy bay</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Vật lý & Sandbox</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Xây dựng & Tự động hóa</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Đời sống & Chân thực</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Đời sống & Chân thực</a>
                            </li>
                          </div>
                          <div className="border-r-2 border-gray-200  pr-[15px]">
                            <li
                              style={{ marginTop: "38px" }}
                              className="text-[#D8D8D8] text-[13px]"
                            >
                              <a>Chiến thuật</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Bài & Bàn</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Chiến lược theo lượt</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Chiến thuật thời gian thực (RTS)</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Quân đội</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Thành phố & Lập cư</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Thủ thành</a>
                            </li>
                            <li
                              style={{ marginBottom: "8px" }}
                              className="text-[#D8D8D8] text-[13px]"
                            >
                              <a>Vĩ mô & 4X</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Thể thao & Đua tốc độ</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Các môn thể thao</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Câu cá & Săn bắn</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Mô phỏng thể thao</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Mô phỏng đua xe</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Thể thao cá nhân</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Thể thao đồng đội</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Đua tốc độ</a>
                            </li>
                          </div>
                          <div>
                            <li className="head">
                              <a>Chủ đề</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Anime</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Bí ẩn & Trinh thám</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Kinh dị</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Sinh tồn</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Thế giới mở</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Viễn tưởng & Cyberpunk</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Vũ trụ</a>
                            </li>
                            <li
                              className="head"
                              style={{ marginBlock: "22px" }}
                            >
                              <a>HỖ TRỢ NGƯỜI CHƠI</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Chơi đơn</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Cục bộ & Hội nhóm</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>MMO</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Mạng nội bộ</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Nhiều người</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Phối hợp</a>
                            </li>
                            <li className="text-[#D8D8D8] text-[13px]">
                              <a>Thi đấu trực tuyến</a>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link className="text-[#e5e5e5] text-[13px]" to="/points">
                        Cửa hàng điểm
                      </Link>
                    </li>
                    <li>
                      <Link className="text-[#e5e5e5] text-[13px]" to="/update">
                        Tin tức
                      </Link>
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
