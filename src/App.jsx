import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="Body">
      <div id='homepage-elements'>
        {/*----Icon----*/}
        <img src="src/assets/pacman.svg"/>

        {/*----Username----*/}
        <div class="input" id="username">
          <h3>Username: </h3>
          <input type="text"></input>
        </div>

        {/*----Password----*/}
        <div class="input">
          <h3>Password: </h3>
          <input type="text"></input>
        </div>

      {/*----Login----*/}
      <button>Begin</button>
      </div>
    </div>
  )
}

export default App
