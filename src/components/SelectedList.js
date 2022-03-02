import React from "react";
import ItemFromSelectedList from "./ItemFromSelectedList";

const SelectedList = (props) => {
    return (
        <ul id="task-List">
          Tasks from selected List:
          <ItemFromSelectedList listArray={props.listArray}/>
        </ul>
    )
}
export default SelectedList;