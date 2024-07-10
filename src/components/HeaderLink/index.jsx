import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./HeaderLink.module.css";


export function HeaderLink({ url, children }) {
    return (
        <NavLink
            to={url}
            className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
            }
        >
            {children}
        </NavLink>
    );
}

