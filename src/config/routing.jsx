import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landingpage";
import FoodDetailPage from "../pages/fooddetailpage";
import FoodGridPage from "../pages/foodgridpage";
import FoodCategoryGridPage from "../pages/foodcategorygridpage";
import FoodCategoryDetailPage from "../pages/foodcategorydetailpage";
import DrinkGridPage from "../pages/drinkgridpage";
import DrinkDetailPage from "../pages/drinkdetailpage";
import CartDetailPage from "../pages/cartdetailpage";
import AboutPage from "../pages/aboutpage";
import OrderPage from "../pages/orderpage";
import BillPage from "../pages/billpage";

const Routing = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cart" element={<CartDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/bill" element={<BillPage />} />
          <Route path="/food" element={<FoodDetailPage />} />
          <Route path="/drink" element={<DrinkDetailPage />} />
          <Route path="/food/all" element={<FoodGridPage />} />
          <Route path="/drink/all" element={<DrinkGridPage />} />
          <Route path="/category/all" element={<FoodCategoryGridPage />} />
          <Route path="/category/food" element={<FoodCategoryDetailPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routing;
