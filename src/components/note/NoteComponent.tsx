import React from 'react';

interface NoteComponentProps {
  note: Note;
}

const NoteComponent: React.FC<NoteComponentProps> = ({ note }) => {
  return (
    <div className="note">
      <h1>Note</h1>
        <div key={note.id}>
          <h3>{note.category}</h3>
          <p>{note.content}</p>
        </div>
    </div>
  );
};

export default NoteComponent;
