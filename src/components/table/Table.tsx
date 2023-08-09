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
    <div className="w-full rounded-lg shadow-lg overflow-hidden">
      <table className="border-collapse w-full">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                className="text-center bg-primary bg-opacity-80 text-black py-3 px-6"
                key={column}
              >
                {headerColumnsMapping[column]}
              </th>
            ))}
            {actions.length > 0 && (
              <th className="text-center bg-primary bg-opacity-80 text-black py-3 px-6" />
            )}
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
      </table>
    </div>
  );
};

export default Table;
