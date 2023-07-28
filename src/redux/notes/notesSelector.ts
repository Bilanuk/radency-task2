import { createSelector } from '@reduxjs/toolkit';
import { NotesState } from './notesSlice';

export const selectActiveNotes = createSelector(
  (state: NotesState) => state.notes,
  (notes) => notes.filter((note) => !note.isArchived)
);

export const selectArchivedNotes = createSelector(
  (state: NotesState) => state.notes,
  (notes) => notes.filter((note) => note.isArchived)
);
