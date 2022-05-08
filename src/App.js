import React, {useState,useEffect} from 'react';
import Context from './components/context/context';
import './App.css';
import Empty from './components/empty/empty';
import Loading from './components/loading/loading';
import Header from './header';
import Main from './main';

function App() {
  // const [data,setData] = useState({
  //   search:'',
  //   isTyping:true,
  //   dataUser:'',
  //   repo:'',
  //   isLoading:false,
  //   error:'',
  //   errorRepos:''
  // })
  const [data,setData] = useState({ search:'',dataUser:{},isLoading:false,isError:true,repo:[],currentPage:1,setPage:4
  })
  // console.log ('app',data)
  const [empty,setEmpty] = useState(
    { search:{
        name:'search',
        title:'Start with searching a GitHub user'
      },
      user:{
        name:'not-user',
        title:'User not found'
      },
      repos:{
        name:'not-repos',
        title:'Repository list is empty'
      }
    })
    // useEffect(()=>{
    //     if (data.isTyping){return}
    //     setData({...data
    //       ,isLoading:true})
    //     fetchUser(data.search);
        
       
    //   },[data.isTyping,data.search])
    //   const fetchUser =(userName)=>{
    //     let info;
    //     fetch(`https://api.github.com/users/${userName}`, {
    //       headers: {
    //           'Authorization': 'token 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',
    //       }
    //   })
    //     .then(response=> 
    //        response.ok?response.json():Promise.reject(response)
    //     )
    //     .then(inf=>{ 
    //       info=inf
    //       setData({...data,dataUser:inf, isLoading:false})
    //       console.log (info)
    //       return fetch (inf.repos_url, {
    //         headers: {
    //             'Authorization': 'token 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',
    //         }
    //       })
    //     })
    //     .then(response=>response.json())
    //     .then(infRepo=>{
    //         setData({...data,repo:infRepo,dataUser:info,isLoading:false,error:''})
    //     })
    //     .catch(error=>
    //      { setData({...data, error:error})
    //        console.log('UserName not found ', data.error)}
    //     )
        
    // }
  
  return (
  <Context.Provider value={{data,setData}}>
    <div className="App">
      <Header></Header>
      
      {/* {!data.search?<Empty name={empty.search.name} title={empty.search.title}></Empty>:
      (data.isLoading?<Loading></Loading>:<Main></Main>)} */}
      {/* {!data.search?<Empty name={empty.search.name} title={empty.search.title}></Empty>:
      (data.isLoading?<Loading></Loading>:<Main></Main>)} */}
      {!data.search?
      <Empty name={empty.search.name} title={empty.search.title}></Empty>:
      (data.isLoading?<Loading></Loading>:
      (!data.isError?<Empty name={empty.user.name} title={empty.user.title}></Empty>:
      <Main value={empty}></Main>)
      )}
    
    </div>
    
    </Context.Provider>
  );
}

export default App;
