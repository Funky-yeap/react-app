import React from "react";

const ItemsFromSelectedList = (props) => {
    console.log(props.taskItem.name);
    return (
        <li className="task">
            <div className="head">
                <input type="checkbox" className="chBox" onchange="setStatus(this)" />
                <h2 className="title">{props.taskItem.name}</h2>
                <a onclick="removeTask(this)">🗑️</a>
            </div>
            <div className="task-info">
                <p className="description">{props.taskItem.description}</p>
                <p className="date">{props.taskItem.due_date.toDateString()}</p>
            </div>
        </li>
    )
}
export default ItemsFromSelectedList;