import React from "react";

import { Item as Liability } from "./item";

const LiabilitiesBlock = ({liabilities, setLiabilities}) => {

    const handleAddLiability = () => {
        setLiabilities(prevState => {
            const newLiability = new Liability("", "");
            const newLiabilities = [...prevState];
            newLiabilities.push(newLiability);
            return newLiabilities;
        })
    }

    const handleUpdateLiabilityDescription = (liability, index, newDescription) => {
        setLiabilities(prevState => {
            const newLiabilities = [...prevState];
            newLiabilities[index] = new Liability(newDescription, liability.value, liability.id);
            return newLiabilities;
        })
    }

    const handleUpdateLiabilityValue = (liability, index, newValue) => {
        setLiabilities(prevState => {
            const newLiabilities = [...prevState];
            newLiabilities[index] = new Liability(liability.description, newValue, liability.id);
            return newLiabilities;
        })
    }

    const handleDeleteLiability = (index) => {
        setLiabilities(prevState => {
            let newLiabilities = [...prevState];
            newLiabilities.splice(index, 1);
            return newLiabilities;
        })
    }

    return (
        <div>
        
        <div>
            {liabilities.map((liability, index) => {
                return (<div key={liability.id}><input type="text" onChange={(e) => handleUpdateLiabilityDescription(liability, index, e.target.value)}/><input type="text" onChange={(e) => handleUpdateLiabilityValue(liability, index, e.target.value)}/><button onClick={() => handleDeleteLiability(index)}>X</button></div>);
            })}
        </div>
            <button onClick={handleAddLiability}>Add New</button>
        </div>
    );
}



export default LiabilitiesBlock;