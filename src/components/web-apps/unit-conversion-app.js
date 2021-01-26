import React, { useState, useEffect } from "react";
import { unitValues } from "../../constants/unitValues";
import UnitConversionAppStyles from "./unit-conversion-app.module.css";

const UnitConversionApp = () => {
    const [output, setOutput] = useState('0');
    const [input, setInput] = useState('0');
    const [inputUnits, setInputUnits] = useState('[km] kilometers');
    const [outputUnits, setOutputUnits] = useState('[km] kilometers');
    const [unitsType, setUnitsType] = useState('length');
    const [factor, setFactor] = useState(1);

    const handleUnitsChange = () => {
        const newUnits = document.getElementById('input-units-type').value;
        const newDefaultUnit = Object.keys(unitValues[newUnits])[0];
        setUnitsType(newUnits);
        setInputUnits(newDefaultUnit);
        setOutputUnits(newDefaultUnit);

    }



    const calculateOutput = () => {
        
    }
    
    useEffect(() => {
        setOutput(input * factor);
    },[input, factor])

    useEffect(() => {
        const dict = unitValues[unitsType];
        setFactor(dict[outputUnits]/dict[inputUnits]);
    }, [inputUnits, outputUnits])

    return (
        <>
            <form className={UnitConversionAppStyles.container}>
                Unit Type:{` `}
                <select id="input-units-type" name="unitsType" onChange={handleUnitsChange}>
                    {Object.entries(unitValues).map(([key, value]) => <option key={key} value={key}>{key}</option>)}
                </select>
                <br />
                <div className={UnitConversionAppStyles.inputOutputContainer}>
                Input:{` `}
                <input id="input-unit-conversion-app" name="input" onChange={(e) => setInput(e.target.value)} />
                <div>{` `}{"="}{` `}</div>
                <div className={UnitConversionAppStyles.output}>{output + " " + outputUnits}</div>
                </div>
                From:{` `}
                <select name="unit1" onChange={(e) => {setInputUnits(e.target.value)}}>
                    {Object.entries(unitValues[unitsType]).map(([key, value]) => <option key={key} value={key}>{key}</option>)}
                </select>
                {` `}To:{` `}
                <select name="unit2" onChange={(e) => setOutputUnits(e.target.value)}>
                    {Object.entries(unitValues[unitsType]).map(([key, value]) => <option key={key} value={key}>{key}</option>)}
                </select>
                <div>
                    <div className={UnitConversionAppStyles.notepadTitle}>Notepad:</div>
                    <textarea></textarea>
                </div>
                
            </form>
        </>
    );
}

export default UnitConversionApp;