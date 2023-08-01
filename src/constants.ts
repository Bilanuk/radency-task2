import { HiOutlineLightBulb } from 'react-icons/hi';
import { BiTask } from 'react-icons/bi';
import { AiOutlineQuestion } from 'react-icons/ai';

export const Category = {
  Idea: 'Idea',
  Task: 'Task',
  RandomThought: 'Random Thought',
} as const;

export const CategoryIconMapping = {
  [Category.Idea]: HiOutlineLightBulb,
  [Category.Task]: BiTask,
  [Category.RandomThought]: AiOutlineQuestion,
} as const;
