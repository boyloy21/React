// How To style React components with CSS
//-------------------------------------
// (not including external frameworks or preprocessors)

//1. EXTERNAL
//2. MODULES
//3. INLINE
/** Click Event = An interaction when a user click on button 
 *                We can respond to clicks by passing
 *                a callback to the onClick event handle
 */

// function Button(){

//     return(<button className="button">Click me</button>)
// }

function Button(){

    const handleClick = (e) => e.target.textContent = "OUCH! 🙁";

    return (<button className="button" onDoubleClick={(e) => handleClick(e)}>Click me 🙂</button>);
}

export default Button