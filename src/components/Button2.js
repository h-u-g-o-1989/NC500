import styled from "styled-components"

export const Button2 = styled.button`
  background: ${({ primary }) => (primary ? "#F26A2E" : "#077BF1")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 20px" : "10px 16px")};
  color: #fff;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: none;
  margin: 0.5rem;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "50px" : "none")};

  &:hover {
    background: ${({ primary }) => (primary ? "#077BF1" : "#F26A2E")};
    transform: translateY(-2px);
  }
`
