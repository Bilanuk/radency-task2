import React, { useState } from 'react';
import { Category } from '../../constants';

import {
  ModalOverlay,
  ModalContent,
  StyledTextArea,
  StyledSelect,
  StyledOption,
  StyledButton,
  StyledModalActions,
  StyledModalHeader,
} from './styled';

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
    if (!note.isArchived) {
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
        <StyledModalHeader>Edit note</StyledModalHeader>
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
        <StyledModalActions>
          <StyledButton onClick={handleSaveClick}>Save</StyledButton>
          <StyledButton onClick={handleCancelClick}>Cancel</StyledButton>
        </StyledModalActions>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EditNoteModal;
