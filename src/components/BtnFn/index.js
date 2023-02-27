import React, { useState, useEffect } from 'react';
export function BtnFn({children}){

    const [count,setCount] = useState(1);
   debugger

    useEffect(() => {
        debugger;
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    }, [count]);
    return <>
        <button onClick={()=>{
            setCount(count+1)
        }}>我是buttonFn</button>
        <input value={count}></input>
        {children}
    </>

    

}