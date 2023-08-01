export const extractDatesFromContent = (content: string): string[] => {
  const regex = /\d{1,2}\/\d{1,2}\/\d{4}/g;
  return content.match(regex) || [];
};
