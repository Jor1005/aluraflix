import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./pages/Inicio/App"
import NewVideoForm from "./pages/NuevoVideo"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/nuevo-video" element={<NewVideoForm />  } />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes