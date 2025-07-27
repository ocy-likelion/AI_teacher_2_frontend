export default function validateInput(input: string) {
  if (input.length < 2) return false;
  const regex = /([가-힣]|[A-Za-z])/;
  const onlyCombination = /^[ㄱ-ㅎㅏ-ㅣ]+$^/;

  return regex.test(input) && !onlyCombination.test(input);
}
