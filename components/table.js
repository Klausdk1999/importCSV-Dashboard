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

const rows = [
  createData("Tunel","Antenna2",null,"30325AB43F047680000000FC",1,-68,"2022-11-25T14:31:38.5460269-03:00",null,"ESTAÇÃO 02"),
  createData("Tunel","Antenna3",null,"30325AB43F04744000000123",11,-73,"2022-11-25T14:31:38.5460269-03:00",null,"ESTAÇÃO 03"),
  createData("Tunel","Antenna3",null,"E2801160600002090301C8D6",40,-69,"2022-11-25T14:31:41.8400997-03:00",null,"ESTAÇÃO 03"),
  createData("Tunel","Antenna3",null,"30325AB43F03CA800000023D",11,-72,"2022-11-25T14:31:41.8400997-03:00",null,"ESTAÇÃO 03"),
  createData("Tunel","Antenna3",null,"30325AB43F03CA800000023E",11,-70,"2022-11-25T14:31:38.5460269-03:00",null,"ESTAÇÃO 03"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Caixa - EPC</TableCell>
            <TableCell align="right">Leitor</TableCell>
            <TableCell align="right">Antena</TableCell>
            <TableCell align="right">readerSpaceAlias</TableCell>
            <TableCell align="right">EPC</TableCell>
            <TableCell align="right">Numero de leituras</TableCell>
            <TableCell align="right">tagRSSI</TableCell>
            <TableCell align="right">Ultíma leitura</TableCell>
            <TableCell align="right">tagMem</TableCell>
            <TableCell align="right">zone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.tagCode}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.tagCode}
              </TableCell>
              <TableCell align="right">{row.readerName}</TableCell>
              <TableCell align="right">{row.antenaName}</TableCell>
              <TableCell align="right">{row.readerSpaceAlias}</TableCell>
              <TableCell align="right">{row.tagCode}</TableCell>
              <TableCell align="right">{row.readCount}</TableCell>
              <TableCell align="right">{row.tagRSSI}</TableCell>
              <TableCell align="right">{row.tagTimeStamp}</TableCell>
              <TableCell align="right">{row.tagMem}</TableCell>
              <TableCell align="right">{row.zone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}