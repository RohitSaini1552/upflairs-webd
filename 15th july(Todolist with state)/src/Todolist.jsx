import { useState } from "react";

function  ToDoList (){
    const [inputValue , setInputValue] = useState('');
    const [items , setItems] = useState([]);
    const handelAdd = () =>{
    if(inputValue == '') return;
    setItems([...items,inputValue]);
    setInputValue('');
    }

    return(
        <>
        <input type="text" onChange={(e)=>setInputValue(e.target.value)} />
        <button onClick={handelAdd}>ADD</button>
        <ul>
            {items.map((item,index)=>(<li key={index}> {item} </li>))}
        </ul>
        </>
    )
}
export default ToDoList;