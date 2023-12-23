import {nanoid} from "nanoid"
import type {Task} from "../components/Task"

const tasksData: Task[] = [
  {
    id: nanoid(),
    isCompleted: true,
    task: "Complete online JavaScript course",
  },
  {
    id: nanoid(),
    isCompleted: true,
    task: "Jog around the park 3x",
  },
  {
    id: nanoid(),
    isCompleted: false,
    task: "10 minutes meditation",
  },
  {
    id: nanoid(),
    isCompleted: false,
    task: "Read for 1 hour",
  },
  {
    id: nanoid(),
    isCompleted: false,
    task: "Pick up groceries",
  },
  {
    id: nanoid(),
    isCompleted: false,
    task: "Complete Todo App on Frontend Mentor",
  },
]

export default tasksData
