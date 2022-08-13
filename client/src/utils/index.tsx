export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function splitOnCapitalLetter(str: string) {
  const splitedWords = str.split(/(?=[A-Z])/);
  return splitedWords.join(' ');
}
