import React,{ useState, useEffect } from 'react'

// import the task service
import TaskService from '../../services/task.service';

// import the Task class from the models folder
import { Task } from '../../models/task';

// import components from components folder
import TaskInput from './TaskInput';
import TaskTable from './TaskTable';

export default function TasksPage() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
      fetchTasks();
  }, []);

  async function fetchTasks() {
    const tasks = await TaskService.fetchTasks();
    setTasks(tasks); //set tasks array for Task Table to update the state of the tasks to whatever was returned from the server
  };

  async function onTaskCreate(name) {
    // create the task
    const task = await TaskService.createTask(
      new Task(null, name, false)
    );

    // add the task to the tasks state
    setTasks([...tasks, task]);
  }


  async function onTaskCompleteToggle(taskId) {
    // toggle task completed state
    const taskToToggle = tasks.find((task) => task.id === taskId);
    taskToToggle.complete = !taskToToggle.complete;

    await TaskService.updateTask(taskToToggle);

    // update the tasks state with the new updates state
    setTasks(tasks.map((task) => {
      return task.id === taskId ? taskToToggle : task;
    }));
  }

  async function onTaskRemove(taskId) {
    await TaskService.deleteTask(taskId);

    // update the tasks state with the filtered tasks
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <div className='container my-4'>

      <div className='card card-body text-center'>

        <h1>Task List</h1>

        <hr></hr>

        <p> haley's spark web application :D</p>

        <TaskInput onTaskCreate={onTaskCreate} />

        <TaskTable
          onTaskCompleteToggle={onTaskCompleteToggle}
          onTaskRemove={onTaskRemove}
          tasks={tasks} />
      </div>
    </div>
  )
}