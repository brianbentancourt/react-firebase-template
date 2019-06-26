import React from 'react'
import logo from '../../logo.svg'
import './home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Show the <code>code</code> in <a href="https://github.com/brianbentancourt/react-firebase-template" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
        <Link
          className="App-link"
          to="/chat"
          rel="noopener noreferrer"
        >
          Go to the chat example
        </Link>
      </header>
    </div>
  )
}
