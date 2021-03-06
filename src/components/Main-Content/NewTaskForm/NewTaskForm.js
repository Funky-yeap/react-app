import React from "react";

const NewTaskForm = (props) => {
    function onSubmitHandler(event) {
        event.preventDefault();
        props.onSubmit({
        })
    }
    return (
        <form className="input-container" name="tasks" onSubmit={onSubmitHandler}>
          <input type="text" name="name" id="nameInput" placeholder="Task name" />
          <input type="text" name="description" id="descriptionInput" placeholder="Task description" />
          <input type="date" name="due_date" id="descriptionInput" placeholder="Date" />
          <button type="submit" className="addBtn">Add</button>
        </form>
    )
}
export default NewTaskForm;