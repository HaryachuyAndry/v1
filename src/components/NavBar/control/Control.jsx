import React from 'react';
import { NavLink } from 'react-router-dom';
import Control_style from './Control.module.css';

const Control = () => (
  <div className={Control_style.control}>
          <NavLink to="/security" activeClassName={Control_style.active}>Безпека</NavLink>
        </div>
);

export default Control;
