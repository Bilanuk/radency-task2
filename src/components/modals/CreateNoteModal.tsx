import React, { useState } from 'react';
import { Category } from '../../constants';
import { useDispatch } from 'react-redux';

import { addNote } from '../../redux/notes/notesSlice';

import {
  ModalOverlay,
  ModalContent,
  StyledTextArea,
  StyledSelect,
  StyledOption,
  StyledButton
} from './styled';

interface CreateNoteModalProps {
  onClose: () => void;
}

const CreateNoteModal = ({ onClose }: CreateNoteModalProps) => {
  const [category, setCategory] = useState<Category>(Category.Task);
  const [content, setContent] = useState<string>('');
  const dispatch = useDispatch();

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value as Category);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const handleCreateNote = () => {
    if (!content) {
      alert('Please enter note content');
      return;
    }
  
    if (content) {
      dispatch(addNote({
        category,
        content,
      }));
    }

    setCategory(Category.Task);
    setContent('');

    onClose();
  }

  const handleCancelClick = () => {
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <StyledSelect
          value={category}
          onChange={handleCategoryChange}
        >
          {Object.values(Category).map((category) => (
            <StyledOption key={category} value={category}>
              {category}
            </StyledOption>
          ))}
        </StyledSelect>
        <StyledTextArea
          name="content"
          value={content}
          onChange={handleContentChange}
        />
        <StyledButton onClick={handleCreateNote}>
          Create
        </StyledButton>
        <StyledButton onClick={handleCancelClick}>
          Cancel
        </StyledButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default CreateNoteModal;
