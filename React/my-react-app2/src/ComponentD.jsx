import React, {useContext} from "react";
import { Usercontext } from "./ComponentA";
function ComponentD(){
    const user = useContext(Usercontext);
    return(
        <div className="box">
            <h1>ComponentD</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    );
}
export default ComponentD