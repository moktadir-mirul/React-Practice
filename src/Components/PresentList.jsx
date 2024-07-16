

function PresentList(props) {

    const {students, toggleList} = props;

    return (
        <div>
            <div className="Present">
                <h2>Present List</h2>
                {students.filter((student) => student.isPresent === true).map((student) => (
                    <li key={student.id}>
                        <span>{student.title}</span>
                        <button onClick={() => toggleList(student)}>Accidentally Added</button>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default PresentList;