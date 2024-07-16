import { useContext } from "react";
import { StudentContext } from "../Context/Student";

function AllStudents() {

const {students, editHandler, removeHandler, sentToAbsentList, sentToPresentList} = useContext(StudentContext);
    

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