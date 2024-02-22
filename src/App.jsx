import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('');

  const displayContent = (content) => {
    setResult(result + content);
  };

  const clearScreen = () => {
    setResult('');
  };

  const calculateResult = () => {
    try {
      const formattedResult = eval(result).toLocaleString();
      setResult(formattedResult);
    } catch {
      setResult('Error');
    }
  };

  const removeItem = () => {
    setResult(result.slice(0, -1));
  };

  const handleOperator = (operator) => {
    setResult(result + operator);
  };

  return (
    <div className="container">
      <div className="calculator">
        <div id="calc">
          <div className="display">
            <input
              type="text"
              id="calc-display"
              value={result}
              disabled
              style={{ height: '100px', textAlign: 'right', whiteSpace: 'pre-line' }}
            />
          </div>
          <form>
            <input type="button" value="C" className="keys" onClick={clearScreen} />
            <input type="button" value="÷" className="keys" onClick={() => handleOperator('/')} />
            <input type="button" value="x" className="keys" onClick={() => handleOperator('*')} />
            <input type="button" value={'Del'} className="keys" onClick={removeItem} />
            <br />

            <input type="button" value="7" className="keys" onClick={() => displayContent('7')} />
            <input type="button" value="8" className="keys" onClick={() => displayContent('8')} />
            <input type="button" value="9" className="keys" onClick={() => displayContent('9')} />
            <input type="button" value="-" className="keys" onClick={() => handleOperator('-')} />
            <br />

            <input type="button" value="4" className="keys" onClick={() => displayContent('4')} />
            <input type="button" value="5" className="keys" onClick={() => displayContent('5')} />
            <input type="button" value="6" className="keys" onClick={() => displayContent('6')} />
            <input type="button" value="+" className="keys" onClick={() => handleOperator('+')} />
            <br />

            <input type="button" value="1" className="keys key2" onClick={() => displayContent('1')} />
            <input type="button" value="2" className="keys key2" onClick={() => displayContent('2')} />
            <input type="button" value="3" className="keys key2" onClick={() => displayContent('3')} />
            <input type="button" value="=" id="equals" className="set" onClick={calculateResult} />
            <br />

            <input type="button" value="%" className="keys key3 bottom" onClick={() => displayContent('%')} />
            <input type="button" value="0" className="keys key3 bottom" onClick={() => displayContent('0')} />
            <input type="button" value="." className="keys key3 bottom" onClick={() => displayContent('.')} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
