import React, { useState } from "react";

const ListApp = () => {
    const [list, setList] = useState([]);

    const handleAddItem = (e) => {
        e.preventDefault();
        const newItem = { 
            description: document.getElementById('listInput').value,
            complete: false
        };
        const newList = [...list];
        newList.push(newItem);
        setList(newList);
    }

    const handleRemoveItem = (e) => {
        const index = e.target.getAttribute('data-index');
        const newList = [...list]
        newList.splice(index, 1);
        setList(newList);
    }

    return (
        <div>
            <input type="text" id="listInput" />
            <button onClick={handleAddItem}>Add</button>
            <ul>
                {list.map((listItem, index) => <li key={index} style={listItem.complete ? {textDecoration: "line-through"} : {textDecoration: "none"}}>{index + 1}{listItem.description}<button data-index={index} onClick={handleRemoveItem}>X</button></li>)}
            </ul>
        </div>
    );
}

export default ListApp;