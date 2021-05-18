import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.less';

function Title (props){
  let {title = '推荐',link="/"} = props;
  return <div className="title-box">
  <span>{title}</span>
  <NavLink to={link}>
    <span>
    更多
    </span>
  </NavLink>
  </div>
}

export default Title