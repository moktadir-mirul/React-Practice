import { Nav } from "./Components/Nav";
import { PasswordCheker } from "./Components/PasswrodChecker";
import ReducerExample from "./Components/ReducerExample";
import StudentForm from "./Components/StudentForm";
import StudentSection from "./Components/StudentSection";

function App2() {

    return (
        <div>
            <StudentForm />
            <StudentSection />
            <ReducerExample />
            <PasswordCheker />
        </div>
    )
}

export default App2;