import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<home/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}