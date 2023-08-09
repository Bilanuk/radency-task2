import React, { useState } from "react";
import { Category } from "../../constants";

interface EditNoteModalProps {
  note: Note;
  onClose: () => void;
  onSave: (note: Note) => void;
}

const EditNoteModal = ({ note, onClose, onSave }: EditNoteModalProps) => {
  const [editedNote, setEditedNote] = useState(note);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setEditedNote({
      ...editedNote,
      [name]: value,
    });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setEditedNote({
      ...editedNote,
      [name]: value,
    });
  };

  const handleSaveClick = () => {
    if (!note.isArchived) {
      onSave(editedNote);
    } else {
      alert("You can't edit archived note");
    }

    onClose();
  };

  const handleCancelClick = () => {
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-modalBackdrop flex items-center justify-center">
      <div className="w-96 bg-background p-8 rounded-lg flex flex-col items-center justify-center">
        <h2 className="text-primary text-lg font-bold mb-4">Create note</h2>
        <select
          name="category"
          value={editedNote.category}
          onChange={handleSelectChange}
          className="w-full px-3 py-2 mb-2 border rounded border-transparent focus:border-transparent focus:ring-0 focus:ring focus:border-blue-500"
        >
          {Object.values(Category).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <textarea
          name="content"
          value={editedNote.content}
          onChange={handleInputChange}
          className="w-full h-36 border rounded p-2 text-text border-transparent focus:border-transparent focus:ring-0 focus:ring focus:border-secondary resize-none"
        />
        <div className="w-full mt-4 flex justify-center">
          <button
            onClick={handleSaveClick}
            className="px-4 py-2 mr-2 text-primary font-bold bg-buttonBg rounded cursor-pointer hover:bg-buttonHover"
          >
            Save
          </button>
          <button
            onClick={handleCancelClick}
            className="px-4 py-2 text-primary font-bold bg-buttonBg rounded cursor-pointer hover:bg-buttonHover"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditNoteModal;
