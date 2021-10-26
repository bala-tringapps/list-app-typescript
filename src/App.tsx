import React,{useState} from 'react';
import './App.css';
import List from './components/list'
import AddToList from './components/AddToList';

export interface IState{
  people:{
    name:string
    age:number
    img:string 
    note?:string 

  }[]
}
function App() {
  const  [people,setPeople] = useState<IState["people"]>([

    {
      name:"Bogan",
      age:21,
      img: "https://static.toiimg.com/thumb/msid-86320687,imgsize-43106,width-400,resizemode-4/86320687.jpg",
      note:"cool"
    }
  ])
  

  return (
    <div className="App">
        <h1>List of Players</h1>
        <List people={people}/>
        <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
