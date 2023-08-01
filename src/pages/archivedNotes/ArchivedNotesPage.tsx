import { useDispatch, useSelector } from 'react-redux';
import Table from '../../components/table/TableComponent';
import { toggleArchiveNote, deleteNote } from '../../redux/notes/notesSlice';
import { selectArchivedNotes } from '../../redux/notes/notesSelector';

import { AiFillDelete } from 'react-icons/ai';
import { BiArchiveOut } from 'react-icons/bi';


export const ArchivedNotesPage = () => {
  const archivedNotes: Note[] = useSelector(selectArchivedNotes);
  const dispatch = useDispatch();

  const handleDelete = (itemId: string) => {
    dispatch(deleteNote(itemId));
  };

  const handleArchive = (itemId: string) => {
    dispatch(toggleArchiveNote(itemId));
  };

  const data: RowData[] = archivedNotes.map((note: Note) => ({
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
    { label: 'Delete', icon: AiFillDelete, onClick: handleDelete },
    { label: 'Unarchive', icon: BiArchiveOut, onClick: handleArchive },
  ];

  return (
    <div>
      <h1>Active Notes:</h1>
      <Table data={data} columns={columns} actions={actions} />
    </div>
  );
};
