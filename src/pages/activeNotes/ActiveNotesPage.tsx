import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../components/table/TableComponent';
import EditNoteModal from '../../components/modals/EditNoteModal';
import { toggleArchiveNote, deleteNote, updateNote } from '../../redux/notes/notesSlice';
import { selectActiveNotes } from '../../redux/notes/notesSelector';

export const ActiveNotesPage = () => {
  const activeNotes: Note[] = useSelector(selectActiveNotes);
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
    setIsEditing(false);
    setEditingNote(null);
  };

  const data: RowData[] = activeNotes.map((note: Note) => ({
    id: note.id,
    category: note.category,
    content: note.content,
    archived: note.isArchived,
    dates: note.dates,
    createdAt: note.createdAt,
  }));

  const columns: string[] = [
    'category',
    'content',
    'dates',
    'createdAt',
  ];

  const actions: TableAction[] = [
    { label: 'Edit', onClick: handleEdit },
    { label: 'Delete', onClick: handleDelete },
    { label: 'Archive', onClick: handleArchive },
  ];

  const handleNoteSave = (updatedFields: Note) => {
    if (editingNote) {
      dispatch(updateNote({
        id: editingNote.id,
        updatedFields,
      }));
      setIsEditing(false);
    }
  };

  return (
    <div>
      <h1>Active Notes:</h1>
      <Table data={data} columns={columns} actions={actions} />

      {isEditing && editingNote && (
        <EditNoteModal
          note={editingNote}
          onClose={handleModalClose}
          onSave={handleNoteSave}
        />
      )}
    </div>
  );
};
