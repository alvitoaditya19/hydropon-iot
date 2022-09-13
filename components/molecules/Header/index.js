import React, { useState } from "react";

export default function Header({ toggleNavbar, filterBySearch, isFilter }) {
  const [filter, setFilter] = useState(false)
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid gap-2">
          <button
            className="btn icon-bar sidebarCollapse"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="search-bar-profile gap-md-4 mt-3 mt-md-0">
            <input
              type="text"
              placeholder="Search report or product"
              className="search form-control"
              onChange={filterBySearch}
            />

            <button
              className="btn btn-search d-flex justify-content-center align-items-center p-0"
              type="button"
            >
              <img src="/images/ic_search.svg" width="20px" height="20px" />
            </button>
            <div className="dropdown">
              <button
                className="profile-pictures"
                type="button"
                id="dropdownProfile1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/images/avatar.jpg"
                  alt="Photo Profile"
                  className="avatar"
                />
              </button>
              <ul
                className="dropdown-menu dropdown-menu-center"
                aria-labelledby="dropdownProfile1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
