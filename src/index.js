import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'

// function Welcome(props) {
//   return <h1>Hello</h1>;
// }
// // const element = <Welcome />

// const name = "Jon Snow";
// const myFunc = ()=>{
//   return "Jon Snow"
// }

// const compare = (a, b)=>{
//   if (a>b) return "greater"
//   return "lower or equal"
// }

// const a = 4;
// const b = 9;

// const Greeting = ()=>{
//   const name = {
//     firstname: "hoang",
//     lastname: "nguyen",
//     age: 28,
//   }
//   const age = 28
//   return (
//     <div>
//       <h1 className="title" style={{textAlign: 'center'}}> {name.firstname} {name.lastname} {age}</h1>
//     </div>)
// }

// const element = <Greeting/>

ReactDOM.render(
  <App/>
  , document.getElementById('root')
);

