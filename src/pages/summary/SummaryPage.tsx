import { useSelector } from "react-redux";
import Table from "../../components/table/Table";
import { selectNotesTable } from "../../redux/notes/notesSelector";

import { CategoryIconMapping } from "../../constants";

export const SummaryPage = () => {
  const summary: SummaryInfo[] = useSelector(selectNotesTable);

  const data: RowData[] = summary.map((item: SummaryInfo) => ({
    ...item,
    id: item.category,
    categoryIcon: CategoryIconMapping[item.category],
  }));

  const columns: string[] = [
    "category",
    "activeNoteCount",
    "archivedNotesCount",
  ];

  return (
    <div className="lg:w-3/4 md:w-4/5 sm:w-full flex flex-col items-center">
      <Table data={data} columns={columns} />
    </div>
  );
};
