import React from "react";

const ItemsFromSelectedList = (props) => {
    let listItem = (
        <li className="task">
            <div className="head">
                <input type="checkbox" className="chBox" onchange="setStatus(this)" />
                <h2 className="title">11</h2>
                <a onclick="removeTask(this)">🗑️</a>
            </div>
            <div className="task-info">
                <p className="description"></p>
                <p className="date"></p>
             </div>
        </li>
    );
    return listItem;
}
export default ItemsFromSelectedList;