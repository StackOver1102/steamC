import {
  SIDEBAR_RECOMMENDED,
  SIDEBAR_CATEGORIES,
  SIDE_BAR_HARDWARE,
  SIDE_BAR_GENRES,
} from "../StoreNavBar/utils";

const Sidebar = ({ recentlyViewed }) => {
  return (
    <div
      id="sidebar"
      className="2xl:opacity-100 opacity-0 absolute left-[-225px] top-[-30px] pt-[31px] mb-10 transform-gpu translate-x-36 2xl:translate-x-0 transition duration-500 ease-in-out"
    >
      <div
        id="sidebar block"
        className="border-none bg-none pl-0 w-[210px] mb-5"
      >
        <div
          id="top-promo"
          href="https://store.steampowered.com/app/1675200/Steam_Deck/?utm_source=steamhometop&snr=1_4_4__125"
        >
          <div
            id="gutter-header"
            className="mb-[2px] leading-4 text-[14px] uppercase font-bold text-[#88bde9] group"
          >
            <div
              className="absolute -z-10 left-[-100px] w-[400px] h-[400px] top-0"
              style={{
                background: "linear-gradient(135deg, #00d5ff 28%, #d0266f 35%)",
                WebkitMask:
                  "radial-gradient(circle at 48% 19%, black 2%, transparent 20%)",
              }}
            ></div>
            <img
              id="steam-deck"
              src="https://store.cloudflare.steamstatic.com/public/images//steamdeck/steamdeck_promo_01.png"
              alt="Steam Deck"
              className=" max-w-[85%] mb-[6px] overflow-clip"
            />
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default Sidebar;
