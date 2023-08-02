import { StyledTable } from './styled';
import { VerySadComponent } from '../shared/verySadComponent';

import { StyledActionButton, ActionTd } from './../../styled/shared';

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
    return <VerySadComponent />;
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
              <ActionTd>
                {actions.map((action, index) => (
                  <StyledActionButton key={index} onClick={() => action.onClick(item.id)}>
                    {action.icon ? <action.icon /> : action.label}
                  </StyledActionButton>
                ))}
              </ActionTd>
            )}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
