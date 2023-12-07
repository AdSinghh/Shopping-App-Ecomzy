import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <div className="bg-slate-900">
        
      <Navbar/>
      
      </div>

      <div>
        <Routes>
          <Route path = "/" element= {<Home/>}></Route>
          <Route path = "/cart" element= {<Cart/>}></Route>
        </Routes>
      </div>
    </div>
  )
};

export default App;
