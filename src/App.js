import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import CategoryPage from "./pages/Category";
import ProductPage from "./pages/Product";
import { useState } from "react";

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
