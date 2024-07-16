import { useReducer } from "react";

const counterReducer = (stateValue, action) => {
    switch(action.type) {
        case 'ADD': {
            return stateValue+action.value;
        }
        case 'MINUS': {
            return stateValue-action.value;
        }
        case 'MULTIPLE': {
            return stateValue*action.value;
        }
        case 'DIVIDE': {
            return stateValue/action.value;
        }
        default: {
            return stateValue;
        }                
    }
}

const themeReducer = (initValue, action) => {
    switch(action.type) {
        case 'BG-COLOR': {
            return {...initValue, bgColor: action.payload}
        }
        case 'COLOR': {
            return {...initValue, color: action.payload}
        }
        default: {
            return initValue;
        }
    }
}

function ReducerExample() {
    const [counter, dispatch] = useReducer(counterReducer, 0);
    const [theme, dispatchA] = useReducer(themeReducer, {bgColor: '#fff', color: '#000'});


    return(
        <div>
            <div className="counter">
                <h1>The value of count is {counter}</h1>
                <button onClick={() => dispatch({type: 'ADD', value: 5})}>Add 5</button>
                <button onClick={() => dispatch({type: 'ADD', value: 10})}>Add 10</button>
                <button onClick={() => dispatch({type: 'MINUS', value: 5})}>Deduct 5</button>
                <button onClick={() => dispatch({type: 'MINUS', value: 10})}>Deduct 10</button>
                <button onClick={() => dispatch({type: 'MULTIPLE', value: 10})}>Multiple by 10</button>
                <button onClick={() => dispatch({type: 'DIVIDE', value: 5})}>Divide by 5</button>
            </div>
            <div className="themeArea" style={{width: '400px', height:'200px', textAlign:'center', border: '5px solid yellow', margin: '0 auto' , marginTop: '20px' ,backgroundColor:theme.bgColor}}>

                <h1 style={{fontFamily: 'sans-serif', fontSize: '24px', color: theme.color, marginTop: '80px'}}>This is our main theme</h1>

            </div>
            <div className="btn-bg" style={{marginTop: '30px'}}>
                <button onClick={() => dispatchA({type: 'BG-COLOR', payload:'red'})}>BG Red</button>
                <button onClick={() => dispatchA({type: 'BG-COLOR', payload:'green'})}>BG Green</button>
                <button onClick={() => dispatchA({type: 'BG-COLOR', payload:'crimson'})}>BG Crimson</button>
                <button onClick={() => dispatchA({type: 'BG-COLOR', payload:'aqua'})}>BG Aqua</button>
                <button onClick={() => dispatchA({type: 'BG-COLOR', payload:'violet'})}>BG Violet</button>
            </div>
            <div className="btn-clr" style={{marginTop: '30px'}}>
                <button onClick={() => dispatchA({type: 'COLOR', payload: 'blanchedalmond'})}>CLR Blue</button>
                <button onClick={() => dispatchA({type: 'COLOR', payload: 'chocolate'})}>CLR Bisque</button>
                <button onClick={() => dispatchA({type: 'COLOR', payload: 'yellow'})}>CLR Yellow</button>
                <button onClick={() => dispatchA({type: 'COLOR', payload: 'brown'})}>CLR Brown</button>
                <button onClick={() => dispatchA({type: 'COLOR', payload: 'cadetblue'})}>CLR Beige</button>
            </div>
        </div>
    )
}

export default ReducerExample;