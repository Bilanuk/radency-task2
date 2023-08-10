import initialNotesState from "../../redux/notes/initialNotesState";
import { Category, CategoryIconMapping } from "../../constants";
import { action } from "@storybook/addon-actions";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BiArchiveIn } from "react-icons/bi";

const sampleNotesData: RowData[] = initialNotesState.map((note) => ({
  ...note,
  dates: note.dates.join(", "),
  categoryIcon: CategoryIconMapping[note.category as Category],
}));

const sampleNotesColumns: string[] = [
  "category",
  "content",
  "dates",
  "createdAt",
];

const sampleNotesActions: TableAction[] = [
  { label: "Edit", icon: AiFillEdit, onClick: action("Edit") },
  { label: "Archive", icon: BiArchiveIn, onClick: action("Archive") },
  { label: "Delete", icon: AiFillDelete, onClick: action("Delete") },
];

const sampleSummaryTable: SummaryInfo[] = [
  { category: Category.Task, activeNoteCount: 2, archivedNotesCount: 1 },
  { category: Category.Idea, activeNoteCount: 1, archivedNotesCount: 0 },
  { category: Category.RandomThought, activeNoteCount: 0, archivedNotesCount: 0 },
];

const sampleSummaryData: RowData[] = sampleSummaryTable.map((item: SummaryInfo) => ({
  ...item,
  id: item.category,
  categoryIcon: CategoryIconMapping[item.category],
}));

const sampleSummaryColumns: string[] = [
  "category",
  "activeNoteCount",
  "archivedNotesCount",
];

export {
  sampleNotesData,
  sampleNotesColumns,
  sampleNotesActions,
  sampleSummaryData,
  sampleSummaryColumns,
};
