import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import { Nav, Navbar } from "react-bootstrap";
import Edit from "./pages/Edit";
import View from "./pages/View";


function App() {
  return (
    <div>
      <Navbar className="navbar-expand-md navbar-dark bg-dark">
        <Navbar.Toggle aria-controls={"basic-navbar-nav"} />
        <Navbar.Collapse id={"basic-navbar-nav"}>
          <Nav className="mr-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/create"} className="nav-link">
                Create
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container flex-row">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
