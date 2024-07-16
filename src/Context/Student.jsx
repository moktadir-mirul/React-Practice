import { createContext } from "react";
import App2 from "../App2";
import { useState } from "react";

export const StudentContext = createContext();

function StudentProvider(props) {
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

    const sentToPresentList = (student) => {
        if(student.isPresent === true || student.isPresent === false) return alert(`The student is already in ${student.isPresent ? 'Present List':'Absent List'}`)
        const presentList = students.map((item) => {
            if(student.id === item.id) {
                return {...item, isPresent: true}
            }
            return item
        });
        setStudents(presentList);
    }

    const sentToAbsentList = (student) => {
        if(student.isPresent === true || student.isPresent === false) return alert(`The student is already in ${student.isPresent ? 'Present List':'Absent List'}`)
        const absentList= students.map((item) => {
            if(student.id === item.id) {
                return{...item, isPresent: false}
            }
            return item;
        })
        setStudents(absentList);
    } 

    const toggleList = (student) => {
        const updatedList = students.map((item) => {
            if (item.id === student.id) {
                return{...item, isPresent:!item.isPresent}
            }
            return item;
        })
        setStudents(updatedList);
    }

    const CtxValue = {
                        studentName,
                        setStudentName,
                        students,
                        setStudents,
                        editMode,
                        setEditMode,
                        editableStudent,
                        setEditableStudent,
                        changeHandler,
                        submitHandler,
                        createHandler,
                        updateHandler,
                        removeHandler,
                        editHandler,
                        sentToPresentList,
                        sentToAbsentList,
                        toggleList
                    }

    return (
        <StudentContext.Provider value={CtxValue}>
            {props.children}
        </StudentContext.Provider>
    )
}

export default StudentProvider;