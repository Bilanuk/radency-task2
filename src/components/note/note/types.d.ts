declare interface Note {
  id: string;
  category: 'Idea' | 'Task' | 'Random Thought'; 
  content: string;
  isArchived: boolean;
  dates: string[];
}

type Category = Note['category'];
