import React,{useState,useContext} from "react";

import UserInfo from "./components/userInfo/userInfo"

import UserRepo from "./components/userRepos/userRepos";
import Context from "./components/context/context";
import Empty from "./components/empty/empty";
function Main({value}){
    const {data,setData}= useContext(Context)
    console.log ('main',value.repos)
  // console.log (data.repo||data.repo.length===0)
  return(
    <main className="main">
       <div className="container">
          <div className="main-wrapper">
           <UserInfo></UserInfo>
          
           <UserRepo value={value}></UserRepo>
        
        </div>
       </div>
    </main>
  )
}
export default Main