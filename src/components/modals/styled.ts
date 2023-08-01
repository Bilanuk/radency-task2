import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 200px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  resize: none;

  &:focus {
    outline: none;
  };

  &::placeholder {
    color: #ccc;
  };
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
`;

const StyledOption = styled.option`
  padding: 8px;
  margin-bottom: 10px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

const StyledButton = styled.button`
  padding: 8px 12px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

export {
  ModalOverlay,
  ModalContent,
  StyledTextArea,
  StyledSelect,
  StyledOption,
  StyledButton
};
