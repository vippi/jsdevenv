import './index.css';

import numeral from 'numeral';

const courseValue = numeral(40).format('$0,0.00');

//debugger;

console.log(`плачу ${courseValue} за этот курс`); // eslint-disable-line no-console