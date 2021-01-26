import React, { useState } from "react";

import AssetsBlock from "./assets-block";
import LiabilitiesBlock from "./liabilities-block";
import EquityBlock from "./equity-block";

import { Item } from "./item";

const INITIAL_STATE = [
    new Item("", ""),
    new Item("", ""),
    new Item("", "")
];

const BalanceSheetApp = () => {
    const [assets, setAssets] = useState(INITIAL_STATE);
    const [liabilities, setLiabilities] = useState(INITIAL_STATE);
    const [equity, setEquity] = useState(INITIAL_STATE);

    const sumItems = (sum, currentItem) => {
        if(isNaN(currentItem.value) || currentItem.value === "") {
            return sum;
        }
        else {
            return parseFloat(sum) + parseFloat(currentItem.value);
        }
    }

    const sumNumberArray = (sum, number) => sum + number;

    return (
        <div>
            <div>
                <h2>Assets</h2>
                <AssetsBlock assets={assets} setAssets={setAssets} />
                <hr />
                <h3>Total Assets: {assets.reduce(sumItems, 0)}</h3>
            </div>
            <div>
                <h2>Liabilities</h2>
                <LiabilitiesBlock liabilities={liabilities} setLiabilities={setLiabilities} />
                <hr />
                <h3>Total Liability: {liabilities.reduce(sumItems, 0)}</h3>
            </div>
            <div>
                <h2>Equity</h2>
                <EquityBlock equity={equity} setEquity={setEquity} />
                <hr />
                <h3>Total Equity: {equity.reduce(sumItems, 0)}</h3>
            </div>
            <hr />
            <hr />
            <h2>Overall Total: {[assets.reduce(sumItems, 0), (-1)*liabilities.reduce(sumItems, 0), equity.reduce(sumItems, 0)].reduce(sumNumberArray, 0)}</h2>
        </div>
    );
}



export default BalanceSheetApp;
