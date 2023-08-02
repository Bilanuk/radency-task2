import { getCurrentTime } from '../../utils/dateFormat';

const initialNotesState = [
  {
    id: '1',
    category: 'Idea',
    content: 'First idea note 23/12/2020, 11/01/2021',
    isArchived: false,
    dates: ['23/12/2020', '11/01/2021'],
    createdAt: getCurrentTime(),
  },
  {
    id: '2',
    category: 'Task',
    content: 'Sample task note',
    isArchived: false,
    dates: [],
    createdAt: getCurrentTime(),
  },
  {
    id: '3',
    category: 'Random Thought',
    content: 'Random thought text',
    isArchived: false,
    dates: [],
    createdAt: getCurrentTime(),
  },
  {
    id: '4',
    category: 'Idea',
    content: 'Second idea note',
    isArchived: false,
    dates: [],
    createdAt: getCurrentTime(),
  },
  {
    id: '5',
    category: 'Task',
    content: 'Second task note',
    isArchived: false,
    dates: [],
    createdAt: getCurrentTime(),
  },
  {
    id: '6',
    category: 'Random Thought',
    content: 'Second random thought note',
    isArchived: false,
    dates: [],
    createdAt: getCurrentTime(),
  },
  {
    id: '7',
    category: 'Idea',
    content: 'Third idea note',
    isArchived: false,
    dates: [],
    createdAt: getCurrentTime(),
  },

];

export default initialNotesState;
