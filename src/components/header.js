import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import ThemeContext from "../context/theme";
import Navigation from "../components/navigation";
import PageSearchForm from "./forms/page-search-form";
import HeaderStyles from "./header.module.css";

const Header = ({ siteTitle, activateNav, navActivated }) => {
  // const { dark, changeTheme } = useContext(ThemeContext);

  return (
    <header>
      
      <div className={HeaderStyles.headerContainer}>
      <button className={HeaderStyles.navButton} onClick={activateNav}></button>
        <h1 className={HeaderStyles.siteTitle}>
          <Link to="/">
            {siteTitle}
          </Link>
        </h1>
        <PageSearchForm />
      </div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
