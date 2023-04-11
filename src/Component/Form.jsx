import { useState } from "react";
import "./Form.css";

const Form = ({ sendData }) => {
    const initialvalue = {
        id: "",
        name: "",
        age: "",
        city: ""
    }
    const [Name, setName] = useState(initialvalue.name);
    const [Age, setAge] = useState(initialvalue.age);
    const [City, setCity] = useState(initialvalue.city);
    const [inputvalue, setInputvalue] = useState(initialvalue);
    const SubmitHandler = (e) => {
        e.preventDefault();
        const newValue = {
            id: Math.random(),
            name: Name,
            age: Age,
            city: City
        }
        setInputvalue(newValue);
        setInputvalue({
            setName:"",
            setAge:"",
            setCity:""

        });
        sendData(newValue);
    }
    return (
        <form onSubmit={SubmitHandler} className="">
            <div className="formSubmit">
                <div>
                    <label>Name</label>
                    <input type="text" value={Name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div>
                    <label>Age</label>
                    <input type="number" value={Age} onChange={(e) => { setAge(e.target.value) }} />
                </div>
                <div>
                    <label>City</label>
                    <input type="text" value={City} onChange={(e) => { setCity(e.target.value) }} />
                </div>
            <div><button type="submit">Add to List</button></div>
            
            </div>
        </form>
    )
}
export default Form;