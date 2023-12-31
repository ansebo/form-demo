export function formatNumber(number: number | string, separator = ' ') {
  const group = 3;
  const parts = number.toString().split('.');
  const intPart = parts[0].split(' ').join('');
  let formattedStr = '';
  let i;
  let j;
  i = intPart.length;
  while (i > group) {
    j = i - group;
    formattedStr = separator + intPart.slice(j, i) + formattedStr;
    i = j;
  }
  formattedStr = intPart.slice(0, i) + formattedStr;
  parts[0] = formattedStr;
  return parts.join('.');
}
