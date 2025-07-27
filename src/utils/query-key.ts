type ProblemListParams = {
  favorite: boolean;
};

export const problemListKey = (params: ProblemListParams) =>
  ['problemList', params] as const;

export const problemDetailKey = (problemId: string) =>
  ['problemDetail', problemId] as const;

export const childInfoKey = () => ['child'] as const;

export const conceptKey = (conceptId: string) =>
  ['concept', conceptId] as const;
