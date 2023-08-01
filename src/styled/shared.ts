import styled from 'styled-components';

const StyledPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled.button`
  width: 150px;
  margin: 30px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;

export { StyledPageWrapper, StyledButton };