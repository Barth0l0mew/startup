import React,{useContext} from "react";
import Context from "../context/context";
import './userInfo.css';
import Followers from '../../img/followers.svg';
import Following from '../../img/following.svg';
function UserInfo (){
  const{data,setData} = useContext (Context)
  return(
    <div className="user-info"> 
      <img className="user-info__foto" src={data.dataUser.avatar_url}>
    </img>
      {data.dataUser.name?<div className="user-info__userName">{data.dataUser.name}</div>:null}
      <a className="user-info__login" target={'_blank'} href={data.dataUser.html_url}>{data.dataUser.login}</a>
      
      <div className="user-info__footer">
        <div className="user-info__followers">
          <img className="user-info__followers-icon" src={Followers}></img>

          {data.dataUser.followers} followers</div>
        <div className="user-info__following">
        <img className="user-info__followers-icon" src={Following}></img>
        {data.dataUser.following} following</div>
      </div>
      
    </div>
  )
  }
export default UserInfo