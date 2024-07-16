import AbsentList from "./AbsentList";
import AllStudents from "./AllStudents";
import PresentList from "./PresentList";


function StudentSection(props) {

    const {setStudentName, students, setStudents, setEditMode, setEditableStudent} = props;

    const toggleList = (student) => {
        const updatedList = students.map((item) => {
            if (item.id === student.id) {
                return{...item, isPresent:!item.isPresent}
            }
            return item;
        })
        setStudents(updatedList);
    }

    return(
        <div>
          <AllStudents 
            setStudentName={setStudentName}
            students={students}
            setStudents={setStudents}
            setEditMode={setEditMode}
            setEditableStudent={setEditableStudent}          
          />
          <PresentList 
            students={students}
            toggleList={toggleList}
          />
          <AbsentList 
            students={students}
            toggleList={toggleList}
          />  
        </div>
    )
}

export default StudentSection;