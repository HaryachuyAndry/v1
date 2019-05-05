import React from 'react';
import image1 from '../assets/img/room1.jpg';
import image2 from '../assets/img/room2.jpg';
import image3 from '../assets/img/room3.jpg';

const a = () => (
  <div>
    <img src={image1} alt="s" />
  </div>
);
const b = () => (
  <div>
    <img src={image2}alt="s" />
  </div>
);
const c = () => (
  <div>
    <img src={image3}alt="s" />
  </div>
);


const dataRoom = [
  { path: '/1', nameImg: a },
  { path: '/2', nameImg: b },
  { path: '/3', nameImg: c },
]

export default dataRoom;
