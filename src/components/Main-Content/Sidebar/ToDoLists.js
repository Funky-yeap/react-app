import React from "react";

const ToDoLists = (props) => {
    return (<li onclick="chooseList()">{props.list.name}</li>);
}
export default ToDoLists;