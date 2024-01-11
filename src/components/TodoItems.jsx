import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems, handleDelete }) => {
  return (
    <>
      {todoItems.map((item) => (
        <TodoItem
          todoName={item.name}
          todoDate={item.dueDate}
          handleDelete={handleDelete}
        />
      ))}
    </>
  );
};

export default TodoItems;
