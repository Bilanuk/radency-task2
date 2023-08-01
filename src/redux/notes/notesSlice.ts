import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import initialNotesState from './initialNotesState';

import { extractDatesFromContent, getCurrentTime } from '../../utils/dateFormat';

export interface NotesState {
  notes: Note[];
}

const initialState: Note[] = initialNotesState as Note[];

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<PartialNoteCreate>) => {
      const newNote = {
        ...action.payload,
        id: uuidv4(),
        isArchived: false,
        dates: extractDatesFromContent(action.payload.content || ''),
        createdAt: getCurrentTime(),
      };
      state.push(newNote);
    },
    updateNote: (state, action: PayloadAction<{ id: string; updatedFields: Partial<Note> }>) => {
      const { id, updatedFields } = action.payload;
      const noteIndex = state.findIndex((note) => note.id === id);

      if (noteIndex !== -1) {
        const updatedNote = {
          ...state[noteIndex],
          ...updatedFields,
          dates: extractDatesFromContent(updatedFields.content || ''),
        };
        state[noteIndex] = updatedNote;
      }
    },
    toggleArchiveNote: (state, action: PayloadAction<string>) => {
      const noteId = action.payload;
      const note = state.find((note) => note.id === noteId);
      if (note) {
        note.isArchived = !note.isArchived;
      }
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      const noteId = action.payload;
      const noteIndex = state.findIndex((note) => note.id === noteId);
      if (noteIndex !== -1) {
        state.splice(noteIndex, 1);
      }
    },
  },
});

export const { addNote, updateNote, toggleArchiveNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
