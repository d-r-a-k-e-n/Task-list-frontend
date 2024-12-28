import Header from "./component/header/Header";
import TaskList from "./component/taskList/TaskList";
import CreateTask from "./component/createTask/CreateTask";

function App() {
  return (
    <>
      <Header />
      <main>
        <TaskList />
        <CreateTask />
      </main>
    </>
  );
}

export default App;
