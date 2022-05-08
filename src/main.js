import React from "react";

import UserInfo from "./components/userInfo/userInfo"
import UserRepo from "./components/userRepos/userRepos";
function Main({value}){

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