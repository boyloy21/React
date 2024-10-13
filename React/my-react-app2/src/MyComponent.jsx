/** React hook = Special function that allows functional components
 *               to use React feature without writing class components (React v16.8)
 *               (useState, useEffect, useContext, UseReducer, useCallback, and more...)
 *  useState() = A React hook that allows the creation of a stateful variable 
 *               AND a setter function to update its value in the Virtual DOM.
 *               [name, setName]
 *  updater function = A function passed as an argument to setState() usually
 *                     ex: setYear(y => y + 1) setYear(arrow function)
 *                     Allow for safe updates based on the previous state
 *                     Used with multiple state updates and asynchronous function
 *                     Good practice to use update functions
 */

import React, {useState} from 'react';

// function MyComponent(){

//     const [name, setName] = useState("Guest");
//     const [age, setAge] = useState(0);
//     const updateName = () => {
//         setName("Yunboyloy");
//         console.log(name);
//     }
//     const incrementAge = () => {
//         setAge(age + 1);
//     }
//     return( <div>
//         <p>Name: {name}</p>
//         <button onClick={updateName}>Set Name</button>
//         <p>Age:{age}</p>
//         <button onClick={incrementAge}>Increment Age</button>
//     </div>);
// }
function MyComponent(){
    const [count, setCount] = useState(0);

    function increment(){
        setCount(c => c + 3);
        // setCount(c => c + 1);
        // setCount(c => c + 1);
    };

    function decrement(){
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    };

    function reset(){
        setCount(0);
    }

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
    );

}
export default MyComponent
