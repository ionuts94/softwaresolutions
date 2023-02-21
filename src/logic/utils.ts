export function removeDuplicateNumbers(list: string[][]) {
  let arrWithoutDupes: string[][] = [];

  for (let item of list) {
    if (item[10] && !arrWithoutDupes.find(el => el[10] === item[10])) {
      arrWithoutDupes.push(item);
    }
  }

  return arrWithoutDupes;
}