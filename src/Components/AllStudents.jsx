import { useContext } from "react";
import { StudentContext } from "../Context/Student";

function AllStudents() {

const {StudentStates, dispatchS} = useContext(StudentContext);
    

    return(
        <div>
            <div className="students">
                <h2>All Students</h2>
                {StudentStates.students.map((student) => (
                    <li key={student.id}>
                        <span>{student.title}</span>
                        <button onClick={() => dispatchS({type:'EDIT-HANDLER', payload: student})}>Edit</button>
                        <button onClick={() => dispatchS({type:'REMOVE-HANDLER', payload: student.id})}>Delete</button>
                        <button onClick={() => dispatchS({type: 'UPDATED-STATUS', payload: {id: student.id, isPresent: true}})}>Add to Present List</button>
                        <button onClick={() => dispatchS({type: 'UPDATED-STATUS', payload: {id: student.id, isPresent: false}})}>Add to Absent List</button>
                    </li>
                    ))}
            </div>
        </div>
    )
}

export default AllStudents;