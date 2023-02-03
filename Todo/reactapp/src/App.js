import './App.css';
import Header from './myComponents/Header'
import Main from './myComponents/Main'
import TodoItem from './myComponents/TodoItem';
import { useState } from 'react';

function OnDelete(todo){
  setTodos(todos.filter((e)=>{
    return e!==todo
  }))
}

function App() {
  const [todos,setTodos]  = useState([
  {
    sno:1,
    name:'Stocks',
    amount:"35%-amount"
  },
  {
    sno:2,
    name:'Cryptos',
    amount:'50%-amount'
  },
  {
    sno:3,
    name:'Bonds',
    amount:'15%-bonds'
}
])

  return (
    <>
      <Header div="aryan" data={todos} onDelete={OnDelete}/>
      <Main display={true}/>
      <TodoItem/>
    </>
  );
}

export default App;
