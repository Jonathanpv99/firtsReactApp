import { useState } from "react";

const CounterExample = () =>{
    const [count, setCount] = useState(0);

    const headleCounterPlus = () =>{
        setCount(count + 1);
    }
    return(
        <div className="bottom-0 text-center">
            <h1>{count}</h1>
            <button onClick={headleCounterPlus}>Plus</button>
        </div>
    )
}

export default CounterExample;