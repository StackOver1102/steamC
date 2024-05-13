import React, { useContext, useEffect, useState } from "react";
import { COUNTRY_LIST } from "./utils";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import * as UserService from "../services/userServices";
const SignupAdmin = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sendReq = await UserService.register({...form, isAdmin: true});
    if (sendReq) {
      alert("thanh cong");
      navigate("/login");
    }
  };

  //   useEffect(()=>{
  //     const userData = JSON.parse(localStorage.getItem("userData"));

  //     if (userData) {
  //       navigate("/")
  //     } else {
  //       navigate("/signup")
  //     }
  //   },[])

  return (
    <>
      <Navbar />
      <div
        style={{
          background:
            "radial-gradient(30% 40% at 40% 30%, rgba(33, 36, 41, .5) 0%, rgba(33, 36, 41, 0) 100%) no-repeat, url(https://store.cloudflare.steamstatic.com/public/shared/images/joinsteam/acct_creation_bg.jpg) -45vw 0 no-repeat, #212429",
        }}
      >
        <div className="w-[940px] mx-auto">
          <div className="p-[50px] min-h-[600px] max-w-[700px] mb-[250px]">
            {error ? (
              <div
                id="error-dispay"
                className="border-[2px] border-[#b44040] p-[10px] text-[15px] bg-[#00000080] text-white mb-8"
              >
                {error}
              </div>
            ) : (
              success && (
                <div
                  id="error-dispay"
                  className="border-[2px] border-[#57cbde] p-[10px] text-[15px] bg-[#00000080] text-white mb-8"
                >
                  {"Account created successfully!"}
                </div>
              )
            )}
            <div id="account-container">
              <form>
                <div id="form-box">
                  <div id="join-form">
                    <div
                      id="title"
                      className="uppercase text-[34px] text-white mb-[30px] font-extralight leading-[2px]"
                    >
                      TẠO TÀI KHOẢN CỦA BẠN
                    </div>
                    <div className="flex items-center flex-wrap my-[25px]">
                      <div className="w-[292px] float-none">
                        <label className="text-[14px] text-[#b8b6b4] align-top">
                          Địa chỉ email
                        </label>
                        <input
                          value={form.email || ""}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          className="bg-[#32353C] rounded-[3px] text-[#E9E9E9] py-2 px-[6px] block w-full font-normal"
                        ></input>
                      </div>
                    </div>
                    <div className="flex items-center flex-wrap my-[25px]">
                      <div className="w-[292px] float-none">
                        <label className="text-[14px] text-[#b8b6b4] align-top">
                          Tên tài khoản
                        </label>
                        <input
                          value={form.username || ""}
                          onChange={(e) =>
                            setForm({ ...form, username: e.target.value })
                          }
                          autoComplete="none"
                          className="bg-[#32353C] rounded-[3px] text-[#E9E9E9] py-2 px-[6px] block w-full font-normal"
                        ></input>
                      </div>
                    </div>
                    <div className="flex items-center flex-wrap my-[25px]">
                      <div className="w-[292px] float-none">
                        <label className="text-[14px] text-[#b8b6b4] align-top">
                          Mật khẩu
                        </label>
                        <input
                          value={form.password || ""}
                          onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                          }
                          type="password"
                          autoComplete="new-password"
                          className="bg-[#32353C] rounded-[3px] text-[#E9E9E9] py-2 px-[6px] block w-full font-normal"
                        ></input>
                      </div>
                    </div>
                    <div className="flex items-center flex-wrap my-[25px]">
                      <div className="w-[292px] float-none">
                        <label className="text-[14px] text-[#b8b6b4] align-top">
                          Xác nhận mật khẩu của bạn
                        </label>
                        <input
                          type="password"
                          value={form.confirmPassword || ""}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              confirmPassword: e.target.value,
                            })
                          }
                          autoComplete="none"
                          className="bg-[#32353C] rounded-[3px] text-[#E9E9E9] py-2 px-[6px] block w-full font-normal"
                        ></input>
                      </div>
                    </div>
                    <div className="flex items-center flex-wrap my-[25px]">
                      <div className="w-[292px] float-none">
                        <label className="text-[14px] text-[#b8b6b4] align-top">
                          Quốc gia cư trú{" "}
                        </label>
                        <select
                          value={form.country || "US"}
                          onChange={(e) =>
                            setForm({ ...form, country: e.target.value })
                          }
                          className="bg-[#32353C] rounded-[3px] text-[#E9E9E9] py-2 px-[6px] block w-full font-normal"
                        >
                          {COUNTRY_LIST.map((country) => (
                            <option key={country.value} value={country.value}>
                              {country.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div id="age" className="my-[25px]">
                
                      <div className="mt-[35px]">
                        <button
                          onClick={handleSubmit}
                          className="rounded-sm border-none p-[1px] inline-block cursor-pointer text-[#c3e1f8]"
                        >
                          <span
                            style={{
                              background:
                                "linear-gradient( to right, #47bfff 5%, #1a44c2 60%)",
                              backgroundPositionX: "25%",
                              backgroundSize: "330% 100%",
                              boxShadow: "2px 2px 5px #00000080",
                            }}
                            className="text-[15px] leading-[30px] py-[3px] px-[50px] rounded-sm block hover:text-white transition-all duration-300 ease-in-out hover:scale-105"
                          >
                            Continue
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignupAdmin;
