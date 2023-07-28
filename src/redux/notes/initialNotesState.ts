const initialNotesState = [
  {
    id: '1',
    category: 'Idea',
    content: 'First idea note',
    isArchived: false,
    dates: ['2023-07-28'],
    createdAt: Date.now().toString(),
  },
  {
    id: '2',
    category: 'Task',
    content: 'Sample task note',
    isArchived: true,
    dates: ['2023-07-29'],
    createdAt: Date.now().toString(),
  },
  {
    id: '3',
    category: 'Random Thought',
    content: 'Random thought note',
    isArchived: false,
    dates: ['2023-07-30'],
    createdAt: Date.now().toString(),
  },
];

export default initialNotesState;
