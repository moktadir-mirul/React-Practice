import { createContext } from "react";
import App2 from "../App2";
import { useReducer } from "react";
import { StudentReducer } from "../Reducer/StudentReducer";
import { initialValue } from "../Reducer/StudentReducer";

export const StudentContext = createContext();

function StudentProvider(props) {
    const [StudentStates, dispatchS] = useReducer(StudentReducer, initialValue);

    const submitHandler = (data) => {
        data.preventDefault();
        if(StudentStates.studentName.trim() === '') return alert('Please enter a valid name');
        StudentStates.editMode ? dispatchS({type: 'UPDATE-HANDLER'}) : dispatchS({type: 'CREATE-HANDLER'});
    }

    const CtxValue = {
                        StudentStates,
                        dispatchS,
                        submitHandler,
                    }

    return (
        <StudentContext.Provider value={CtxValue}>
            {props.children}
        </StudentContext.Provider>
    )
}

export default StudentProvider;