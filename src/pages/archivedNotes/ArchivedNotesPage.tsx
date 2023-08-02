import { useDispatch, useSelector } from 'react-redux';
import Table from '../../components/table/Table';
import { toggleArchiveNote, deleteNote } from '../../redux/notes/notesSlice';
import { selectArchivedNotes } from '../../redux/notes/notesSelector';

import { StyledAiFillDelete, StyledBiArchiveOut } from '../../styled/shared';


import { CategoryIconMapping } from '../../constants';

import { StyledPageWrapper } from '../../styled/shared';

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
    { label: 'Unarchive', icon: StyledBiArchiveOut, onClick: handleArchive },
    { label: 'Delete', icon: StyledAiFillDelete, onClick: handleDelete },
  ];

  return (
    <StyledPageWrapper>
      <Table data={data} columns={columns} actions={actions} />
    </StyledPageWrapper>
  );
};
