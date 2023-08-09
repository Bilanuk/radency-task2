import { StyledTable } from "./styled";
import { VerySadComponent } from "../shared/verySadComponent";

import { TableItem } from "./TableItem";

interface TableProps {
  data: RowData[];
  columns: string[];
  actions?: TableAction[];
}

const headerColumnsMapping: Record<string, string> = {
  category: "Category",
  content: "Content",
  dates: "Dates",
  createdAt: "Created At",
  activeNoteCount: "Active Notes",
  archivedNotesCount: "Archived Notes",
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
          <TableItem
            key={item.id}
            item={item}
            columns={columns}
            actions={actions}
          />
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
