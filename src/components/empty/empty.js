import React from "react";
import Icon from '../../img/sprite.svg'
import './empty.css'
function Empty ({name,title}){
  return (
    <div className={`empty empty-${name}`}>
        <svg className={`icon icon-${name}`}>
          <use xlinkHref={`${Icon}#${name}`}></use>
        </svg>
      <div className="title">{title}</div>
    </div>
  )
}
export default Empty