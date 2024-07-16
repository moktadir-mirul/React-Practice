import { useContext } from "react";
import { StudentContext } from "../Context/Student";

function AbsentList() {

    const {students, toggleList} = useContext(StudentContext);

    return(
        <div>
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
    )
}

export default AbsentList;