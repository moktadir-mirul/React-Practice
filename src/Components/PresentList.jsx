import { useContext } from "react";
import { StudentContext } from "../Context/Student";

function PresentList() {

    const {StudentStates, dispatchS} = useContext(StudentContext);

    return (
        <div>
            <div className="Present">
                <h2>Present List</h2>
                {StudentStates.students.filter((student) => student.isPresent === true).map((student) => (
                    <li key={student.id}>
                        <span>{student.title}</span>
                        <button onClick={() => dispatchS({type: 'UPDATED-STATUS', payload: {id: student.id, isPresent: !student.isPresent}})}>Accidentally Added</button>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default PresentList;