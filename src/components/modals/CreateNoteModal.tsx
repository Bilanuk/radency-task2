import React, { useState } from 'react';
import { Category } from '../../constants';

import {
  ModalOverlay,
  ModalContent,
  StyledTextArea,
  StyledSelect,
  StyledOption,
  StyledButton
} from './styled';

interface EditNoteModalProps {
  note: Note;
  onClose: () => void;
  onSave: (note: Note) => void;
}

const EditNoteModal = ({ note, onClose, onSave }: EditNoteModalProps) => {
  const [editedNote, setEditedNote] = useState(note);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => {
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

  return (
    <ModalOverlay>
      <ModalContent>
        <StyledSelect
          name="category"
          value={editedNote.category}
          onChange={handleChange}
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
          onChange={handleChange}
        />
        <StyledButton onClick={handleSaveClick}>Save</StyledButton>
        <StyledButton onClick={onClose}>Cancel</StyledButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EditNoteModal;
