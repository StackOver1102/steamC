import React, { useState, useContext } from "react";
import QR from "../assets/QR.png";
import LoginBottom from "../Components/Login/LoginBottom";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          background:
            "radial-gradient(rgba(24, 26, 33, 0) 0%, #181A21 100%) fixed no-repeat, url(https://store.cloudflare.steamstatic.com/public/shared/images/joinsteam/new_login_bg_strong_mask.jpg) center top no-repeat, #181A21",
        }}
        className="px-[8px] w-full mx-auto block"
      >
        <div id="login">
          <div
            id="login-container"
            className="pt-[80px] pb-[150px] flex flex-col items-center"
          >
            <div id="new-login" className="relative flex flex-col">
              <div className="gap-[32px] w-full flex flex-col">
                <div className="flex flec-col gap-2 my-2 mx-4">
                  <div className="text-[#fff] text-[32px] uppercase tracking-wide font-extralight">
                    ĐĂNG NHẬP
                  </div>
                </div>
                <div
                  id="new-login-dialog"
                  className=" bg-[#181a21] rounded py-6 px-8 flex-1 min-w-[636px]"
                >
                  <div className="flex flex-row pt-[10px]">
                    <form className="flex-1 grid gap-3 grid-cols-1">
                      <div
                        id="account-name"
                        className="grid grid-cols-1 gap-[2px]"
                      >
                        <div className="text-[#1999ff] font-medium text-[12px] uppercase tracking-wide">
                          ĐĂNG NHẬP BẰNG TÊN TÀI KHOẢN
                        </div>
                        <input
                          className="rounded-sm p-[10px] text-[15px] border-[#32353c] border-[1px] outline-none"
                          type="text"
                          onChange={(e) => setUsername(e.target.value)}
                          value={username}
                        />
                      </div>
                      <div
                        id="account-password"
                        className="grid grid-cols-1 gap-[2px]"
                      >
                        <div className="text-[#afafaf] font-medium text-[12px] uppercase tracking-wide">
                          MẬT KHẨU
                        </div>
                        <input
                          className="rounded-sm p-[10px] text-[15px] border-[#32353c] border-[1px] outline-none"
                          type="password"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                        />
                      </div>
                      <div id="button" className="flex flex-col items-center">
                        <button
                          style={{
                            background:
                              "linear-gradient(90deg, #06BFFF 0%, #2D73FF 100%)",
                          }}
                          className="w-[270px] relative rounded-sm border-none outline-none p-3 text-[#fff] text-base font-normal text-center cursor-pointer"
                          onClick={handleSubmit}
                        >
                          Đăng nhập
                        </button>
                      </div>
                      <div
                        className={`text-center ${error && "text-[#c15755]"} ${
                          success && "text-[#1999ff]"
                        } text-[12px] font-medium`}
                        id="form-error"
                      >
                        {error ? error : success ? "Success!" : ""}
                      </div>
                      <Link
                        to={"/signup"}
                        className="text-[#afafaf] text-[12px] cursor-pointer underline text-center"
                      >
                        Trợ giúp, tôi không thể đăng nhập
                      </Link>
                    </form>
                    <div className="flex-0 grid gap-1 ml-[40px]">
                      <div>
                        <div className="text-[#1999ff] font-medium text-[12px] uppercase tracking-wide">
                          HOẶC ĐĂNG NHẬP BẰNG QR
                        </div>
                        <div className=" aspect-square rounded-sm mt-[2px] mb-[8px]">
                          <div className="flex flex-col items-center">
                            <img
                              src={QR}
                              alt="QR"
                              className="w-[200px] h-[200px]"
                            />
                          </div>
                          <div className="text-center text-[12px] text-[#afafaf]">
                            Đây hoàn toàn là một đăng nhập thực sự, tôi thề.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LoginBottom />
      </div>
      <Footer />
    </>
  );
};

export default Login;
