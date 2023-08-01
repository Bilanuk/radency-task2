const initialNotesState = [
  {
    id: '1',
    category: 'Idea',
    content: 'First idea note',
    isArchived: false,
    dates: [],
    createdAt: new Date().toLocaleString() + "",
  },
  {
    id: '2',
    category: 'Task',
    content: 'Sample task note',
    isArchived: true,
    dates: [],
    createdAt: new Date().toLocaleString() + "",
  },
  {
    id: '3',
    category: 'Random Thought',
    content: 'Random thought text',
    isArchived: false,
    dates: [],
    createdAt: new Date().toLocaleString() + "",
  },
];

export default initialNotesState;
