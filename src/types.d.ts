declare interface RowData {
  id: string;
  categoryIcon?: IconType;
  [key: string];
}

declare interface TableAction {
  label: string;
  icon?: IconType;
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

declare type PartialNoteCreate = Omit<Note, 'id' | 'dates' | 'createdAt' | 'isArchived'>;

declare type Category = 'Idea' | 'Task' | 'Random Thought';
