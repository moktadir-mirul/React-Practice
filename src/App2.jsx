import { useState } from "react";


function App2() {
    const [studentName, setStudentName] = useState('');
    const [students, setStudents] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editableStudent, setEditableStudent] = useState(null);

    const changeHandler =(event) => {
        setStudentName(event.target.value)
    };

    const submitHandler = (data) => {
        data.preventDefault();
        if(studentName.trim() === '') return alert('Please enter a valid name');
        editMode ? updateHandler():createHandler();
    }

    const createHandler = () => {
        const newStudent = {
            id: Date.now() + '',
            title: studentName,
            isPresent: undefined,
        }
        setStudents([...students, newStudent]);
        setStudentName('');
    }

    const updateHandler =() => {
        const updatedStudent= students.map((student) => {
            if(student.id === editableStudent.id) {
                return {...student, title: studentName}
            }
            return student;
        })
        setStudents(updatedStudent);
        setEditMode(false);
        setStudentName('');
        setEditableStudent(null);
    }

    const editHandler = (student) => {
        setEditMode(true);
        setStudentName(student.title);
        setEditableStudent(student);
    }

    const removeHandler = (studentID) => {
        const updatedList = students.filter((student) => student.id !== studentID);
        setStudents(updatedList)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='Enter Student Name' className='inputField' value={studentName} onChange={changeHandler} />
                <button>{editMode ? 'Update Student Name': 'Create Student'}</button>
            </form>
            <div className="All-Students">
                <div className="students">
                    <h2>All Students</h2>
                    {students.map((student) => (
                        <li key={student.id}>
                            <span>{student.title}</span>
                            <button onClick={() => editHandler(student)}>Edit</button>
                            <button onClick={() => removeHandler(student.id)}>Delete</button>
                            <button onClick={() => sentToPresentList(student)}>Add to Present List</button>
                            <button onClick={() => sentToAbsentList(student)}>Add to Absent List</button>
                        </li>
                    ))}
                </div>
                <div className="Present">
                    <h2>Present List</h2>
                    {students.filter((student) => student.isPresent === true).map((student) => (
                        <li key={student.id}>
                            <span>{student.title}</span>
                            <button>Accidentally Added</button>
                        </li>
                    ))}
                </div>
                <div className="Absent">
                    <h2>Absent List</h2>
                    {students.filter((student) => student.isPresent === false).map((student) => (
                        <li key={student.id}>
                            <span>{student.title}</span>
                            <button onClick={() => toggleList(student)}>Accidentally Added</button>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default App2;