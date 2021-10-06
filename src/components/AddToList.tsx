import React, { useState } from "react";
import {IState as Props} from "../App"
interface IProps {
    people: Props['people']
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

const AddToList:React.FC<IProps> = ({setPeople,people})=>{
    const [input,SetInput] = useState({
        name:"",
        age :"",
        note:"",
        img:""
    })
    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void=>{
        SetInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }
    const handleClick = ()=> {
            if(!input.name || !input.age || !input.img )
                return 
            setPeople([
                ...people,
                {
                    name:input.name,
                    age:parseInt(input.age),
                    img:input.img,
                    note:input.note
                }
            ]);
            SetInput({
                name: "",
                age: "",
                img: "",
                note: ""
            })
    }
    return(
        <div className='AddToList'>
            <input type="text" placeholder='Name' className='AddToList-input' value={input.name} name='name' onChange={handleChange}/>
            <input type="text" placeholder='Age' className='AddToList-input' value={input.age}name='age' onChange={handleChange}/>
            <input type="text" placeholder='Image Url' className='AddToList-input' value={input.img} name='img' onChange={handleChange}/>
            <textarea  placeholder='Notes' className='AddToList-input' value={input.note} name='note' onChange={handleChange}/>
       
            <button className='AddToList-btn' onClick={handleClick}>Add To List</button>
        </div>
    )
}

export default AddToList;