import React from "react";

const ToDoLists = (props) => {
    function chooseList (){}
    return (<li onClick={chooseList()}>{props.list.name}</li>);
}
export default ToDoLists;