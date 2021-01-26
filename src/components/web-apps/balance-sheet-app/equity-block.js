import React from "react";

import { Item as Equity } from "./item";

const EquityBlock = ({equity, setEquity}) => {

    const handleAddEquity = () => {
        setEquity(prevState => {
            const newEquity = new Equity("", "");
            const newEquities = [...prevState];
            newEquities.push(newEquity);
            return newEquities;
        })
    }

    const handleUpdateEquityDescription = (equityItem, index, newDescription) => {
        setEquity(prevState => {
            const newEquities = [...prevState];
            newEquities[index] = new Equity(newDescription, equityItem.value, equityItem.id);
            return newEquities;
        })
    }

    const handleUpdateEquityValue = (equityItem, index, newValue) => {
        setEquity(prevState => {
            const newEquities = [...prevState];
            newEquities[index] = new Equity(equityItem.description, newValue, equityItem.id);
            return newEquities;
        })
    }

    const handleDeleteEquity = (index) => {
        setEquity(prevState => {
            let newEquities = [...prevState];
            newEquities.splice(index, 1);
            return newEquities;
        })
    }

    return (
        <div>
        
        <div>
            {equity.map((equityItem, index) => {
                return (<div key={equityItem.id}><input type="text" onChange={(e) => handleUpdateEquityDescription(equityItem, index, e.target.value)}/><input type="text" onChange={(e) => handleUpdateEquityValue(equityItem, index, e.target.value)}/><button onClick={() => handleDeleteEquity(index)}>X</button></div>);
            })}
        </div>
            <button onClick={handleAddEquity}>Add New</button>
        </div>
    );
}



export default EquityBlock;