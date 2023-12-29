import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import SidebarLink from "./SidebarLink";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  return (
    <aside className="w-[15%] h-full bg-[#181f38] relative">
      <div className="h-[80%] px-2">
        <div className="flex item-center justify-center p-4">
          <h2 className="text-white font-bold text-lg leading-5 tracking-wider">
            Company Name
          </h2>
        </div>

        <ul className="mt-5 space-y-2">
          <NavLink
            end
            to="/"
            className={`flex items-center w-full justify-left px-3 py-2 transition duration-150 truncate space-x-2 hover:text-white hover:bg-white/10  ${
              pathname === "/"
                ? "text-white bg-white/10 rounded"
                : "text-slate-300"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
              className={`fill-current`}
            >
              <path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z" />
            </svg>
            <h4 className="">Dashboard</h4>
          </NavLink>
          <NavLink
            end
            to="/userwithdb"
            className={`flex items-center w-full justify-left px-3 py-2 transition duration-150 truncate space-x-2 hover:text-white hover:bg-white/10  ${
              pathname === "/userwithdb"
                ? "text-white bg-white/10 rounded"
                : "text-slate-300"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
              className="fill-current"
            >
              <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z" />
            </svg>
            <h4 className="">Users with DB</h4>
          </NavLink>
          <NavLink
            end
            to="/userwithapi"
            className={`flex items-center w-full justify-left px-3 py-2 transition duration-150 truncate space-x-2 hover:text-white hover:bg-white/10  ${
              pathname === "/userwithapi"
                ? "text-white bg-white/10 rounded"
                : "text-slate-300"
            }`}
          >
             <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
              className="fill-current"
            >
              <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z" />
            </svg>
            <h4 className="">Users with API</h4>
          </NavLink>
        </ul>
      </div>
      <div className="absolute bottom-2 w-full px-2">
        <button className="btn-sm w-full bg-white/10 text-white cursor-pointer" onClick={() => navigate('/signin')}>
          Log Out
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
