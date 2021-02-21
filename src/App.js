import React from 'react'
import RulesHook from './component/RulesHook'
import UseStateArray from './component/UseStateArray'
import UseStateObject from './component/UseStateObject'
import ShortCirEval from './component/ShortCirEval'
import BasicForms from './component/forms/BasicForms'
import UseEffact1 from './component/useeffact/UseEffact1'
import './App.css'

const App = () => {

  //console.log(useState("Hooks Intro Before"));

  //let firstname = useState
  //let name = "Hooks Intro";

  // const [name,setname] =useState('Hooks intro before');
  // const changeName = () => {
  //   if (name === 'Hooks intro before') {
  //     setname('Hooks intro After');
  //   }
  //   if (name === 'Hooks intro After') {
  //     setname('Hooks intro before');
  //   }
  // }
  // /* <h1>{ name }</h1>
  //     <button onClick={ changeName } >Click here</button> */

  return (
    <div>
        <RulesHook /><hr/>
        <UseStateArray /><hr/>
        <UseStateObject /><hr/>
        <ShortCirEval /><hr/>
        <BasicForms /><hr/>
        <UseEffact1 /><hr/>
    </div>
  )
}

export default App
