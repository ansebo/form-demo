export function parseNumber(number: string, separator = ' ') {
  if (!number) {
    return '';
  }
  const str = number.split(separator).join('');
  return str;
}
