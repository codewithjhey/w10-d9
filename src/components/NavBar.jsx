import { Navbar, Nav, Button } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"

const NavBar = ({ subtitle }) => {
  const location = useLocation()

  const favLength = useSelector((state) => state.favourite.companies.length)

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
              <Button type="button" className="btn btn-warning">
                Fav Jobs
                <span className="badge badge-light ml-2">{favLength}</span>
              </Button>
            </div>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
