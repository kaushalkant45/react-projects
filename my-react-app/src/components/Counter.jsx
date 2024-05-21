import React, {useState} from 'react';
function Counter() {
    const [count, setCount] = useState(0);
    return (
      <>
       <h3> counter - {count} </h3>
       <p>count is : {count % 2 === 0 ? "even" : "odd" }</p>
       <button onClick={()=>setCount(count+1)}>Increment</button> &nbsp;
       <button onClick={()=>setCount(count-1)}>Decrement</button>
      </>
    )
  }
  
  export default Counter;
  