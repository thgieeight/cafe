import { BrowserRouter,Routes,Route } from "react-router-dom"
import LandingPage from "../pages/landingpage"
import FoodDetailPage from "../pages/fooddetailpage"
import FoodGridPage from "../pages/foodgridpage"
import FoodCategoryGridPage from "../pages/foodcategorygridpage"
import FoodCategoryDetailPage from "../pages/foodcategorydetailpage"


const Routing=()=>{
    return(<>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />}> </Route>
            <Route path="/food" element={<FoodDetailPage />}> </Route>
            <Route path="/food/all" element={<FoodGridPage />}> </Route>
            <Route path="/category/all" element={<FoodCategoryGridPage />}> </Route>
            <Route path="/category/food" element={<FoodCategoryDetailPage />}> </Route>

        </Routes>
        </BrowserRouter>

    </>)
}
export default Routing