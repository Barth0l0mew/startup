import React, {useContext,} from "react";
import Context from "../context/context";
import './userRepos.css'
import Pagination from "../pagination/pagination";
import Repositories from "../repositories/repositories";
import Empty from "../empty/empty";

function UserRepo ({value}){

  const {data} = useContext(Context)
 
  return(
     <div className="user-Repo"> 
   {data.repo.length===0?<Empty name={value.repos.name} title={value.repos.title}></Empty>:
    <div className="user-Repo-wraper">
      <div className="user-Repo__info">Repositories ({data.dataUser.public_repos})</div>
       { data.repo.map((el,item)=>{return <Repositories value={el} key={item}></Repositories>})}
      <Pagination></Pagination>
     
     </div>
 }
     </div>
  )
}
export default UserRepo