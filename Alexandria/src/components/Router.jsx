import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";
import { UserProfile } from "./screens/UserProfile";

export const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />            
            <Route path='UserProfile' element={<UserProfile />} />            
            <Route path='*' element={<div>Not founasdd</div>} />
        </Routes>
    </BrowserRouter>
}