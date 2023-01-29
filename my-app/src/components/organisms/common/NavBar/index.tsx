import Button from "components/atoms/Button";
import Input from "components/atoms/Input";
import FormGroup from "components/molecules/FormGroup";
import SearchBar from "components/molecules/SearchBar";
import React from "react";
import ButtonType from "utils/enum/ButtonType";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
          <SearchBar />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
