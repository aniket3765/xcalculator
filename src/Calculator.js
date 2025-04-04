import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        if (value === 'C') {
            setInput('');
            setResult('');
        } else if (value === '=') {
            try {
                if (input.trim() === '') {
                    setResult('Error');
                    return;
                }
                const evalResult = eval(input);
                if (isNaN(evalResult)) {
                    setResult('NaN');
                } else if (!isFinite(evalResult)) {
                    setResult('Infinity');
                } else {
                    setResult(evalResult.toString());
                }
            } catch (error) {
                setResult('Error');
            }
        } else {
            setInput(prev => prev + value);
        }
    };

    return (
        <div className="calculator">
            <h1>Calculator</h1>
            <input
                type="text"
                value={input}
                readOnly
                className="calculator-input"
            />
            <div className="calculator-result">{result}</div>
            <div className="calculator-buttons">
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('/')}>/</button>
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('*')}>*</button>
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('-')}>-</button>
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={() => handleClick('.')}>.</button>
                <button onClick={() => handleClick('=')}>=</button>
                <button onClick={() => handleClick('+')}>+</button>
                <button onClick={() => handleClick('C')}>C</button>
            </div>
        </div>
    );
};

export default Calculator;