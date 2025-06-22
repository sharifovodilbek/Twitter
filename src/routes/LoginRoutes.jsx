import { Route, Routes } from "react-router-dom"
import { paths } from "../hooks/paths"
import { Login } from "../pages"



export const LoginRoutes = () => {
    return (
        <Routes>
            <Route path={paths.login} element={<Login/>}/>
        </Routes>
    )
}