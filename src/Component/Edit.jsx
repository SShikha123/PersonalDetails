import { useState } from "react";

const Edit=(props)=>{
    const initial={
        name:"",
        age: "",
        city:""
    }
    const [Name, setName] = useState("");
    const [Age, setAge] = useState("");
    const [City, setCity] = useState("");
    const[value,setValue]=useState(initial);
    const UpdateHandler=()=>{
        const newvalu={
            name:Name,
            age:Age,
            city:City
        }
setValue(newvalu);
    }
return(
    <div>
        <input type="text" value={Name} onChange={(e)=>setName(e.target.value)}/>
        <input type="text" value={Age} onChange={(e)=>setAge(e.target.value)}/>
        <input type="text" value={City} onChange={(e)=>setCity(e.target.value)}/>
        <button onClick={UpdateHandler}>Update</button>
    </div>
)
}
export default Edit;