import { Nav, Container, Navbar } from "react-bootstrap";
import logo from "../assets/icon/logo.svg";
import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar1 = () => {
  return (
    <Navbar className="navbar">
      <Container className="container">
        <div>
          <img src={logo} alt="" />
          <Link to="/"></Link>
        </div>
        <Nav className="nav ">
          <Link className="link">
            Home
          </Link>
          <Link className="link">
            News
          </Link>
          <Link className="link"> 
            Popular
          </Link>
          <Link className="link">
            Trending
          </Link>
          <Link className="link">
            Categories
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar1;
