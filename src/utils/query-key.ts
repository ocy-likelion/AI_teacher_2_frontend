type ProblemListParams = {
  favorite: boolean;
};

export const problemListKey = (params: ProblemListParams) =>
  ['problemList', params] as const;

export const problemDetailKey = (problemId: string | string) =>
  ['problemDetail', problemId] as const;

export const childInfoKey = () => ['child'] as const;
