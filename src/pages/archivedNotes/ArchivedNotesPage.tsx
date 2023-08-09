import { useDispatch, useSelector } from "react-redux";
import Table from "../../components/table/Table";
import { toggleArchiveNote, deleteNote } from "../../redux/notes/notesSlice";
import { selectArchivedNotes } from "../../redux/notes/notesSelector";

import { CategoryIconMapping } from "../../constants";

import { BiArchiveOut } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

export const ArchivedNotesPage = () => {
  const archivedNotes: Note[] = useSelector(selectArchivedNotes);
  const dispatch = useDispatch();

  const handleDelete = (itemId: string) => {
    dispatch(deleteNote(itemId));
  };

  const handleArchive = (itemId: string) => {
    dispatch(toggleArchiveNote(itemId));
  };

  const data: RowData[] = archivedNotes.map((note: Note) => ({
    ...note,
    dates: note.dates.join(", "),
    categoryIcon: CategoryIconMapping[note.category],
  }));

  const columns: string[] = ["category", "content", "dates", "createdAt"];

  const actions: TableAction[] = [
    { label: "Unarchive", icon: BiArchiveOut, onClick: handleArchive },
    { label: "Delete", icon: AiFillDelete, onClick: handleDelete },
  ];

  return (
    <div className="lg:w-3/4 md:w-4/5 sm:w-full flex flex-col items-center">
      <Table data={data} columns={columns} actions={actions} />
    </div>
  );
};
