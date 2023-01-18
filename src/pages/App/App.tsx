import { useState } from "react";
import CsvInput from "../../components/CsvInput/CsvInput";
import Table from "../../components/Table/Table";
import { BlueButton } from "../../components/Buttons/Buttons";
import { loadData } from "../../logic/async";

function App() {
  const [fields, setFields] = useState<string[]>([]);
  const [data, setData] = useState<string[][]>([]);

  function splitData(data: string[][]) {
    setFields(data[0]);
    const content: string[][] = [];
    for (let i = 1; i < data.length; i++) {
      content.push(data[i]);
    }
    setData(content);
  }

  return (
    <div className="App">
      <CsvInput updateParent={splitData} />
      {data[0] &&
        <div>
          <BlueButton
            text="Send data"
            onClick={() => loadData(data)}
            style={{ margin: '2rem auto' }}
          />

          <Table>
            <Table.Head>
              <Table.Row>
                {fields.map(item => (
                  <Table.Header key={Math.random() * 1000}>{item}</Table.Header>
                ))}
              </Table.Row>
            </Table.Head>

            <Table.Body>
              {data.map((row, index) => (
                <Table.Row key={index}>
                  {row.map(column => (
                    <Table.Data key={Math.random() * 1000}>{column}</Table.Data>
                  ))}
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      }
    </div>
  );
}

export default App;