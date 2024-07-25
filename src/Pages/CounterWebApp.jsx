import { useCounter } from "../CustomHook/useCounter"


export const CounterWebApp = () => {
   
    const {counter, AddHandler, DeductHandler, MultiplyHandler, DivideHandler} = useCounter(0);
    return (
        <div>
            <h1 style={{color:"crimson", textAlign:"center", fontSize:"30px", marginTop: '40px'}}>The value of counter is <strong style={{fontWeight: 'bold', color:'brown', fontSize: '35px'}}>{counter}</strong></h1>
            <div className="btnArea">
                <button className="btnC" onClick={() => AddHandler(1)}>Add 1</button>
                <button className="btnC" onClick={() => AddHandler(5)}>Add 5</button>
                <button className="btnC" onClick={() => AddHandler(10)}>Add 10</button>
                <button className="btnC" onClick={() => DeductHandler(1)}>Deduct 1</button>
                <button className="btnC" onClick={() => DeductHandler(5)}>Deduct 5</button>
                <button className="btnC" onClick={() => DeductHandler(10)}>Deduct 10</button>
                <button className="btnC" onClick={() => MultiplyHandler(10)}>Multiply by 10</button>
                <button className="btnC" onClick={() => DivideHandler(10)}>Divide by 10</button>
            </div>
        </div>
    )
}