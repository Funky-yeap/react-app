import logo from './logo.svg';
import './App.css';
import Sidebar from './components/TodoListSidebar';
import SelectedList from './components/SelectedList';
import NewTaskForm from './components/NewTaskForm';

function App() {
  const list = {
    name: "List 1"
  }
  const listArray = [
    {
      name: "List 1",
      listid: 1
    },
    {
      name: "List 2",
      listid: 2
    },
    {
      name: "List 3",
      listid: 3
    }
  ]
  return (
    <div classNameName="App">
      <Sidebar listArray={listArray}/>
      <div className="content-block">
        <SelectedList listArray={listArray}/>
        <NewTaskForm />
      </div>  
    </div>
  );
}

export default App;
