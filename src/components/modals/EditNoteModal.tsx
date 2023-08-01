import React, { useState } from 'react';
import styled from 'styled-components';
import { Category } from '../../enums';

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

interface EditNoteModalProps {
  note: Note;
  onClose: () => void;
  onSave: (note: Note) => void;
}

const EditNoteModal = ({ note, onClose, onSave }: EditNoteModalProps) => {
  const [editedNote, setEditedNote] = useState(note);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setEditedNote({
      ...editedNote,
      [name]: value,
    });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setEditedNote({
      ...editedNote,
      [name]: value,
    });
  };

  const handleSaveClick = () => {
    if(!note.isArchived) {
      onSave(editedNote);
    } else {
      alert('You can\'t edit archived note');
    }

    onClose();
  };

  const handleCancelClick = () => {
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <StyledSelect
          name="category"
          value={editedNote.category}
          onChange={handleSelectChange}
        >
          {Object.values(Category).map((category) => (
            <StyledOption key={category} value={category}>
              {category}
            </StyledOption>
          ))}
        </StyledSelect>
        <StyledTextArea
          name="content"
          value={editedNote.content}
          onChange={handleInputChange}
        />
        <StyledButton onClick={handleSaveClick}>Save</StyledButton>
        <StyledButton onClick={handleCancelClick}>Cancel</StyledButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EditNoteModal;
