import { Link } from "react-router-dom";
import { useState } from "react";
import "./Home.css";

function Home() {
  const [navegar, setNavegar] = useState("");

  return (
    <div>
      <h1>Welcome to the Bikepass demo!</h1>
      <nav>
        <p>Please, select the page you want to see:</p>
        <select id="paginas" onChange={(e) => setNavegar(e.target.value)}>
          <option value="/" selected>
            Select
          </option>
          <option value="/brand">Brand</option>
          <option value="/category">Category</option>
          <option value="/user">User</option>
          <option value="/bike">Bike</option>
        </select>
        <Link to={navegar}>Confirma</Link>
      </nav>
    </div>
  );
}

export default Home;
