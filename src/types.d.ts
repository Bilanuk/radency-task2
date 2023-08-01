declare interface RowData {
  id: string;
  [key: string];
}

declare interface TableAction {
  label: string;
  onClick: (itemId: string) => void;
}

declare interface SummaryInfo {
  category: Category;
  activeNoteCount: number;
  archivedNotesCount: number;
}


declare interface Note {
  id: string;
  category: Category;
  content: string;
  isArchived: boolean;
  dates: string[];
  createdAt: string;
}

declare type Category = 'Idea' | 'Task' | 'Random Thought';
