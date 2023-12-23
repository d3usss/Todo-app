import React from "react"
import styled from "styled-components"

interface TasksContainer {
  itemsLeft: number
  children: React.ReactNode
}

const Container = styled.article`
  border-radius: 0.5rem;
  background-color: var(--task-color);
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  min-width: 33rem;
  margin-bottom: 1.5rem;
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem 1.5rem 2rem;
  color: var(--text-color-footer);
`

function TasksContainer({itemsLeft, children}: TasksContainer) {
  return (
    <Container>
      {children}
      <Footer>
        <p>{itemsLeft} items left</p>
        <p>Clear Completed</p>
      </Footer>
    </Container>
  )
}

export default TasksContainer
