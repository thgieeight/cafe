import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landingpage";
import FoodDetailPage from "../pages/fooddetailpage";
import FoodGridPage from "../pages/foodgridpage";
import FoodCategoryGridPage from "../pages/foodcategorygridpage";
import FoodCategoryDetailPage from "../pages/foodcategorydetailpage";

const Routing = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/food" element={<FoodDetailPage />} />
          <Route path="/food/all" element={<FoodGridPage />} />
          <Route path="/category/all" element={<FoodCategoryGridPage />} />
          <Route path="/category/food" element={<FoodCategoryDetailPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routing;
