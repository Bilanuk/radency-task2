import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import initialNotesState from './initialNotesState';

export interface NotesState {
  notes: Note[];
}

const initialState: Note[] = initialNotesState as Note[];

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      const newNote = { ...action.payload, id: uuidv4() };
      state.push(newNote);
    },
    updateNote: (state, action: PayloadAction<{ id: string; updatedFields: Partial<Note> }>) => {
      const { id, updatedFields } = action.payload;
      const noteToUpdate = state.find((note) => note.id === id);
      if (noteToUpdate) {
        Object.assign(noteToUpdate, updatedFields);
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
      state = state.filter((note) => note.id !== noteId);
    },
  },
});

export const { addNote, updateNote, toggleArchiveNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
