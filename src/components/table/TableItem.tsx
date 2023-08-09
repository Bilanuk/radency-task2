interface TableItemProps {
  item: RowData;
  columns: string[];
  actions: TableAction[];
}

export const TableItem = ({ item, columns, actions }: TableItemProps) => {
  return (
    <tr
      key={item.id}
      className="group bg-trBg hover:bg-slate-200 hover:bg-opacity-30 transition"
    >
      {columns.map((column) => (
        <td
          key={`${item.id}-${column}`}
          className="py-3 px-6 text-primary whitespace-nowrap overflow-hidden overflow-ellipsis max-w-0 transition hover:bg-primary hover:bg-opacity-10"
        >
          {column === "category" && item.categoryIcon ? (
            <div className="flex gap-1">
              <item.categoryIcon className="text-3xl p-1 mr-1 text-primary rounded bg-background flex-shrink-0" />
              {item[column]}
            </div>
          ) : (
            item[column]
          )}
        </td>
      ))}
      {actions.length > 0 && (
        <td className="py-3 px-6 text-primary whitespace-nowrap overflow-hidden overflow-ellipsis max-w-xs transition hover:bg-primary hover:bg-opacity-10 text-center">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={() => action.onClick(item.id)}
              className="bg-none border-none p-0 m-0 cursor-pointer"
            >
              {action.icon ? (
                <action.icon className="text-3xl p-1 mr-1 text-primary rounded bg-background" />
              ) : (
                action.label
              )}
            </button>
          ))}
        </td>
      )}
    </tr>
  );
};
