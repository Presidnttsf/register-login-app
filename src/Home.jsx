import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [count, setCount] = useState(0)
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();


  function handleLogout() {
    localStorage.removeItem("loggedin")
    localStorage.removeItem("user")
    navigate("/login")
  }

  return (
    <>

      <h1>This is Home component</h1>
      <button onClick={handleLogout}>Logout</button>
      <span
        style={{
          marginRight: "15px",
          fontSize: "1rem",
          color: "#555",
        }}
      >
        <h3> Hello, {user.username}</h3>
      </span>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={count < 10 ? "card" : "card10"} >
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <div className="count"> count is {count} </div>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>


    </>
  )
}

export default Home



