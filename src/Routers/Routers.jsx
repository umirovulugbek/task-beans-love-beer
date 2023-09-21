import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Favourites from "../pages/Favourites";


const Routers = () => {
  return (
    <>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="*" element={<NotFound/>}/>
         <Route>
                <Route path="/favourites" element={<Favourites/>}/>
         </Route>
      </Routes>
    </>
  )
}

export default Routers


