import React, { useState, useEffect } from "react";

import CalculatorAppStyles from "./calculator-app.module.css";

const CalculatorApp = () => {
    const [output, setOutput] = useState('0');
    const [placeholder, setPlaceholder] = useState(null);
    const [operator, setOperator] = useState(null);
    const [secondNumberStarted, setSecondNumberStarted] = useState(false);


    const handleAddition = () => {
        const newOutput = parseFloat(placeholder) + parseFloat(output)
        setOutput(newOutput);
        setOperator(null);
        setPlaceholder(newOutput);
        setSecondNumberStarted(false);
    }

    const handleSubtraction = () => {
        const newOutput = parseFloat(placeholder) - parseFloat(output)
        setOutput(newOutput);
        setOperator(null);
        setPlaceholder(newOutput);
        setSecondNumberStarted(false);
    }

    const handleMultiplication = () => {
        const newOutput = parseFloat(placeholder) * parseFloat(output)
        setOutput(newOutput);
        setOperator(null);
        setPlaceholder(newOutput);
        setSecondNumberStarted(false);
    }

    const handleDivision = () => {
        if(output === '0') {
            setOutput('undefined')
            setOperator(null);
            setPlaceholder(null);
            setSecondNumberStarted(false);
        }
        else {
            const newOutput = parseFloat(placeholder) / parseFloat(output)
            setOutput(newOutput);
            setOperator(null);
            setPlaceholder(newOutput);
            setSecondNumberStarted(false);            
        }
    }




    const handleDigit = (e) => {
        if(output === 'undefined') {
            // do nothing
        }
        else if(operator && placeholder && !secondNumberStarted) {
            document.getElementById('calcOutput').innerHTML = e.target.innerHTML;
            setOutput(e.target.innerHTML)
            setSecondNumberStarted(true)
        }
        else if(output === '0') {
            setOutput(e.target.innerHTML)
        }
        else {
            console.log('append')
            setOutput(output + e.target.innerHTML)
        }
    }

    const handleOperator = (e) => {
        if(output === 'undefined') {
            // do nothing
        }
        else {
            const newOperator = e.target.innerHTML;
            if(operator == null) {
                setPlaceholder(output);
            }
            else if(operator != null && placeholder != null) {
                handleEquals();
            }
            setOperator(newOperator);
        }
        
        
        
        
        
    }

    const handleEquals = () => {
        if(operator === 'undefined') {
            // do nothing
        }
        else {
            if(operator && placeholder) {
                switch(operator) {
                    case '+':
                        handleAddition();
                        break;
                    case '-':
                        handleSubtraction();
                        break;
                    case 'x':
                        handleMultiplication();
                        break;
                    case '÷':
                        handleDivision();
                        break;
                }
            }
        }

    }

    const handleDecimal = () => {
        if(output === 'undefined') {
            // do nothing
        }
        else if(!output.includes('.')) {
            setOutput(output + '.');
        }
    }

    const handleClear = () => {
        setOutput('0');
        setPlaceholder(null);
        setOperator(null);
        setSecondNumberStarted(false);
    }

    return (
        <>
            <div className={CalculatorAppStyles.calculatorAppOuterContainer}>
            <div id="calcOutput" className={CalculatorAppStyles.calculatorScreen}>{output}</div>
            <div className={CalculatorAppStyles.numpadUpperRow}>
                <button onClick={handleOperator} className={CalculatorAppStyles.calculatorButton}>+</button>
                <button onClick={handleOperator} className={CalculatorAppStyles.calculatorButton}>-</button>
                <button onClick={handleOperator} className={CalculatorAppStyles.calculatorButton}>x</button>
                <button onClick={handleOperator} className={CalculatorAppStyles.calculatorButton}>÷</button>
            </div>
            <div className={CalculatorAppStyles.numpadInnerContainer}>
                <div>
                    <div className={CalculatorAppStyles.numpadRow}>
                        <button onClick={handleDigit} className={CalculatorAppStyles.calculatorButton}>1</button>
                        <button onClick={handleDigit} className={CalculatorAppStyles.calculatorButton}>2</button>
                        <button onClick={handleDigit} className={CalculatorAppStyles.calculatorButton}>3</button>
                    </div>
                    <div className={CalculatorAppStyles.numpadRow}>
                        <button onClick={handleDigit} className={CalculatorAppStyles.calculatorButton}>4</button>
                        <button onClick={handleDigit} className={CalculatorAppStyles.calculatorButton}>5</button>
                        <button onClick={handleDigit} className={CalculatorAppStyles.calculatorButton}>6</button>
                    </div>
                    <div className={CalculatorAppStyles.numpadRow}>
                        <button onClick={handleDigit} className={CalculatorAppStyles.calculatorButton}>7</button>
                        <button onClick={handleDigit} className={CalculatorAppStyles.calculatorButton}>8</button>
                        <button onClick={handleDigit} className={CalculatorAppStyles.calculatorButton}>9</button>
                    </div>
                    <div className={CalculatorAppStyles.numpadRow}>
                        <button onClick={handleDecimal} className={CalculatorAppStyles.calculatorButton}>.</button>
                        <button onClick={handleDigit} className={CalculatorAppStyles.calculatorButton}>0</button>
                        <button onClick={handleClear} className={CalculatorAppStyles.calculatorButton}>C</button>
                    </div>
                </div>
                <button onClick={handleEquals} className={CalculatorAppStyles.calculatorButton}>=</button>
            </div>
            </div>
        </>
    );
}

export default CalculatorApp;