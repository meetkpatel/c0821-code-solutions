import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const images = ['https://media.giphy.com/media/SggILpMXO7Xt6/giphy.gif', 'https://media.giphy.com/media/4pGwaW3nuRD1e/giphy.gif', 'https://media.giphy.com/media/mep0oj3Htyl0c/giphy.gif', 'https://media.giphy.com/media/MaXYVi4y8xqcFeotvt/giphy.gif', 'https://media.giphy.com/media/7702jh3NsloOseiDUk/giphy-downsized-large.gif'];

ReactDOM.render(
  <Carousel images={images} />,
  document.querySelector('#root')
);
