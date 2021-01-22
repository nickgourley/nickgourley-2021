import React, { useState, useEffect } from "react";
import { unitValues } from "../../constants/unitValues";

const UnitConversionApp = () => {
    const [inputUnits, setInputUnits] = useState('km');
    const [outputUnits, setOutputUnits] = useState('km');
    const [input, setInput] = useState('0');
    const [output, setOutput] = useState('0');
    
    const [unitsType, setUnitsType] = useState('length');
    
    const [firstRun, setFirstRun] = useState(true);

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
        if(e) { e.preventDefault(); }
        setOutput('0');
        document.getElementById('input-unit-conversion-app').value = "";
        setInput('0');
    }

    useEffect(() => {
        console.log('input')
        handleUnitConversion()
    }, [inputUnits])

    useEffect(() => {
        console.log('output')
        if(!firstRun) {
            handleUnitConversion()
        }
        else {
            setFirstRun(false);
            handleClear();
        }
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
                <input id="input-unit-conversion-app" name="input" onChange={(e) => setInput(e.target.value)} />
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