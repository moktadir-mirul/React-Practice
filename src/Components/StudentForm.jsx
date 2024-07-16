import { useContext } from "react";
import { StudentContext } from "../Context/Student";    

function StudentForm() {

const {submitHandler,studentName, editMode, changeHandler} = useContext(StudentContext)

   

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