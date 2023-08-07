import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import starWarsHeader from "../../img/Star-Wars-Movie-PNG-Pic.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar bg-dark border-bottom border-body">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img
              src={starWarsHeader}
              alt="Logo"
              class="d-inline-block align-text-top"
            />
          </span>
        </Link>
        <ul className=" ml-auto">
          <li className="nav-item dropdown btn btn-primary">
            <a
              className="nav-link dropdown-toggle "
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites
            </a>
            <ul className="dropdown-menu">
              {store.favorites.map((item, idx) => (
                <li class="dropdown-item">
                  
                  {item.label}
                  
                  {/* <button
                    type="button"
                    className={"btn btn-sm float-end m-0 p-0 text-secondary"}
                    onClick={() => actions.changeFavorite()}
                  >
                    X
                  </button> */}
                </li>
              ))}
              {/* NEED TO Map currentFavoirtesList to LI's here */}
            </ul>
          </li>
        </ul>
        {/* <div className="ml-auto">
          <Link to="/demo">
        <button className="btn btn-primary">Check the Context in action</button>
        </Link>
        </div> */}
      </div>
    </nav>
  );
};
