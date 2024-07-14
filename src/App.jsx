import { useState } from 'react';   
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {
  const [counter, setCounter] = useState(100);
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
      <h1>The value of the count is {counter}</h1>
      <button onClick={() => setCounter(counter +1)}>Increase By 1</button>
      <button onClick={() => setCounter(counter-1)}>Decrease By 1</button>
    </>
  )
}

export default App
