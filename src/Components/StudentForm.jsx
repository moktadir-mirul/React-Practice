import { useContext } from "react";
import { StudentContext } from "../Context/Student";    

function StudentForm() {

const {submitHandler,StudentStates, dispatchS} = useContext(StudentContext);

   

    return(
        <div>
            <form onSubmit={submitHandler}>
            <input type="text" placeholder='Enter Student Name' className='inputField' value={StudentStates.studentName} onChange={(event) => dispatchS({type: 'CHANGE-HANDLER', payload: event.target.value})} />
            <button>{StudentStates.editMode ? 'Update Student Name': 'Create Student'}</button>
            </form>
        </div>
    )
}

export default StudentForm;