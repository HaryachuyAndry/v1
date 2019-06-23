import React from 'react';
// import { Route } from 'react-router-dom';
import imageStyle from './image.module.css';
// import RoomsBg from '../../../assets/img/rooms_bg.jpg';

const ImgRoom = props => (
  <div className={imageStyle.imageRoom}>
    <img src={require(`./../../../assets/img/${props.bgUrl}`)} alt="" />
  </div>
);

export default ImgRoom;
