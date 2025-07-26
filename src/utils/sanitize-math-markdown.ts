export const sanitizeMathMarkdown = (input: string) => {
  const escaped = JSON.stringify(input).slice(1, -1);
  return escaped.replace(/\\n/g, '\n');
};
