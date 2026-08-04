import { useState } from 'react';
import icon from "../src/assets/RP1.png" ;
import './App.css';
import InputField from './components/InputField';
  
function App() {

  return (
    <div className="Body">
      <div id='homepage-elements'>
        {/*----Icon----*/}
        <img src={icon}/>

        <div id="interactive-elements">
          {/*----Username----*/}
          <InputField id="username" label="Username:"/>

          {/*----Password----*/}
          <InputField id="password" label="Password:" />
        </div>

      {/*----Login----*/}
      <button class="cta-button">Create Account</button>
      {/*<footer><h2>Rescript</h2></footer>*/}
      </div>
    </div>

  )
}

export default App
