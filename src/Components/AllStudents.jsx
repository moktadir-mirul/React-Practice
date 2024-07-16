

function AllStudents(props) {

    const {setStudentName, students, setStudents, setEditMode, setEditableStudent} = props;
 
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

    return(
        <div>
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
        </div>
    )
}

export default AllStudents;