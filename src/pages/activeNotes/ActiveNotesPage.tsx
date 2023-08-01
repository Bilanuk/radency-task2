import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../components/table/Table';
import EditNoteModal from '../../components/modals/EditNoteModal';
import CreateNoteModal from '../../components/modals/CreateNoteModal';
import { toggleArchiveNote, deleteNote, updateNote } from '../../redux/notes/notesSlice';
import { selectActiveNotes } from '../../redux/notes/notesSelector';

import { extractDatesFromContent } from '../../utils/dateFormat';

import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { BiArchiveIn } from 'react-icons/bi';

import { CategoryIconMapping } from '../../constants';

export const ActiveNotesPage = () => {
  const activeNotes: Note[] = useSelector(selectActiveNotes);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const dispatch = useDispatch();

  const handleEdit = (itemId: string) => {
    const noteToEdit = activeNotes.find((note: Note) => note.id === itemId);
    if (noteToEdit) {
      setEditingNote(noteToEdit);
      setIsEditing(true);
    }
  };

  const handleDelete = (itemId: string) => {
    dispatch(deleteNote(itemId));
  };

  const handleArchive = (itemId: string) => {
    dispatch(toggleArchiveNote(itemId));
  };

  const handleModalClose = () => {
    setIsCreating(false);
    setIsEditing(false);
    setEditingNote(null);
  };

  const data: RowData[] = activeNotes.map((note: Note) => ({
    ...note,
    dates: note.dates.join(', '),
    categoryIcon: CategoryIconMapping[note.category],
  }));

  const columns: string[] = [
    'category',
    'content',
    'dates',
    'createdAt',
  ];

  const actions: TableAction[] = [
    { label: 'Edit', icon: AiFillEdit, onClick: handleEdit },
    { label: 'Archive', icon: BiArchiveIn, onClick: handleArchive },
    { label: 'Delete', icon: AiFillDelete, onClick: handleDelete },
  ];

  const handleNoteSave = (updatedFields: Note) => {
    if (editingNote) {
      dispatch(updateNote({
        id: editingNote.id,
        updatedFields: {
          ...updatedFields,
          dates: extractDatesFromContent(updatedFields.content),
        },
      }));
      setIsEditing(false);
    }
  };

  return (
    <div>
      <Table data={data} columns={columns} actions={actions} />

      <button onClick={() => setIsCreating(true)}>Create note</button>

      {isCreating && <CreateNoteModal onClose={handleModalClose}/>}
      {isEditing && editingNote &&
        <EditNoteModal
          note={editingNote}
          onClose={handleModalClose}
          onSave={handleNoteSave}
        />
      }
    </div>
  );
};
