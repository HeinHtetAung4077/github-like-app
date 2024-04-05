import { Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Explore from "./pages/Explore"
import Likes from "./pages/Likes"

function App() {
  
  

  return (
    <div className="flex text-white">
      
      <Sidebar />
      <div className="max-w-5xl my-5 mx-auto path text-white transition-all duration-300 flex-1">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/likes" element={<Likes />}></Route>
        </Routes>
      </div>

    </div>
  )
}

export default App
