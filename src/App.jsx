import { useState } from 'react';   
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

  const updateHandler = () => {
    const updatedNote = notes.map((note) => {
      if(note.id ===editableNote.id) {
        return {...note, title: noteTitle};
      }
      return note;
    })
    setNotes(updatedNote);
    setEditMode(false);
    setEditableNote(null);
    setNoteTitle('');
  }

  const createHandler = () => {
    const newNote = {
      id: Date.now() + '',
      title: noteTitle,
    }
    setNotes([newNote, ...notes]);
    setNoteTitle('');
  }

  const editHandler = (note) => {
    setEditMode(true);
    setNoteTitle(note.title);
    setEditableNote(note);
  }

  const removeHandler = (noteId) => {
    const updatedArr = notes.filter((note) => note.id !== noteId);
    setNotes(updatedArr);
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
