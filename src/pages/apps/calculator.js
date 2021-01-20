import React from "react";
import SEO from "../../components/seo";
import CalculatorApp from "../../components/web-apps/calculator-app";

const CalculatorPage = () => {
    return (
        <>
            <SEO title="Calculator" />
            <h1>Calculator</h1>
            <hr />
            <CalculatorApp />
        </>
    );
}

export default CalculatorPage;