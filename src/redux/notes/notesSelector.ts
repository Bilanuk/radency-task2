import { Category } from '../../constants';
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

export const selectNotesTable = createSelector(
  (state: NotesState) => state.notes,
  (notes) => {
    const table = Object.values(Category).map((category) => ({
      category,
      activeNoteCount: 0,
      archivedNotesCount: 0,
    }));
    notes.forEach((note) => {
      const tableRow = table.find((row) => row.category === note.category);
      if (tableRow) {
        if (note.isArchived) {
          tableRow.archivedNotesCount++;
        } else {
          tableRow.activeNoteCount++;
        }
      }
    });
    
    return table as SummaryInfo[];
  }
);

