import { useState } from "react";

export const useCounter= (state) => {
    const [counter, setCounter] = useState(state);

    const AddHandler = (value) => {
        setCounter(counter+value)
    }
    const DeductHandler = (value) => {
        setCounter(counter-value)
    }

    const MultiplyHandler = (value) => {
        setCounter(counter*value)
    }

    const DivideHandler = (value) => {
        setCounter(counter/value)
    }

    return {
        counter,
        AddHandler,
        DeductHandler,
        MultiplyHandler,
        DivideHandler
    }
}