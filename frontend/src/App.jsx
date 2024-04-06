import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Explore from "./pages/Explore";
import Likes from "./pages/Likes";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {

  const {authUser, loading}=useAuthContext();
  console.log("Authenticated User: ", authUser);
  if(loading) return null;

  return (

    <div className="flex text-white">
      <Sidebar />
      <div className="max-w-5xl my-5 mx-auto path text-white transition-all duration-300 flex-1">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={ !authUser ? <Login /> : <Navigate to={"/"} />}/>
          <Route path="/signup" element={ !authUser ? <Signup /> : <Navigate to={"/"} />}/>
          <Route path="/explore" element={ authUser ? <Explore /> : <Navigate to={"/login"} />}/>
          <Route path="/likes" element={ authUser ? <Likes /> : <Navigate to={"/login"} />}/>
        </Routes>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
