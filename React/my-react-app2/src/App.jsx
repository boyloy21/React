import Card from "./Card";
/** Props = read-only properties that are shared between componets.
 *          A parent component can send data to a child component.
 *          <Component key=value />
 */
import Student from "./Student";

import UserGreeting from "./UserGreeting";
import List from "./List";

import Button from "./Button";
import ProfilePicture from "./ProfilePicture";

import MyComponent from "./MyComponent";
import Counter from "./Counter";
import MyComponent2 from "./MyComponent2";
import ColorPicker from "./ColorPicker";
import MyCarList from "./MyCar";
import MyFood from "./MyFood";
import ToDoList from "./ToDoList";
import MyComponent3 from "./MyComponent3";
import ComponentA from "./ComponentA";
import MyComponent4 from "./MyComponent4";


function App(){

  const fruits = [{id:1, name:"apple", calories: 95},
    {id: 2, name: "orange", calories: 45}, 
    {id: 3, name: "banana", calories: 105}, 
    {id: 4, name: "coconut", calories: 159}, 
    {id: 5, name: "pineapple", calories: 37}];
  const vegetables = [{id:6, name:"potatoes", calories: 110},
      {id: 7, name: "celery", calories: 15}, 
      {id: 8, name: "carrots", calories: 25}, 
      {id: 9, name: "corn", calories: 63}, 
      {id: 10, name: "broccoli", calories: 50}];
  return(
    <>
      <h1>Tutorial 1</h1><br/>
      <Card/><br></br>
      <h1>Tutorial 2</h1><br/>
      <Button/>
      <h1>Tutorial 3</h1><br/>
      <Student name="Yunboyloy" age={21} isStudent={true}/>
      <Student name="Hearcr" age={20} isStudent={false}/>
      <Student name="Rounjojo" age={15} isStudent={true}/>
      <Student name="Smeymis" age={19} isStudent={false}/>
      <Student/>
      <h1>Tutorial 4</h1><br/>
      <UserGreeting isLoggedIn={true} username="Yunboyloy"/>
      {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      {vegetables.length > 0 &&<List items={vegetables} category="vegetables"/>}
      <h1>Tutorial 5</h1><br/>
      <ProfilePicture/>
      <h1>Tutorial 6</h1><br/>
      <Counter/>
      <h1>Tutorial 7</h1>
      <MyComponent/>
      <h1>Tutorial 8</h1>
      <MyComponent2/>
      <h1>Tutorial 9</h1>
      <ColorPicker/>
      <h1>Tutorial 10</h1>
      <MyFood/>
      <h1>Tutorial 11</h1>
      <MyCarList/>
      <h1>Tutorial 12</h1>
      <ToDoList/>
      <h1>Tutorial 13</h1>
      <MyComponent3/>
      <h1>Tutorial 14</h1>
      <ComponentA/>
      <h1>Tutorial 15</h1>
      <MyComponent4/>
    </>
  );
}

export default App