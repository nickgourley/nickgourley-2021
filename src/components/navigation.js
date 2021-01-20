import React from "react";
import { Link } from "gatsby";

const Navigation = () => {

    return (
        <>
            <Link to="/">Home</Link>
            {` `}
            <Link to="/cv/">CV</Link>
            {` `}
            <Link to="/projects/">Projects</Link>
            {` `}
            <Link to="/contact">Contact</Link>
        </>
    )
}

export default Navigation;