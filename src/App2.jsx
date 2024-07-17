import ReducerExample from "./Components/ReducerExample";
import StudentForm from "./Components/StudentForm";
import StudentSection from "./Components/StudentSection";
import PostsShown from "./Components/useEffect";

function App2() {

    return (
        <div>
            <PostsShown />
            <StudentForm />
            <StudentSection />
            <ReducerExample />
        </div>
    )
}

export default App2;