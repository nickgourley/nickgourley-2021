import React, { useState, useEffect } from "react";
import { unitValues } from "../../constants/unitValues";

const UnitConversionApp = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [inputUnits, setInputUnits] = useState('km');
    const [outputUnits, setOutputUnits] = useState('km');
    const [unitsType, setUnitsType] = useState('length');

    const handleUnitConversion = () => {
        if(!isNaN(input)) {
            const dict = unitValues[unitsType]
            const factor = dict[outputUnits]/dict[inputUnits];
            setOutput(input * factor);
        }
    }

    const handleUnitsChange = (e) => {
        const newUnits = e.target.value;
        const newDefaultUnit = Object.keys(unitValues[newUnits])[0];
        setUnitsType(newUnits);
        setInputUnits(newDefaultUnit);
        setOutputUnits(newDefaultUnit);

    }

    const handleUnitFormSubmit = (e) => {
        e.preventDefault();
        handleUnitConversion();
    }

    const handleClear = (e) => {
        e.preventDefault();
        setOutput('0');
        setInput('');
    }

    useEffect(() => {
        handleUnitConversion()
    }, [inputUnits])

    useEffect(() => {
        handleUnitConversion()
    }, [outputUnits])

    

    return (
        <>
            <form onSubmit={handleUnitFormSubmit}>
                Unit Type:{` `}
                <select name="unitsType" onChange={handleUnitsChange}>
                    {Object.entries(unitValues).map(([key, value]) => <option key={key} value={key}>{key}</option>)}
                </select>
                <button onClick={handleClear}>Clear</button>
                <br />
                Input:{` `}
                <input name="input" onChange={(e) => setInput(e.target.value)} />
                {` `}
                {output && output + " " + outputUnits}
                <br />
                From:{` `}
                <select name="unit1" onChange={(e) => {
                    setInputUnits(e.target.value)
                }}>
                    {Object.entries(unitValues[unitsType]).map(([key, value]) => <option key={key} value={key}>{key}</option>)}
                </select>
                {` `}To:{` `}
                <select name="unit2" onChange={(e) => { 
                    setOutputUnits(e.target.value)
                }}>
                    {Object.entries(unitValues[unitsType]).map(([key, value]) => <option key={key} value={key}>{key}</option>)}
                </select>
                {` `}
                <button>Go</button>
                
            </form>
        </>
    );
}

export default UnitConversionApp;