import Brand from "./pages/Brand";
import Category from "./pages/Category";
import User from "./pages/User";
import Bike from "./pages/Bike";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={<User />}/>
          <Route path="/category" element={<Category />}/>
          <Route path="/brand" element={<Brand />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/bike" element={<Bike />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
