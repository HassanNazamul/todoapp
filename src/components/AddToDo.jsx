import { useState } from "react";

function AddToDo({ handleNewItem }) {
  const [task, setTask] = useState("");

  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTask(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleChange = () => {
    handleNewItem(task, dueDate);
    setDueDate("");
    setTask("");
  };

  return (
    <div className="nazContainer container">
      <div className="row naz-row">
        <div className="col-6">
          <input
            onChange={handleNameChange}
            type="text"
            placeholder="Enter Task"
            value={task}
          ></input>
        </div>

        <div className="col-4">
          <input
            onChange={handleDateChange}
            value={dueDate}
            type="date"
          ></input>
        </div>

        <div className=" col-2 ">
          <button
            onClick={handleChange}
            type="button"
            className="btn btn-success naz-btn"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
