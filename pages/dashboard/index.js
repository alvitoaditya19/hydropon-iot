import {  useState } from "react";
import { CardMonitor, Header, Sidebar, SummaryCard } from "../../components";
import { IcParameter } from "../../public/Icon";

export default function Dashboard() {
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
          activeMenu="overview"
        />
        {/* Main Content */}
        <div className="content">
          <Header toggleNavbar={toggleNavbar} />
          <section className="p-3">
            <div className="header">
              <h3>Overview</h3>
              <p>Manage data for growth</p>
              <div className="main-content">
                <div className="row">
                  <SummaryCard title="User" total="50" />
                  <SummaryCard title="Vegetable" total="50" />
                  <SummaryCard title="Harvest" total="50" />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <h1 className="text-2xl fw-semibold">Data Monitoring</h1>
                  <p>Manage data for growth</p>
                  <div className="row">
                    <CardMonitor />
                    <CardMonitor />
                    <CardMonitor />
                    <CardMonitor />
                    <CardMonitor />
                    <CardMonitor />
                  </div>
                </div>
                <div className="col-lg-6 control-feature">
                  <h1 className="text-2xl fw-semibold">Control Feature</h1>
                  <p>Manage data for growth</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
