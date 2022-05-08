import React, {useContext} from "react";
import Context from "../context/context";
import './repositories.css'
function Repositories ({value}){

  const {data,setData} = useContext(Context)
  return  (
    <div className="repo"> 
      <a className="repo__title" target={'_blank'} href={value.html_url}>{value.name}</a>
      <div className="repo__discription">{value.description}</div>
    </div>
  )
}
export default Repositories
