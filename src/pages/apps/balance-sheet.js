import React from "react";
import SEO from "../../components/seo";
import BalanceSheetApp from "../../components/web-apps/balance-sheet-app";

const BalanceSheet = () => {


    return(
        <>
            <SEO title="Balance Sheet" />
            <h1>Balance Sheet</h1>
            <hr />
            <BalanceSheetApp />
        </>
    );
}

export default BalanceSheet