import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { type } from 'os';
import Inputfield from './features/Inputfield';


// now first topic is types:
//let name:string; //you can just assign string
//let age:number;  //you can just assign number
//let isStudent:boolean;  //you can just assign boolean
//let hobbies:string[];  //you can just assign string array unlimted length
//let myHobbies:number[];  //you can just assign number array unlimited length
// now tuple :
// tuple is the fixed leght of array
// let role:[string, number];
// role=["raheel", 2]
// its a fixed length array means  tuple
// now obj:
// type Person={
//   name:string;
//   age:number
// }
// this is alias
// alias means first define object type
// alias is define by tow method with type or interface

// let person : Person={
//     name:"Raheel",
//     age:12,
    
// }
// now union in typescript
// union means you can define one more type union symbol is |
// let age:number|string;
// age=2
// function myName(name:string){
//    console.log(name);
// } 
// myName("Raheel")

// now interface
//  first type
// type Person={
//   name:string;
//   age:number;
// }
// let person:Person={
//   name:"Raheel",
//   age:12
// }
// now interface
// interface Person{
//       name:string;
//       age:number;


// }
// let person:Person={
//   name:"Raheel",
//   age:13
// }
  // now React+ts

  // for React function Componenet you hav eto defined React.Fc type in Component
const App:React.FC=()=>{
  return(
    <>
    <div className='App'>
       <h1>Todo App</h1>
       <Inputfield />
       </div>
    </>
  )
}

export default App;
