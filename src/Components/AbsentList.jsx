import { useContext } from "react";
import { StudentContext } from "../Context/Student";

function AbsentList() {

    const {StudentStates, dispatchS} = useContext(StudentContext);

    return(
        <div>
            <div className="Absent">
                <h2>Absent List</h2>
                {StudentStates.students.filter((student) => student.isPresent === false).map((student) => (
                    <li key={student.id}>
                        <span>{student.title}</span>
                        <button onClick={() => dispatchS({type: 'UPDATED-STATUS', payload: {id: student.id, isPresent: !student.isPresent}})}>Accidentally Added</button>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default AbsentList;