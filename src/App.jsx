import { useContext } from "react"
import { HomeRoutes } from "./routes/HomeRoutes"
import { LoginRoutes } from "./routes/LoginRoutes"
import { Context } from "./context/Context"

function App() {
  const {token} = useContext(Context)
  if(token){
    return <HomeRoutes/>
  }
  else{
    return <LoginRoutes/>
  }
}

export default App
