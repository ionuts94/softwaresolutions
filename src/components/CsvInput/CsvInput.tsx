import { useRef, useEffect } from 'react';

export default function CsvInput(
  { updateParent }: { updateParent?: (list: string[][]) => void }
) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(function () {
    inputRef.current?.addEventListener('change', function () {
      const reader = new FileReader();

      reader.addEventListener('load', function () {
        const content = reader.result || '';

        if (typeof content === "string") {
          const arrayOfRows = content.split('\n');
          console.log(arrayOfRows);
          const arrayOfRowsWithColumns = arrayOfRows.map(customRowSplit);
          const parsedListWithPhoneNumbers = parsePhoneNumbers(arrayOfRowsWithColumns);
          console.log(parsedListWithPhoneNumbers);
          if (updateParent) {
            updateParent(parsedListWithPhoneNumbers)
          }
        }
      });

      if (inputRef.current && inputRef.current.files) {
        reader.readAsText(inputRef.current.files[0])
      }
    })
  }, [updateParent])

  return (
    <input ref={inputRef} type="file" />
  )
}

function parsePhoneNumbers(list: string[][]): string[][] {
  for (let i = 0; i < list.length; i++) {
    if (i === 0) continue;
    list[i][6] = parsePhoneNumber(list[i][6]);
  }

  return list
}

function parsePhoneNumber(phoneNumber: string = ''): string {
  let newPhoneNumber = '';
  for (let i = 0; i < phoneNumber.length; i++) {
    if (Number(phoneNumber[i]) || Number(phoneNumber[i]) === 0) {
      newPhoneNumber += phoneNumber[i];
    }
  }
  return newPhoneNumber;
}

function customRowSplit(row: string) {
  const columns: string[] = [];
  let columnString = '';
  let leftFound = false;

  for (let i = 0; i < row.length; i++) {
    if (i === row.length - 1) {
      columnString += row[i];
      columns.push(columnString);
      columnString = '';
    } else if (row[i] === '"') {
      if (leftFound === false) {
        leftFound = true;
      } else {
        leftFound = false;
      }
    } else if (row[i] === ',' && !leftFound) {
      columns.push(columnString);
      columnString = '';
    } else {
      columnString += row[i];
    }
  }

  return columns;
}