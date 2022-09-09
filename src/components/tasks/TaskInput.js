import React, { useState } from 'react';

export default function TaskInput(props) {

  const [task, setTask] = useState("");

  function onTaskFromSubmit(e) {
    e.preventDefault();

    props.onTaskCreate(task);

    setTask('');
  }

  return (
    <div>
      <form onSubmit={onTaskFromSubmit}>
        <div className="input-group mb-3">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}

            type="text"
            className="form-control"
            placeholder="Task"
          />
          <button
            className="btn btn-outline-secondary"
            type="submit" >
            +
          </button>
        </div>
      </form>

    </div>
  )
}