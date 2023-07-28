declare interface Note {
  id: string;
  category: 'Task' | 'Random Thought' | 'Idea';
  content: string;
  isArchived: boolean;
  dates: string[];
}