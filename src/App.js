import React, {useState,useEffect} from 'react';
import Context from './components/context/context';
import './App.css';
import Empty from './components/empty/empty';
import Loading from './components/loading/loading';
import Header from './header';
import Main from './main';

function App() {

  const [data,setData] = useState(
    { search:'',
    dataUser:{},
    isLoading:false,
    isError:true,
    repo:[],
    currentPage:1,
    setPage:4
  })

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
   
  return (
  <Context.Provider value={{data,setData}}>
    <div className="App">
      <Header></Header>
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
