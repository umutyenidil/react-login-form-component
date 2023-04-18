import styled from "styled-components";

const SubmitButton = styled.button`
  margin-bottom: 15px;
  position: relative;
  height: 100%;
  width: 100%;
  outline: none;
  border-radius: 5px;
  transition: all 0.3s ease;
  box-shadow: inset 0 0 2px 2px rgba(26, 188, 156, 0.25);
  padding-left: 0;
  background: #16a085;
  border: 1px solid #16a085;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  
  &:hover{
    background: #12876f
  }
`;

export default SubmitButton;