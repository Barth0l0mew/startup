import React, {useState, useEffect, useContext} from "react";
import './search.css'
import Context from "../context/context";
import Icon from '../../img/icon.svg'
function Search (){
  const {data,setData} = useContext (Context)
  const [value,setValue] = useState('')
  const [isTyping,setIsTyping] =useState(true)

 function onSubmit(event){
   event.preventDefault();
   if (value.trim()){
      setData({...data,currentPage:1, search:value})
      setIsTyping(false)
    }
   setValue('')
 }
 function fetching (userName){
  let info;
  fetch(`https://api.github.com/users/${userName}`)
  .then(response=> 
     response.ok?response.json():Promise.reject(response)
  )
  .then(inf=>{ 
    info=inf

    return fetch (`${inf.repos_url}?per_page=${data.setPage}&page=${data.currentPage}`)
  })
  .then(response=>response.json())
  .then(infRepo=>{
 
      setData({...data,repo:infRepo,dataUser:info,isLoading:false, isError:true})
   
  })
  .catch(error=>{
      setData({...data,dataUser:{},repo:[],currentPage:1, isError:false})
  }
  )


 }
 useEffect(()=>{ 
  
  if (isTyping){return}
  setData({...data,isLoading:true})
  fetching(data.search)
  
 },[isTyping,data.search,data.currentPage])
  
  return(
    <form className="search" onSubmit={onSubmit}> 
      <button className="search__btn" type="onSubmit">
        <img className="search__icon" src={Icon} alt="icon" ></img>
      </button>
      <input 
      className="search__input" 
      value={value}
      onChange={event=>{ setIsTyping(true)
        setValue(event.target.value)}}
      placeholder='Enter GitHub username'>       
      </input>
    </form>
  )
}
export default Search