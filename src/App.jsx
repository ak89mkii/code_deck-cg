// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Code_Deck<span className="blink_me"> |</span></h1>
      <h2>The Card Game</h2>
      <p>V_0.35.03312024</p>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <br></br>
      <br></br>      
      <div className='title'>
      <h2>Game Rules (Variant 01):</h2>
      </div>
      <br></br>
      <br></br>
      <div className="iframeBorder">
        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRohqIRTd15mcLTmXfKva4-QaCmzbjmEQ2-csYA5OjG-CiKt6x2M78ardC7A7IfPmgIN981nupt3s8D/pubhtml?widget=true&amp;headers=false" width="1000" height="800"></iframe>
      </div>
      <br></br>
      <br></br>
      <div className='title'>
      <h2>Game Rules (Variant 02):</h2>
      </div>
      <h1>COMING SOON!</h1>
      <hr className="solid"></hr>
        <p>Code_Deck: The Card Game &copy; 2022-2024 | A.I. Chasm Games | A Division of Ponder Enterprises LLC</p>
    </>
  )
}

export default App