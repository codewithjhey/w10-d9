import { Navbar, Nav } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"

const NavBar = ({ subtitle }) => {
  const location = useLocation()
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand> Job Hunt - {subtitle}</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/favourites" className="navbar-links">
            <div
              className={
                location.pathname === "/favourites"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Favorites Jobs
            </div>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
