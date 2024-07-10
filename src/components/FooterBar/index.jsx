import { Link, useLocation } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import "./FooterBar.css";

export function FooterBar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isNewVideoPage = location.pathname === "/newVideo";

  return (
    <div className="footer-bar">
      {isHomePage && (
        <>
          <Link to="/" className="footer-icon">
            <button className="icon">
              <IoHome className="icon-home" />
              <p>HOME</p>
            </button>
          </Link>
          <Link to="/newVideo" className="footer-icon">
            <IoMdAddCircleOutline className="icon-add" />
          </Link>
        </>
      )}
      {isNewVideoPage && (
        <>
          <Link to="/" className="footer-icon">
            <IoHome className="icon-home" />
          </Link>
          <Link to="/newVideo" className="footer-icon">
            <button className="icon">
              <IoMdAddCircleOutline className="icon-add" />
              <p>NOVO VIDEO</p>
            </button>
          </Link>
        </>
      )}
    </div>
  );
}
