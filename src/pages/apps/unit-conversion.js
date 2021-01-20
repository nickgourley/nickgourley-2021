import React from "react";
import SEO from "../../components/seo";
import UnitConversionApp from "../../components/web-apps/unit-conversion-app";

const UnitConversionPage = () => {
    
    return (
        <>
            <SEO title="Unit Conversion" />
            <h1>Unit Conversion</h1>
            <hr />
            <UnitConversionApp />
        </>
    );
}

export default UnitConversionPage;