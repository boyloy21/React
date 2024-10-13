import ComponentD from "./ComponentD";
import React, {useContext} from "react";
import { Usercontext } from "./ComponentA";

function ComponentC(){

    const user = useContext(Usercontext)
    return(
        <div className="box">
            <h1>ComponentC</h1>
            <h2>{`Hello Again ${user}`}</h2>
            <ComponentD/>
        </div>
    );
}
export default ComponentC