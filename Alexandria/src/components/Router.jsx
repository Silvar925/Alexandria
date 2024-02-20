import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";

export const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />            
            <Route path='*' element={<div>Not founasdd</div>} />
        </Routes>
    </BrowserRouter>
}