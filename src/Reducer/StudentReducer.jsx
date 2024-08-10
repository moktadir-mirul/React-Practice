
export const initialValue = {
                        studentName: '',
                        students: [],
                        editMode: false,
                        editableStudent: null
}

export const StudentReducer = (state, action) => {
    switch(action.type) {
        case 'CHANGE-HANDLER': {
            return {
                ...state,
                studentName: action.payload,
            }
        }
        case 'CREATE-HANDLER': {
            const newStudent = {
                id: Date.now() + '',
                title: state.studentName,
                isPresent: undefined,
            }
            return {
                ...state,
                students: [...state.students, newStudent],
                studentName: '',
            }
        }
        case 'EDIT-HANDLER': {
            return {
                ...state,
                editMode: true,
                editableStudent: action.payload,
                studentName:action.payload.title,

            }
        }
        case 'UPDATE-HANDLER': {
            const updatedEditedList = state.students.map((student) => {
                if(student.id === state.editableStudent.id) {
                    return {
                        ...student,
                        title: state.studentName,
                    }
                }
                return student;
            })
            return {
                ...state,
                students: updatedEditedList,
                editMode: false,
                editableStudent: null,
                studentName: '',
            }
        }
        case 'REMOVE-HANDLER': {
            return{
                ...state,
                students: state.students.filter((student) => student.id !== action.payload)
            }
        }
        // case 'SENT-TO-PRESENTLIST-HANDLER': {
            // if(action.payload.isPresent === true || action.payload.isPresent === false) return alert(`The Student is already in ${action.payload.isPresent ? 'Present List': 'Absent List'}`)
        //     const updatedPresentList = state.students.map((student) => {
        //         if(student.id === action.payload.id) {
        //             return {
        //                 ...student,
        //                 isPresent: true,
        //             }
        //         }
        //         return student;
        //     })
        //     return {
        //         ...state, 
        //         students:updatedPresentList,
        //     }
        // }
        // case 'SENT-TO-ABSENTLIST-HANDLER': {
            // if(action.payload.isPresent === true || action.payload.isPresent === false) return alert(`The Student is already in ${action.payload.isPresent ? 'Present List': 'Absent List'}`)
        //     const updatedAbsentList = state.students.map((student) => {
        //         if(student.id === action.payload.id) {
        //             return {
        //                 ...student,
        //                 isPresent: false,
        //             }
        //         }
        //         return student;
        //     })
        //     return {
        //         ...state, 
        //         students:updatedAbsentList,
        //     }
        // }
        // case 'TOGGLE-LIST': {
        //     const updatedPresentList = state.students.map((student) => {
        //         if(student.id === action.payload) {
        //             return {
        //                 ...student,
        //                 isPresent: !student.isPresent,
        //             }
        //         }
        //         return student;
        //     })
        //     return {
        //         ...state, 
        //         students:updatedPresentList,
        //     }
        // }
        // default: {
        //     return state;
        // }
        case 'UPDATED-STATUS': {
            const updatedList = state.students.map((student) => {
                if(student.id === action.payload.id) {
                    return {
                        ...student,
                        isPresent: action.payload.isPresent,
                    }
                }
                return student;
            })
            return {
                ...state, 
                students:updatedList,
            }           
        }
    }
}