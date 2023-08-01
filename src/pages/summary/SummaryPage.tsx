import { useSelector } from 'react-redux';
import Table from '../../components/table/Table';
import { selectNotesTable } from '../../redux/notes/notesSelector';

import { CategoryIconMapping } from '../../constants';

export const SummaryPage = () => {
  const summary: SummaryInfo[] = useSelector(selectNotesTable);

  const data: RowData[] = summary.map((item: SummaryInfo) => ({
    ...item,
    id: item.category,
    categoryIcon: CategoryIconMapping[item.category],
  }));

  const columns: string[] = [
    'category',
    'activeNoteCount',
    'archivedNotesCount',
  ];

  return (
    <Table data={data} columns={columns} />
  );
};
