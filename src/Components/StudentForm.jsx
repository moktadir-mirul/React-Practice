

function StudentForm(props) {

const {studentName, setStudentName, students, setStudents, editMode, setEditMode, editableStudent, setEditableStudent} = props;

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

    return(
        <div>
            <form onSubmit={submitHandler}>
            <input type="text" placeholder='Enter Student Name' className='inputField' value={studentName} onChange={changeHandler} />
            <button>{editMode ? 'Update Student Name': 'Create Student'}</button>
            </form>
        </div>
    )
}

export default StudentForm;