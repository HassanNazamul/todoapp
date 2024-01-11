function TodoItem({ todoName, todoDate, handleDelete }) {
  return (
    <div className="nazContainer container  ">
      <div className="row naz-row">
        <div className="col-6">
          <p>{todoName}</p>
        </div>

        <div className="col-4">
          <p>{todoDate}</p>
        </div>

        <div className="col-2">
          <button
            className="btn btn-danger naz-btn"
            onClick={() => handleDelete(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
