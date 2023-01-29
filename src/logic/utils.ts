export function removeDuplicateNumbers(list: string[][]) {
  let arrWithoutDupes: string[][] = [];

  for (let item of list) {
    if (!arrWithoutDupes.find(el => el[6] === item[6])) {
      arrWithoutDupes.push(item);
    }
  }

  return arrWithoutDupes;
}