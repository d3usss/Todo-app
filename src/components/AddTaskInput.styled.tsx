import React from "react"
import {nanoid} from "nanoid"
import styled from "styled-components"
import CheckInput from "./CheckInput.styled"
import type {Task} from "./Task"

interface AddTaskInput {
  handleAddTask: (task: Task) => void
}

const Input = styled.input`
  height: 5rem;
  width: 100%;
  padding: 1.5rem 2rem 1.5rem 5rem;
  background-color: var(--task-color);
  border: none;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border-radius: 0.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.167px;
  color: var(--text-color-main);
  margin-bottom: 1.5rem;

  &::placeholder {
    color: #9495a5;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.167px;
  }
`

const CheckInputContainer = styled.div`
  position: relative;
`

const CheckInputStyled = styled(CheckInput)`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
`

export default function AddTaskInput({handleAddTask}: AddTaskInput) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleAddTask({
      id: nanoid(),
      isCompleted: false,
      task: e.target.value,
    })
  }

  return (
    <CheckInputContainer>
      <Input
        type="text"
        placeholder="Create a new todo..."
        onChange={handleChange}
      />
      <CheckInputStyled />
    </CheckInputContainer>
  )
}
