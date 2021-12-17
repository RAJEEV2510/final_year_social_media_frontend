import React from "react";
import { Spher,User,Settings, Logout ,Home_3 as Home,Friends2 as Friends,Comment ,Weather} from "../../assets/icons/icons.js";
import { useAuth } from "../auth/useAuth";
import { NavLink } from "react-router-dom";
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import PublishIcon from '@mui/icons-material/Publish';
import { Bell_2 as Bell } from "../../assets/icons/icons.js";
const Sidebar = ({uid,closeSidebar}) => {
  const { handleGetout } = useAuth();
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__logo">
          <span className="text"> Leechi</span>
        </div>
        <div className="sidebar__navigations">
          <ul className="sidebar__list">
            <li  className="sidebar__item">
              <NavLink exact to="/" onClick={closeSidebar ? closeSidebar : null} activeClassName="active" className="sidebar__link">
                <span className="icon">
                  <Home width="2.5rem" height="2.5rem" fill="#fff" />
                </span>
                <span className="text"> home</span>
              </NavLink>
            </li>
            <li className="sidebar__item">
              <NavLink onClick={closeSidebar ? closeSidebar : null} to="/friends" className="sidebar__link">
                <span className="icon">
                  <Friends width="2.5rem" height="2.5rem" fill="#fff" />
                </span>
                <span className="text"> Friends</span>
              </NavLink>
            </li>
            <li className="sidebar__item">
              <NavLink onClick={closeSidebar ? closeSidebar : null} to="/chat" className="sidebar__link">
                <span className="icon">
                  <Comment width="2.5rem" height="2.5rem" fill="#fff" />
                </span>
                <span className="text"> Chat</span>
              </NavLink>
            </li>
            <li className="sidebar__item">
              <NavLink onClick={closeSidebar ? closeSidebar : null} to="/video" className="sidebar__link">
               
                  <PublishIcon  style={{color:"white",fontSize:"40px",marginLeft:"-10px"}}/>
             
                <span className="text">Video Feed</span>
              </NavLink>
            </li>
            <li className="sidebar__item">
              <NavLink onClick={closeSidebar ? closeSidebar : null} to="/nearby" className="sidebar__link">
                <span className="icon">
                  <LocalAirportIcon width="3.5rem" height="3.5rem" fill="#fff" />
                </span>
                <span className="text"> NearBy</span>
              </NavLink>
            </li>
            <li className="sidebar__item">
              <NavLink onClick={closeSidebar ? closeSidebar : null} to="/weather" className="sidebar__link">
                <span className="icon">
                  <Weather width="2.5rem" height="2.5rem" fill="#fff" />
                </span>
                <span className="text">Weather</span>
              </NavLink>
            </li>
            <li className="sidebar__item">
              <NavLink onClick={closeSidebar ? closeSidebar : null} to="/notification" className="sidebar__link">
                <span className="icon">
                  <Bell width="2.5rem" height="2.5rem" fill="#fff" />
                </span>
                <span className="text">Notification</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="sidebar__account">
          <ul className="sidebar__list">
            <li className="sidebar__item">
              <NavLink onClick={closeSidebar ? closeSidebar : null} to={`/profile/${uid}`} className="sidebar__link">
                <span className="icon">
                  <User width="2.5rem" height="2.5rem" fill="#fff" />
                </span>
                <span className="text"> account</span>
              </NavLink>
            </li>
            <li className="sidebar__item">
              <NavLink onClick={closeSidebar ? closeSidebar : null} to="/settings" className="sidebar__link">
                <span className="icon">
                  <Settings width="2.5rem" height="2.5rem" fill="#fff" />
                </span>
                <span className="text"> setting</span>
              </NavLink>
            </li>
            <li className="sidebar__item">
              <button className="sidebar__link" onClick={() => handleGetout()}>
                <span className="icon">
                <Logout width="2.5rem" height="2.5rem" fill="#fff" />
                </span>
                <span className="text"> logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
