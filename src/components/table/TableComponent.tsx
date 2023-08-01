import styled from 'styled-components';

interface TableProps {
  data: RowData[];
  columns: string[];
  actions?: TableAction[];
}

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid #444;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #1a1a1a;
    color: #fff;
  }
  td {
    background-color: #333;
    color: #fff;
  }
  button {
    margin-right: 4px;
    background-color: #444;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 6px 12px;
    cursor: pointer;
  }
  button:hover {
    background-color: #555;
  }
`;

const Table = ({ data, columns, actions = [] }: TableProps) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
          {actions.length > 0 && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {columns.map((column) => (
              <td key={`${item.id}-${column}`}>{item[column]}</td>
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
