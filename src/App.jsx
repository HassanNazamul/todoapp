import Header from "./components/Header";
import AddToDo from "./components/AddToDo";
import Error from "./components/Error";

// ALL CSS STYLING
import "./app.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (task, dueDate) => {
    const todoNew = [...todoItems, { name: task, dueDate: dueDate }];
    setTodoItems(todoNew);
  };

  const handleDelete = (deleteItem) => {
    const newTaskList = todoItems.filter((item) => item.name !== deleteItem);

    setTodoItems(newTaskList);
  };

  return (
    <center className="todo-container">
      <Header />
      <AddToDo handleNewItem={handleNewItem} />

      {todoItems.length === 0 && <Error></Error>}
      <TodoItems todoItems={todoItems} handleDelete={handleDelete}></TodoItems>
    </center>
  );
}

export default App;
