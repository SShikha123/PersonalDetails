import { useState } from "react";
import "./Detail.css";
import Edit from "./Edit";
const Detail = ({ items, OnDeleteHandler }) => {
    
    const [names, setName] = useState(items.name);
    const [age, setAge] = useState(items.age);
    const [city, setCity] = useState(items.city);
    const EditHandler = () => {

        let changename = prompt("enter name");
        (changename === "") ? setName(names) :  setName(changename);
        let changeage = prompt("enter age");
        (changeage === "") ? setAge(age) :  setAge(changeage);
        let changecity = prompt("enter city");
        (changecity === "") ? setCity(city) :  setCity(changecity);
    }
    return (
        <div className="detaillist">
            <h3>{names}</h3>
            <h3>{age}</h3>
            <h3>{city}</h3>
            <button onClick={EditHandler}>Edit Info</button>
            <button onClick={() => OnDeleteHandler(items.id)}>Delete Entry</button>
        </div>)

}

export default Detail;