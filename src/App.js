import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import CategoryPage from "./pages/Category";
import ProductPage from "./pages/Product";
import { useState } from "react";
import CommunityRecomment from "./pages/CommunityRecomment";
import History from "./pages/History";
import TopSeller from "./pages/TopSelling";
import PlayTop from "./pages/Player";
import News from "./pages/News";
import Update from "./pages/Update";
import Points from "./pages/Points";
import Wishlist from "./pages/Wishlist";
import SignupAdmin from "./pages/SignupAdmin";
import PageAdmin from "./pages/pageAdmin";

function App() {
  const [recentlyViewed, setRecentlyViewed] = useState([
    {
      id: 1,
      title: "test",
    },
    {
      id: 2,
      title: "test1",
    },
    {
      id: 3,
      title: "test2",
    },
    {
      id: 4,
      title: "test3",
    },
    {
      id: 5,
      title: "test4",
    },
    {
      id: 6,
      title: "test5",
    },
    {
      id: 7,
      title: "test6",
    },
  ]);
  return (
    <div className="h-full relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signupAdmin" element={<SignupAdmin />} />
          <Route path="/admin" element={<PageAdmin />} />

          <Route path="/communityrecommendations" element={<CommunityRecomment />} />
          <Route path="/history" element={<History />} />
          <Route path="/topseller" element={<TopSeller />} />
          <Route path="/mostplayed" element={<PlayTop />} />
          <Route path="/news" element={<News />} />
          <Route path="/upcoming" element={<News />} />
          <Route path="/update" element={<Update />} />
          <Route path="/points" element={<Points />} />
          <Route path="/wishlist" element={<Wishlist />} />

          <Route path="/category/:id" element={<CategoryPage />} />
          <Route
            path="/product/:id"
            element={
              <ProductPage
                recentlyViewed={recentlyViewed}
                setRecentlyViewed={setRecentlyViewed}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
