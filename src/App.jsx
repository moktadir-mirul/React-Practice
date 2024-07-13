import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {
  const [count, setCount] = useState(0)
  const langName = ['C++', 'PHP', 'Java', 'JavaScript', 'Python'];

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          The Count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <h2>The name of the languages are-</h2>
        <ul>
          {langName.map((langs) => 
          <li key={langs}>{langs}</li>
          )}
        </ul>
        <h1 style={{color: 'violet'}}>Person Details</h1>
        <h3 style={{color: 'brown'}}>Name: {props.name}</h3>
        <h3 style={{color: 'brown'}}>Age: {props.age}</h3>
        <p><strong>Language Skills:</strong>{props.languages.map((langu) => <li key={langu}>{langu}</li>)}</p>
        <p><strong>Media Name:</strong>{props.links.map((media) => <li key={media}>{media.mediaName}</li>)}, <strong>Address:</strong>{props.links.map((link) => <li key={link}>{link.mediaLink}</li>)}</p>
      </div>
    </>
  )
}

export default App
