import React from "react";
import SEO from "../components/seo";
import CV from "../components/cv";

const CvPage = () => {

    return (
        <>
            <SEO title="CV" />
            <h1>CV</h1>
            <hr />
            <CV />
        </>
    );
}

export default CvPage;