import './index.css';
import symbol from './symbol.svg';

const Img = new Image();
Img.src = symbol;
document.querySelector('header').appendChild(Img);
