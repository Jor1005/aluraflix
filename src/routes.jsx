import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./pages/Inicio/App"




function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}></Route>
            </Routes>
        </BrowserRouter>
    )


}

export default AppRoutes