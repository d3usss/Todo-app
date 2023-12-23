import React, {useState} from "react"
import MainHeading from "./components/MainHeading.styled"
import MainContainer from "./components/MainContainer.styled"
import ThemeSwitcher from "./components/ThemeSwitcher"
import MainHeader from "./components/MainHeader.styled"
import AddTaskInput from "./components/AddTaskInput.styled"
import TasksContainer from "./components/TasksContainer.styled"
import TaskComponent, {Task} from "./components/Task"
import tasksData from "./__mocks/tasks"

function App() {
  const [tasks, setTasks] = useState<Task[]>(tasksData)
  const itemLeft = tasks.filter(task => !task.isCompleted).length

  const handleAddTask = (task: Task) => {
    setTasks([...tasks, task])
  }

  return (
    <MainContainer>
      <MainHeader>
        <MainHeading>TODO</MainHeading>
        <ThemeSwitcher />
      </MainHeader>
      <section>
        <AddTaskInput handleAddTask={handleAddTask} />
      </section>
      <TasksContainer itemsLeft={itemLeft}>
        {tasks.map(task => (
          <TaskComponent
            key={task.id}
            isCompleted={task.isCompleted}
            task={task.task}
          />
        ))}
      </TasksContainer>
    </MainContainer>
  )
}

export default App
