import React from "react"
import styled from "styled-components"
import CheckInput from "./CheckInput.styled"

import {ReactComponent as Checked} from "../images/icon-check.svg"
import {ReactComponent as Remove} from "../images/icon-cross.svg"

export interface Task {
  /**
   * TODO: Check that interface is the same for prop as for data type
   */
  id?: string
  isCompleted: boolean
  task: string
}

interface TaskText {
  isCompleted: boolean
}

const TaskStyled = styled.section`
  padding: 1.5rem 2rem 1.5rem 2rem;
  display: grid;
  grid-template-columns: 20px 1fr 20px;
  grid-template-rows: auto;
  grid-template-areas: "check text remove";
  justify-content: center;
  border-bottom: 1px solid var(--border-color);
`

const CheckInputContainer = styled.div`
  grid-area: check;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const RemoveStyled = styled(Remove)`
  grid-area: remove;
`

const RemoveContainer = styled.section`
  grid-area: remove;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TaskText = styled.p<TaskText>`
  grid-area: text;
  padding-left: 1.8rem;
  text-decoration: ${props => (props.isCompleted ? "line-through" : "none")};
`

export default function TaskComponent({isCompleted, task}: Task) {
  return (
    <TaskStyled>
      <CheckInputContainer>
        {!isCompleted ? <CheckInput /> : <Checked />}
      </CheckInputContainer>
      <TaskText isCompleted={isCompleted}>{task}</TaskText>
      <RemoveContainer>
        <RemoveStyled />
      </RemoveContainer>
    </TaskStyled>
  )
}
