import { useState, useEffect } from "react";



export const usePostFetch = (value, url) => {
    const [data, setData] = useState(value)
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')


    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((result) => {
            setData(result);
            setIsLoading(false);
            setErrorMessage('');
        })
        .catch((error) => {
            setErrorMessage(error.message);
            setIsLoading(false);
            setData(value);
        })
        
    }, []);

    return {
        data, 
        isLoading, 
        errorMessage
    }
}