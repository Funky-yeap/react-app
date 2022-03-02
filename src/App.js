import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Main-Content/Sidebar/TodoListSidebar';
import SelectedList from './components/Main-Content/Selected-List/SelectedList';
import NewTaskForm from './components/Main-Content/NewTaskForm/NewTaskForm';

function App() {
  const list = {
    name: "List 1"
  }
  const listArray = [
    {
      name: "CRUD",
      listid: 1
    },
    {
      name: "Patch & Put",
      listid: 2
    }
  ]
  const taskArray = [
    {
      id: 1,
      name: "Create",
      listid: 1,
      description: "",
      due_date: new Date()
    },
    {
      id: 2,
      name: "Read",
      listid: 1,
      description: "",
      due_date: new Date()
    },
    {
      id: 3,
      name: "Update",
      listid: 1,
      description: "",
      due_date: new Date()
    },
    {
      id: 4,
      name: "Delete",
      listid: 1,
      description: "",
      due_date: new Date()
    },
    {
      id: 5,
      name: "PATCH",
      listid: 2,
      description: "",
      due_date: new Date()
    },
    {
      id: 6,
      name: "PUT",
      listid: 2,
      description: "",
      due_date: new Date()
    }
  ]
  function createNewTask (task) {
    console.log(task);
  }
  return (
    <div className="App">
      <Sidebar listArray={listArray}/>
      <div className="content-block">
        <SelectedList listArray={listArray} taskArray={taskArray}/>
        <NewTaskForm onSubmit={createNewTask} />
      </div>  
    </div>
  );
}

export default App;
