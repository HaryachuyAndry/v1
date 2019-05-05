import React from 'react';
import HeadStyle from './Header.module.css';
import HeaderTop from './HeaderTop/HeaderTop';
import HeaderButtom from './HeaderButtom/HeaderButtom';

const Header = props => (
  <div className={HeadStyle.Header}>
    <HeaderTop />
    <HeaderButtom />
  </div>
);
export default Header;
