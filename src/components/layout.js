/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import "./global.css";
import LayoutStyles from "./layout.module.css";

const Layout = ({ children }) => {
  const [navActivated, setNavActivated] = useState(false);
  const node = useRef(); // ref variable for detecting click outside sidenav
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    if (navActivated) {
      document.addEventListener('mousedown', handleClickOutside); // if nav is open, put event listener to detect click outside nav
    } else {
      document.removeEventListener('mousedown', handleClickOutside); // remove nav click detection when nav is closed
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // remove click outside sidenav listener when nav closes
    };
  });

  const handleClickOutside = (e) => {
    if (node.current && node.current.contains(e.target)) {
      // do nothing (click is inside sidenav)
      return;
    }
    // close sidenav (click is outside sidenav)
    setNavActivated(false);
  };

  const activateNav = () => {
    setNavActivated(!navActivated); // swap sidenav open/close
  }


  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} activateNav={activateNav} navActivated={navActivated} />
      <div ref={node} id="sidenav" className={[LayoutStyles.sidenav, navActivated ? LayoutStyles.sidenavOpen : LayoutStyles.sidenavClosed].join(" ")}>
          <div className={LayoutStyles.sidenavLinks}>
            <Link onClick={activateNav} to="/">Home</Link>
            <Link onClick={activateNav} to="/cv/">CV</Link>
            <Link onClick={activateNav} to="/projects/">Projects</Link>
            <Link onClick={activateNav} to="/contact/">Contact</Link>
          </div>
          <div className={LayoutStyles.sidenavSocialLinks} >
            <p>sidenav links</p>
            {/* <a href="https://www.linkedin.com/in/nickgourley/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={[LayoutStyles.icon, (theme === 'dark') ? LayoutStyles.darkIcon : LayoutStyles.lightIcon].join(" ")} icon={faLinkedin} /></a>
            <a href="https://github.com/nickgourley" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={[LayoutStyles.icon, (theme === 'dark') ? LayoutStyles.darkIcon : LayoutStyles.lightIcon].join(" ")} icon={faGithub} /></a>
            <a href="mailto:mail@nickgourley.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={[LayoutStyles.icon, (theme === 'dark') ? LayoutStyles.darkIcon : LayoutStyles.lightIcon].join(" ")} icon={faEnvelope} /></a> */}
          </div>
      </div>
      <div>
        <main className={LayoutStyles.mainContainer}>{children}</main>
        <footer className={LayoutStyles.footerContainer}>
          © {new Date().getFullYear()}, Nicholas Gourley
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
