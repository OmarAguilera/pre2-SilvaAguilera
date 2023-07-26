import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";

let linkStyles = { display: "flex", justifyContent: "center", marginLeft: "35px", fontSize: "20px" };
let menuStyles = { textDecoration: "none", listStyleType: "none", color: "inherit", marginRight: "10px", color: "brown" };

let general = { display: "flex", border: "2px dotted white" };

export function NavBar() {
  return (
    <nav style={general}>
      <CartWidget />
      <ul style={linkStyles}>
        <li style={menuStyles}><Link to="/">Home</Link></li>
        <li style={menuStyles}><Link to="/candies">Candies</Link></li>
        <li style={menuStyles}><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
}
