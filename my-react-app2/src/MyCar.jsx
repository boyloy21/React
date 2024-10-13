import React, {useState} from "react";

function MyCar(){

    const [car, setCar] = useState({year: 2024,make: "Ford",model:"Mustang"});

    function handleYearChange(event){
        setCar(c => ({...c, year: event.target.value}));
    }
    function handleMakeChange(event){
        setCar(c => ({...c, make: event.target.value}));
    }
    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}));
    }

    return(<div>
        <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

        <input type="number" value={car.year} onChange={handleYearChange}/><br/>
        <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
        <input type="text" value={car.model} onChange={handleModelChange}/><br/>
    </div>);
}
function MyCarList(){
    const [car, setCar] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");
    
    function handlerAddCar(){
        const newCar = {year: carYear, make: carMake, model: carModel};
        setCar(c => [...c, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }
    function handlerRemoveCar(index){
        setCar(c => c.filter((_, i) => i !== index));
    }
    function handlerYearChange(event){
        setCarYear(event.target.value);
    }
    function handlerMakeChange(event){
        setCarMake(event.target.value);
    }
    function handlerModelChange(event){
        setCarModel(event.target.value);
    }
    
    return(
        <div>
            <h2>List of Car objects</h2>
            <ul>
                {/* {car.map((car, index) => 
                    <li key={index} onClick={() => handlerRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>)} */}
                {car.map((car, index) => 
                    <li>
                        {car.year} {car.make} {car.model}
                        <button className="cardelet-btn" key={index} onClick={() => handlerRemoveCar(index)}>&times;</button>
                    </li>)}
            </ul>
            <input type="number" value={carYear} onChange={handlerYearChange}/><br/>
            <input type="text" value={carMake} onChange={handlerMakeChange} placeholder="Enter car make"/><br/>
            <input type="text" value={carModel} onChange={handlerModelChange} placeholder="Enter car model"/><br/>
            <button onClick={handlerAddCar}>Add Car</button>
        </div>
    );
}
export default MyCarList;