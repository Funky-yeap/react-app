import React from "react";

import ToDoLists from "./ToDoLists";

const Sidebar = (props) => {
    return (
        <div id="" className="main-block">
            <h1>My To Do List</h1>
            <h2>Lists:</h2>
            <ul id="todoLists">
                {
                    props.listArray.map(element => {
                        return (
                            <ToDoLists key={element.listid} list={element} />
                        )
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