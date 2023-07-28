declare interface Note {
  id: string;
  category: 'Idea' | 'Task' | 'Random Thought';
  content: string;
  isArchived: boolean;
  dates: string[];
  createdAt: string;
}

type Category = Note['category'];
