import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Chart } from "react-google-charts";
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const options = {
  title: "Caixas por estação",
};

const rowsAntenna1=[];
const rowsAntenna2=[];
const rowsAntenna3=[];
const rowsAntenna4=[];

function handleData(rows){
  // for(let i=0; i<rows.length; i++){
  //   createData(rows[i]);
  // }

  for(let  i = 0; i < rows.length; i++){
    if (rows[i].antenaName == "Antenna1" ) rowsAntenna1.push(rows[i]);
    if (rows[i].antenaName == "Antenna2" ) rowsAntenna2.push(rows[i]);
    if (rows[i].antenaName == "Antenna3" ) rowsAntenna3.push(rows[i]);
    if (rows[i].antenaName == "Antenna4" ) rowsAntenna4.push(rows[i]);
  }
  return
}

let chartData = [
  ["Estação", "Quantidade"],
  ["Estação 1", rowsAntenna1.length],
  ["Estação 2", rowsAntenna2.length],
  ["Estação 3", rowsAntenna3.length],
  ["Estação 4", rowsAntenna4.length]
];

export default function BasicTable() {
  const [rows,setRows] = useState([])

  const { data, error } = useSWR(
    "/api/csv",
    fetcher
  );

  if(data.rows) setRows=data.rows;
  
  handleData(rows);

  return (
  <>
   <Chart
        chartType="PieChart"
        data={chartData}
        options={options}
        width={"100%"}
        height={"400px"}
    />
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'#ADD8E6', color: 'white',}}>
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
        <TableRow style={{backgroundColor:'#ADD8E6', color: 'white',}}>
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
      <TableRow style={{backgroundColor:'#ADD8E6', color: 'white',}}>
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
          <TableRow style={{backgroundColor:'#ADD8E6', color: 'white',}}>
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