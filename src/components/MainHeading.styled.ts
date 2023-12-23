import styled from "styled-components"

const MainHeading = styled.h1`
  color: var(--heading-color);
  letter-spacing: 1.5rem;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 2.5rem;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`

export default MainHeading
