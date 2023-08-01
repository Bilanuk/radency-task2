import { StyledTable } from './styled';

interface TableProps {
  data: RowData[];
  columns: string[];
  actions?: TableAction[];
}
  
const headerColumnsMapping: Record<string, string> = {
  category: 'Category',
  content: 'Content',
  dates: 'Dates',
  createdAt: 'Created At',
  activeNoteCount: 'Active Notes',
  archivedNotesCount: 'Archived Notes',
 };

const Table = ({ data, columns, actions = [] }: TableProps) => {
  if (data.length === 0) {
    return <div>No data to display</div>;
  }

  return (
    <StyledTable>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{headerColumnsMapping[column]}</th>
          ))}
          {actions.length > 0 && <th></th>}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {columns.map((column) => (
              <td key={`${item.id}-${column}`}>{
                column === 'category' && item.categoryIcon
                  ? <><item.categoryIcon /> {item[column]} </>
                  : item[column]
              }</td>
            ))}
            {actions.length > 0 && (
              <td>
                {actions.map((action, index) => (
                  <button key={index} onClick={() => action.onClick(item.id)}>
                    {action.icon ? <action.icon /> : action.label}
                  </button>
                ))}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
