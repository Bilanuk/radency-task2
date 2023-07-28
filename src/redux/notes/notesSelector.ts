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

function initializeTable(categories: Category[]) {
  const table: Record<Category, { active: number; archived: number }> = {} as Record<
    Category,
    { active: number; archived: number }
  >;
  categories.forEach((category) => {
    table[category] = { active: 0, archived: 0 };
  });
  return table;
}

export const selectNotesTable = createSelector(
  (state: NotesState) => state.notes,
  (categories: Category[]) => categories,
  (notes, categories) => {
    const table = initializeTable(categories);

    notes.forEach((note) => {
      if (note.isArchived) {
        table[note.category].archived += 1;
      } else {
        table[note.category].active += 1;
      }
    });

    return table;
  }
);
