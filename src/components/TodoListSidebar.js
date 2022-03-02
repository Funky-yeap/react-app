import React from "react";
const Sidebar = (props) => {
    return (
        <div id="" className="main-block">
            <h1>My To Do List</h1>
            <h2>Lists:</h2>
            <ul id="todoLists">
                {
                    props.listArray.map(element => {
                    return (<li>{element.name}</li>);
                    })
                }
            </ul>
            <div id="sort-block">
                Sort buttons:
                <button id="btn1" className="button">Only undone tasks</button>
            </div>
        </div>
    )
}
export default Sidebar;