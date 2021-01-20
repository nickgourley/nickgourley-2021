import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import ThemeContext from "../context/theme";
import Navigation from "../components/navigation";
import PageSearchForm from "./forms/page-search-form";

const Header = ({ siteTitle }) => {
  // const { dark, changeTheme } = useContext(ThemeContext);

  return (
    <header>
      <div>
        <h1>
          <Link to="/">
            {siteTitle}
          </Link>
        </h1>
        <Navigation />
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
