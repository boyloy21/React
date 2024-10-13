import ComponentB from "./ComponentB";
import React, {useState, createContext} from "react";

export const Usercontext = createContext();

function ComponentA(){

    const [user, setUser] = useState("Yunboyloy")

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <Usercontext.Provider value={user}>
                <ComponentB user={user}/>
            </Usercontext.Provider>
            
        </div>
    );
}
export default ComponentA