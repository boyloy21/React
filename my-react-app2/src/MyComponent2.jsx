/** OnChange = event handler used primarily with form elements
 *             ex. <input>, <textarea>, <select>, <radio>
 *             Triggers a function every time the value of the input charges
 * 
 */

import React, {useState} from "react";

function MyComponent2(){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");
    function handlerNameChange(event){
        setName(event.target.value);
    }
    function handlerQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(
    <div className="component2">
        <input value={name} onChange={handlerNameChange}/>
        <p>Name: {name}</p>

        <input value={quantity} onChange={handlerQuantityChange} type="number"/>
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onCanPlay={handleCommentChange} placeholder="Enter delivery instruction"/>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">MasterCard</option>
            <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment: {payment}</p>

        <label>
            <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
            Pick Up
        </label><br/>
        <label>
            <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
            Delivery
        </label>
        <p>Shipping: {shipping}</p>
    </div>);
}
export default MyComponent2