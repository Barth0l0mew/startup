import React, {useState,useContext,useEffect} from "react";
import Context from "../context/context";
import './userRepos.css'
import Pagination from "../pagination/pagination";
import Repositories from "../repositories/repositories";
import Empty from "../empty/empty";

function UserRepo ({value}){

  const {data,setData} = useContext(Context)
   console.log ('repo',data)
  const [currentPage,setCurrentPage] = useState (1)
  const [prePage,setPrePage] = useState(4)

  const lastRepo = currentPage*prePage;
  const firstRepo = lastRepo - prePage;
  const currentData = data.repo.slice(firstRepo,lastRepo);

  function getPage (number){
    setCurrentPage(number)
  }
  console.log ('user repo', value)
  return(
     <div className="user-Repo"> 
   {data.repo.length===0?<Empty name={value.repos.name} title={value.repos.title}></Empty>:
    <div className="user-Repo-wraper">
      <div className="user-Repo__info">Repositories ({data.dataUser.public_repos})</div>
       { currentData.map((el,item)=>{return <Repositories value={el} key={item}></Repositories>})}
      <Pagination></Pagination>
     
     </div>
 }
     </div>
  )
}
export default UserRepo