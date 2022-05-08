import React from "react";
import './repositories.css'
function Repositories ({value}){
  return  (
    <div className="repo"> 
      <a className="repo__title" target={'_blank'} href={value.html_url}>{value.name}</a>
      <div className="repo__discription">{value.description}</div>
    </div>
  )
}
export default Repositories
