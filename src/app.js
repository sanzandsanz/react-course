
import { addition, sub } from './components/Util.js';
import React from 'react';
import ReactDom from 'react-dom';

console.log('webpack is running');
console.log(addition(2,4));
console.log(sub(4,2));
console.log(sub(3, 10));


const template = <p> Hello World !! </p>;
ReactDOM.render(template, document.getElementById("app"))