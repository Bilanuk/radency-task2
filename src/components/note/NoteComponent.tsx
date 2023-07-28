import React from 'react';
import { useSelector } from 'react-redux';
import { selectActiveNotes } from '../../redux/notes/notesSelector';

const NoteComponent: React.FC = () => {
  const activeNotes: Note[] = useSelector(selectActiveNotes);

  return (
    <div className="note">
      <h1>Note</h1>
      {activeNotes.map((note) => (
        <div key={note.id}>
          <h3>{note.category}</h3>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NoteComponent;
