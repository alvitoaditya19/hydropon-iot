import { SidebarItem } from "../../atoms";

export default function Sidebar({ toggleViewMode, activeMenu }) {
  return (
    <>
      <div className={toggleViewMode ? "sidebar active" : "sidebar"}>
        <div className="d-flex justify-content-center py-5">
          {/* <img src="/images/logo.svg" alt="Logo" width="140px" height="40px" /> */}
          <img
            src="/images/ic_iot_act.svg"
            alt="Logo"
            width="180px"
            height="60px"
          />
        </div>
        <div className="pt-2 d-flex flex-column gap-5">
          <div className="menu">
            <p>Daily Use</p>
            <SidebarItem
              icon="icon ic-stats"
              title="Overview"
              href="/dashboard"
              active={activeMenu == "overview"}
            />
            <SidebarItem
              icon="icon ic-user"
              title="User"
              href="/dashboard/user"
              active={activeMenu == "user"}
            />
            <SidebarItem
              icon="icon ic-user"
              title="Temperature"
              href="/dashboard/temperature"
              active={activeMenu == "temperature"}
            />
          </div>
          <div className="menu">
            <p>Others</p>
            <a href="#" className="item-menu">
              <i className="icon ic-settings"></i>
              Settings
            </a>
            <a href="#" className="item-menu">
              <i className="icon ic-help"></i>
              Help
            </a>
            <a href="#" className="item-menu">
              <i className="icon ic-logout"></i>
              Logout
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
