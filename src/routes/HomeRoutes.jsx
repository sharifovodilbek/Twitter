import { Route, Routes } from "react-router-dom"
import { navListRoute, paths } from "../hooks/paths"
import { Home } from "../pages"
import Navbar from "../modules/Navbar"
import Sidebar from "../modules/Sidebar"


export const HomeRoutes = () => {
    return (
        <div className="flex w-[1200px] mx-auto justify-between">
            <Navbar />
            <div className="w-[50%] border-x-[2px] border-slate-400 h-[100vh] overflow-y-auto">
                <Routes>
                    {navListRoute.map(item => (
                        <Route key={item.path} path={item.path} element={item.element} />
                    ))}
                </Routes>
            </div>
            <Sidebar />
        </div>
    )
}