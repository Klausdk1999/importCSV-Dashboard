import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(readerName,antenaName,readerSpaceAlias,tagCode,readCount,tagRSSI,tagTimeStamp,tagMem,zone) {
  return { readerName,antenaName,readerSpaceAlias,tagCode,readCount,tagRSSI,tagTimeStamp,tagMem,zone};
}

const rowsAntenna1=[];
const rowsAntenna2=[];
const rowsAntenna3=[];
const rowsAntenna4=[];

const rows = [
  createData("Tunel","Antenna2",null,"30325AB43F047680000000FC",1,-68,"2022-11-25T14:31:38.5460269-03:00",null,"ESTAÇÃO 02"),
  createData("Tunel","Antenna3",null,"30325AB43F04744000000123",11,-73,"2022-11-25T14:31:38.5460269-03:00",null,"ESTAÇÃO 03"),
  createData("Tunel","Antenna3",null,"E2801160600002090301C8D6",40,-69,"2022-11-25T14:31:41.8400997-03:00",null,"ESTAÇÃO 03"),
  createData("Tunel","Antenna3",null,"30325AB43F03CA800000023D",11,-72,"2022-11-25T14:31:41.8400997-03:00",null,"ESTAÇÃO 03"),
  createData("Tunel","Antenna3",null,"30325AB43F03CA800000023E",11,-70,"2022-11-25T14:31:38.5460269-03:00",null,"ESTAÇÃO 03"),
  createData("Tunel","Antenna4",null,"30325AB16E021A800007A50B",3,-76,"2022-11-25T14:31:41.8400997-03:00",null,"ESTAÇÃO 04" ),
  createData("Tunel","Antenna1",null,"30325AB43F03CA8000000234",4,-70,"2022-11-25T14:31:41.8400997-03:00",null,"ESTAÇÃO 01")
];

// logica separar por estação
for(let  i = 0; i < rows.length; i++){
  if (rows[i].antenaName == "Antenna1" ) rowsAntenna1.push(rows[i]);
  if (rows[i].antenaName == "Antenna2" ) rowsAntenna2.push(rows[i]);
  if (rows[i].antenaName == "Antenna3" ) rowsAntenna3.push(rows[i]);
  if (rows[i].antenaName == "Antenna4" ) rowsAntenna4.push(rows[i]);
}


export default function BasicTable() {
  return (
  <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'yellow', color: 'white',}}>
            <TableCell>Estação 1 - EPCs</TableCell>
            <TableCell align="right">Antena</TableCell>
            <TableCell align="right">EPC</TableCell>
            <TableCell align="right">Numero de leituras</TableCell>
            <TableCell align="right">tagRSSI</TableCell>
            <TableCell align="right">Ultíma leitura</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsAntenna1.map((row) => (
            <TableRow
              key={row.tagCode}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.tagCode}
              </TableCell>
              <TableCell align="right">{row.antenaName}</TableCell>
              <TableCell align="right">{row.tagCode}</TableCell>
              <TableCell align="right">{row.readCount}</TableCell>
              <TableCell align="right">{row.tagRSSI}</TableCell>
              <TableCell align="right">{row.tagTimeStamp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow style={{backgroundColor:'yellow', color: 'white',}}>
          <TableCell>Estação 2 - EPCs</TableCell>
          <TableCell align="right">Antena</TableCell>
          <TableCell align="right">EPC</TableCell>
          <TableCell align="right">Numero de leituras</TableCell>
          <TableCell align="right">tagRSSI</TableCell>
          <TableCell align="right">Ultíma leitura</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rowsAntenna2.map((row) => (
          <TableRow
            key={row.tagCode}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.tagCode}
            </TableCell>
            <TableCell align="right">{row.antenaName}</TableCell>
            <TableCell align="right">{row.tagCode}</TableCell>
            <TableCell align="right">{row.readCount}</TableCell>
            <TableCell align="right">{row.tagRSSI}</TableCell>
            <TableCell align="right">{row.tagTimeStamp}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow style={{backgroundColor:'yellow', color: 'white',}}>
        <TableCell>Estação 3 - EPCs</TableCell>
        <TableCell align="right">Antena</TableCell>
        <TableCell align="right">EPC</TableCell>
        <TableCell align="right">Numero de leituras</TableCell>
        <TableCell align="right">tagRSSI</TableCell>
        <TableCell align="right">Ultíma leitura</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rowsAntenna3.map((row) => (
        <TableRow
          key={row.tagCode}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.tagCode}
          </TableCell>
          <TableCell align="right">{row.antenaName}</TableCell>
          <TableCell align="right">{row.tagCode}</TableCell>
          <TableCell align="right">{row.readCount}</TableCell>
          <TableCell align="right">{row.tagRSSI}</TableCell>
          <TableCell align="right">{row.tagTimeStamp}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'yellow', color: 'white',}}>
            <TableCell>Estação 4 - EPCs</TableCell>
            <TableCell align="right">Antena</TableCell>
            <TableCell align="right">EPC</TableCell>
            <TableCell align="right">Numero de leituras</TableCell>
            <TableCell align="right">tagRSSI</TableCell>
            <TableCell align="right">Ultíma leitura</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsAntenna4.map((row) => (
            <TableRow
              key={row.tagCode}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.tagCode}
              </TableCell>
              <TableCell align="right">{row.antenaName}</TableCell>
              <TableCell align="right">{row.tagCode}</TableCell>
              <TableCell align="right">{row.readCount}</TableCell>
              <TableCell align="right">{row.tagRSSI}</TableCell>
              <TableCell align="right">{row.tagTimeStamp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}