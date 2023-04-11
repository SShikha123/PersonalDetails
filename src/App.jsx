import Detail from './Component/Detail';
import './App.css';
import Form from './Component/Form';
import { useState } from 'react';

function App() {

  const DummyList=[
    {
      id:1,
      name:"Shikha",
      age : 23,
      city: "Gwalior"
    },
    {
      id:2,
      name:"Aditi",
      age : 23,
      city: "Pune"
    },
    {
      id:3,
      name:"Neha",
      age : 23,
      city: "Mumbai"
    },
  ]

  const[list,setList]=useState(DummyList);
  const DeleteEntry=(id)=>{
console.log(id);
setList(list.filter((task)=>task.id!==id));
  }

  const Receivevalue=(data)=>{
  setList([...list,data]);
  }
  return (
    <div className="App">
      <h1>Details</h1>
      {list.map((item)=> 
      //console.log(item)
       <Detail key ={item.id} items={item} OnDeleteHandler={DeleteEntry}/>
      )}
      <Form sendData={Receivevalue}/>
    </div>

  );
}

export default App;
