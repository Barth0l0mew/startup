import React,{useContext}  from "react";
import './pagination.css'
import {ReactComponent as Arrow} from "../../img/right-default.svg";
import Context from "../context/context";
// function Pagination ({prePage,total,getPage,currentPage}){
//   let  pageNumber = []
//   let page = Math.ceil(total/prePage)

//   let pageState=0;
//   let pageSort=[];
//   let collPage=3;
 
//   const lastRepo = currentPage*prePage;
//   const firstRepo = lastRepo - prePage+1;
//   for (let i=1;i<=page; i++){
//     pageNumber.push(i);
//   }
//   if (page <5){
//     pageSort=pageNumber
//   }else {
//     if (currentPage<collPage){
//       pageSort=pageNumber.slice(pageState,pageState+collPage).concat('...',page)
//     }
//     if (currentPage===collPage){
//       pageSort=pageSort.concat(1,pageNumber.slice(currentPage-2,currentPage+1)).concat('...',page)
//     }
//     if (currentPage<=(page-collPage)&&currentPage>collPage){
//       pageSort=pageSort.concat(1,'...',pageNumber.slice(currentPage-2,currentPage+1)).concat('...',page)
//     }
//     if (currentPage===(page-collPage+1)){
//       pageSort=pageSort.concat(1,'...',pageNumber.slice(currentPage-2,currentPage+1)).concat(page)
//     }
//     if (currentPage>page-collPage+1){
//     pageSort=pageSort.concat(1,'...',pageNumber.slice(page-collPage,page))
//     }

//   }
  
//   return (
//     <div className="pagination">
//       {firstRepo}-{lastRepo} of {total} items
//       <Arrow className="pagination__left" 
//       onClick={
//         !(currentPage===1)?()=>getPage(currentPage-1):null}></Arrow>
//       {pageSort.map((el,item)=>{
//         return <a 
//         className={el===currentPage?'pagination__item active':'pagination__item'} 
//         href='#' 
//         key={item} 
//         onClick={()=> {
//           if (el=='...'&&item<currentPage){return getPage(currentPage-2)}
//           if (el=='...'&&item>currentPage){return getPage(currentPage+2)}
//          return getPage(el)}}>{el}</a>
//       })}
//        <Arrow className="pagination__right"
//        onClick={
//         !(currentPage===page)?()=>getPage(currentPage+1):null}></Arrow>
      
//     </div>
//   )
// }
function Pagination(){
  const {data,setData}= useContext(Context)
  const page= Math.ceil(data.dataUser.public_repos/data.setPage)
  const lastRepo = data.currentPage*data.setPage;
  const firstRepo = lastRepo - data.setPage+1;
  let  pageNumber = []
  let pageSort=[]
  let pageState=0;
  let collPage=3
  for (let i=1 ; i <=page ;i++){
    pageNumber.push(i)
  }
    if (page <5){
    pageSort=pageNumber
  }else {
    if (data.currentPage<collPage){
      pageSort=pageNumber.slice(pageState,pageState+collPage).concat('...',page)
    }
    if (data.currentPage===collPage){
      pageSort=pageSort.concat(1,pageNumber.slice(data.currentPage-2,data.currentPage+1)).concat('...',page)
    }
    if (data.currentPage<=(page-collPage)&&data.currentPage>collPage){
      pageSort=pageSort.concat(1,'...',pageNumber.slice(data.currentPage-2,data.currentPage+1)).concat('...',page)
    }
    if (data.currentPage===(page-collPage+1)){
      pageSort=pageSort.concat(1,'...',pageNumber.slice(data.currentPage-2,data.currentPage+1)).concat(page)
    }
    if (data.currentPage>page-collPage+1){
    pageSort=pageSort.concat(1,'...',pageNumber.slice(page-collPage,page))
    }

  }
  return (
    <div className="pagination">
      {firstRepo}-{firstRepo+data.repo.length-1} of {data.dataUser.public_repos}
      <Arrow className="pagination__left" 
        onClick={
        !(data.currentPage===1)?()=>setData({...data, currentPage:data.currentPage-1}):null}></Arrow>
      {pageSort.map((el,item)=>{
        return <a 
                className={el===data.currentPage?'pagination__item active':'pagination__item'} 
                href='#' 
                key={item} 
                onClick={()=> {
                  if (el=='...'&&item<data.currentPage){return setData({...data, currentPage:data.currentPage-2})}
                  if (el=='...'&&item>data.currentPage){return setData({...data, currentPage:data.currentPage+2})}
                  return setData({...data,currentPage:el})}}>{el}</a>
      })}
      <Arrow className="pagination__right" 
        onClick={
        !(data.currentPage===page)?()=>setData({...data, currentPage:data.currentPage+1}):null}></Arrow>
    </div>
    
  )
}
export default Pagination