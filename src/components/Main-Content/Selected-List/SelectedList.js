import React from "react";
import ItemsFromSelectedList from "./ItemFromSelectedList";

const SelectedList = (props) => {
    return (
        <ul id="task-List">
          Tasks from selected List:
          {
            props.taskArray.map((element) => {
              return (
                <ItemsFromSelectedList key={element.id} taskItem={element}/>
              )
            })
          }
        </ul>
    )
}
export default SelectedList;