import { useSelector } from 'react-redux';
import Table from '../../components/table/Table';
import { selectNotesTable } from '../../redux/notes/notesSelector';

import { CategoryIconMapping } from '../../constants';

import { StyledPageWrapper } from '../../styled/shared';

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
    <StyledPageWrapper>
      <Table data={data} columns={columns} />
    </StyledPageWrapper>
  );
};
