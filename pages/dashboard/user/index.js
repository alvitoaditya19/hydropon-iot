import { useEffect, useState } from "react";
import { Header, Sidebar } from "../../../components";

export default function User() {
  const [toggleViewMode, setToggleViewMode] = useState(false);
  const toggleNavbar = () => {
    setToggleViewMode(!toggleViewMode);
  };
  return (
    <>
      {/* Navbar */}
      <div className="dashboard d-flex">
        <Sidebar
          toggleViewMode={toggleViewMode}
          toggleNavbar={toggleNavbar}
          activeMenu="user"
        />
        {/* Main Content */}
        <div className="content">
          <Header toggleNavbar={toggleNavbar} />
          <section className="p-3">
            <div className="header">
              <h3>User</h3>
              <p>Manage data for growth</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}