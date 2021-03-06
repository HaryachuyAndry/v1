import React from 'react';
import HeadStyle from './Header.module.css';
import HeaderTop from './HeaderTop/HeaderTop';
import HeaderButtom from './HeaderButtom/HeaderButtom';

const Header = props => (
  <div className={HeadStyle.Header}>
    <HeaderTop />
    <HeaderButtom buttonEdit={props.buttonEdit} roomData={props.roomData} />
  </div>
);
export default Header;
