import React from 'react';
import bin2dec from './bin2dec';

const convert = (e) => {
  e.preventDefault();
  const binary = document.querySelector('.input-bin').value;
  const result = document.querySelector('.result-dec');
  result.textContent = `Result is ${bin2dec(binary)}`;
};

const Bin2Dec = () => (
  <div className="chapter-bin2dec">
    <h2>Convert binary number to decimal</h2>
    <input className="input-bin" type="text" placeholder="Write some binary number" />
    <input type="button" value="Convert" onClick={convert} />
    <div className="result-dec"></div>
  </div>
);

export default Bin2Dec;
