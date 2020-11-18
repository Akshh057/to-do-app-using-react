import React, { useState } from 'react'
import './ToDolist.css';
import Listitem from './Listitem';

function ToDolist() {
    const[listItem,updateList] = useState("");
    const[arrayListItem,addArrayListItem] = useState([]);
    const enterList = (e) =>
    {
        updateList(e.target.value);
    }
    const displayList = () =>
    {
        if(listItem==="")
        alert("enter some task");
        else
        {
         addArrayListItem((oldItems) =>
         {
             return[...oldItems,listItem];
         })
         updateList("");
        }
    }
    const deleteItems = (id) =>
    {
        console.log("Clicked");
        addArrayListItem((oldItems) =>
        {
            return oldItems.filter((arrElem,index) =>
            {
                 return index !== id;
            })
        })
    }
    return (
        <>
        <div className="main__div">
        <div className="center__div">
        <div className="heading">
        <h1>
            ToDo List
        </h1>
        </div>
        <div className="items__enter">
            <input type="text" 
            placeholder="Add a Item" 
            value={listItem}
            onChange={enterList}/>
            <button className="btn1" 
            onClick={displayList}>
            <i class="fa fa-plus"/></button>
        </div>
        <div className="list__items">
        <ol>
            {/* <li>{listItem}</li> */}
            {arrayListItem.map((itemval,index) =>
            {
              return <Listitem key={index} 
              id={index} 
              text={itemval}
              onSelect={deleteItems}
               />    
            })}
        </ol>
        </div>
        </div>
        </div>
        </>
    )
}

export default ToDolist
