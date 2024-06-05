import { useState } from 'react'

import './App.css'
import react,{useState} from "react";
import "./index.css";
const sign-up = ( => )
function App() {
  const [count, setCount] = useState(0)
  const [action,setAction] = useState("signup");
  return (
    <>
    <div>
    <div classname='container'>
    <div classname="header">
        <div class='text'>{action}</div>
        <div class='underline'></div>

    </div>
    <div class='inputs'>
        <div calss='input'>
            <input type='text' placeholder="Name"></input>
        </div>
        <div calss='input'>
            <input type='email' placeholder="Email Id"></input>
        </div>
        <div calss='input'>
            <input type='password' placeholder="Password"></input>
        </div>
        <div calss='input'>
            <input type='conform password' placeholder="Conform Password"></input>
        </div>
    </div>
    <div calss='submit container'>
        <div class={action==="signup"?"submit gray"}>sign-up</div>
    </div>
</div>
</div>
    </>
  )
}

export default App
