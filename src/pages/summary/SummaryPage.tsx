import { useSelector } from 'react-redux';
import Table from '../../components/table/TableComponent';
import { selectNotesTable } from '../../redux/notes/notesSelector';

export const SummaryPage = () => {
  const summary: SummaryInfo[] = useSelector(selectNotesTable);

  const data: RowData[] = summary.map((item: SummaryInfo) => ({
    id: item.category,
    category: item.category,
    activeNoteCount: item.activeNoteCount,
    archivedNotesCount: item.archivedNotesCount,
  }));

  const columns: string[] = [
    'category',
    'activeNoteCount',
    'archivedNotesCount',
  ];

  return (
    <div>
      <h1>Summary:</h1>
      <Table data={data} columns={columns} />
    </div>
  );
};
