declare interface Note {
  id: string;
  category: 'Idea' | 'Task' | 'Random Thought';
  content: string;
  isArchived: boolean;
  dates: string[];
  createdAt: string;
}

declare enum Category {
  Idea = 'Idea',
  Task = 'Task',
  RandomThought = 'Random Thought',
}
