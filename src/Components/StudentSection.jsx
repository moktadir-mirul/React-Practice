import AbsentList from "./AbsentList";
import AllStudents from "./AllStudents";
import PresentList from "./PresentList";


function StudentSection() {


    return(
        <div className="All-Students">
          <AllStudents />
          <PresentList  />
          <AbsentList />  
        </div>
    )
}

export default StudentSection;