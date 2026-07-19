import { useState } from 'react';
import icon from "../src/assets/pacman.svg" ;
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
          <div><InputField input="username" label="Username:"/></div>

          {/*----Password----*/}
          <InputField id="password" label="Password:"/>

          {/*----EndGoal----*/}
          <InputField label="What is your end goal?"/>
        </div>

      {/*----Login----*/}
      <button>Begin</button>
      </div>
    </div>
  )
}

export default App
