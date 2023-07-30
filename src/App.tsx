import { useSelector } from 'react-redux';
import { selectActiveNotes, selectArchivedNotes, selectNotesTable } from './redux/notes/notesSelector';
import NoteComponent from './components/note/NoteComponent';
import Table from './components/table/TableComponent';

function App() {
  const activeNotes: Note[] = useSelector(selectActiveNotes);
  const archivedNotes: Note[] = useSelector(selectArchivedNotes);
  const notesTable = useSelector(selectNotesTable);

  return (
    <div className="App">
      <h1>Active Notes:</h1>
      <Table data={activeNotes} />

      <h1>Archived Notes:</h1>
      <Table data={archivedNotes} />

      <h1>Summary</h1>
      <Table data={notesTable} />
    </div>
  )
}

export default App;
