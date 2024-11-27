import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 20px;
  font-size: 1rem;
  color: white;
  background-color: #0644e1;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #033bca;
  }
`

// 태그 사이에 쓰는 내용을 children으로 받아올 수 있습니다.
function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

export default Button
