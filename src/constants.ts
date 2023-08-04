import {
  StyledHiOutlineLightBulb,
  StyledBiTask,
  StyledAiOutlineQuestion
} from './styled/shared';

export const Category = {
  Idea: 'Idea',
  Task: 'Task',
  RandomThought: 'Random Thought',
} as const;

export const CategoryIconMapping = {
  [Category.Idea]: StyledHiOutlineLightBulb,
  [Category.Task]: StyledBiTask,
  [Category.RandomThought]: StyledAiOutlineQuestion,
} as const;
