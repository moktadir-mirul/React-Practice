import { useState } from 'react';   
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {

  const [noteTitle, setNoteTitle] = useState('');
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

  const changeTitleHandler = (event) => {
    setNoteTitle(event.target.value);
  }

  const submitHandler = (data) => {
    data.preventDefault();
    if(noteTitle.trim() === '') return alert('Please enter a valid note')
      editMode===true ? updateHandler():createHandler();
  }

  const AllNotes = () => {
    fetch('http://localhost:3000/notes')
    .then((res) => res.json())
    .then((data) => setNotes(data))
  }

  useEffect(() => {
    AllNotes()
  }, [])

  const updateHandler = () => {
    fetch(`http://localhost:3000/notes/${editableNote.id}`, {
      method: "PATCH",
      body: JSON.stringify({title: noteTitle}),
      headers: {'content-type': 'application/json'}
    }) 
    .then((res) => res.json())
    .then(() => {
      AllNotes()
    })
    setEditMode(false);
    setEditableNote(null);
    setNoteTitle('');
  }

  const createHandler = () => {
    const newNote = {
      id: Date.now() + '',
      title: noteTitle,
    }
    fetch('http://localhost:3000/notes', {
      method: "POST",
      body: JSON.stringify(newNote),
      headers:{'content-type':'application/json'}
    })
    .then((res) => res.json())
    .then(() => {AllNotes()})
    setNoteTitle('');
  }

  const editHandler = (note) => {
    setEditMode(true);
    setNoteTitle(note.title);
    setEditableNote(note);
  }

  const removeHandler = (noteId) => {
    fetch(`http://localhost:3000/notes/${noteId}`, {
      method: "DELETE"
    })
    .then((res) => res.json())
    .then(() => {AllNotes()})
  }

  return (
    <div>
      <form onSubmit={submitHandler} style={{border: editMode ? '1px solid red':''}}>
        <input placeholder='Enter Note Name' className='inputField' type="text" value={noteTitle} onChange={changeTitleHandler}/>
        <button>{editMode===true ? 'Update Note': 'Add Note'}</button>
      </form>
        {notes.map((note) => (
          <li id='point'>
            <span>{note.title}</span>
            <button onClick={() => editHandler(note)}>Edit</button>
            <button onClick={() => removeHandler(note.id)}>Delete</button>
          </li>
        ))}
      
    </div>
  )
}

export default App
