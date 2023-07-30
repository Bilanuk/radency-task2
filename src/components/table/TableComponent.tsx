import React from 'react';

interface TableProps {
  data: (Note | SummayInfo)[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const columns = Object.keys(data[0]);
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column}>{item[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
