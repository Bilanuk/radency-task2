import { StyledActionButton, ActionTd } from "./../../styled/shared";

interface TableItemProps {
  item: RowData;
  columns: string[];
  actions: TableAction[];
}

export const TableItem = ({ item, columns, actions }: TableItemProps) => {
  return (
    <tr key={item.id}>
      {columns.map((column) => (
        <td key={`${item.id}-${column}`}>
          {column === "category" && item.categoryIcon ? (
            <>
              <item.categoryIcon />
              {item[column]}
            </>
          ) : (
            item[column]
          )}
        </td>
      ))}
      {actions.length > 0 && (
        <ActionTd>
          {actions.map((action, index) => (
            <StyledActionButton
              key={index}
              onClick={() => action.onClick(item.id)}
            >
              {action.icon ? <action.icon /> : action.label}
            </StyledActionButton>
          ))}
        </ActionTd>
      )}
    </tr>
  );
};
