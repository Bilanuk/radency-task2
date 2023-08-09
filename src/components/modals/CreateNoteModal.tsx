import React, { useState } from "react";
import { Category } from "../../constants";
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/notes/notesSlice";

interface CreateNoteModalProps {
  onClose: () => void;
}

const CreateNoteModal = ({ onClose }: CreateNoteModalProps) => {
  const [category, setCategory] = useState<Category>(Category.Task);
  const [content, setContent] = useState<string>("");
  const dispatch = useDispatch();

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategory(event.target.value as Category);
  };

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent(event.target.value);
  };

  const handleCreateNote = () => {
    if (!content) {
      alert("Please enter note content");
      return;
    }

    if (content) {
      dispatch(
        addNote({
          category,
          content,
        })
      );
    }

    setCategory(Category.Task);
    setContent("");

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
          value={category}
          onChange={handleCategoryChange}
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
          value={content}
          onChange={handleContentChange}
          className="w-full h-36 border rounded p-2 text-text border-transparent focus:border-transparent focus:ring-0  focus:ring focus:border-secondary resize-none"
        />
        <div className="w-full mt-4 flex justify-center">
          <button
            onClick={handleCreateNote}
            className="px-4 py-2 mr-2 text-primary font-bold bg-buttonBg rounded cursor-pointer hover:bg-buttonHover"
          >
            Create
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

export default CreateNoteModal;
