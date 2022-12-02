import Head from 'next/head'
import styles from '../styles/Home.module.css'
import UseCSV from "@usecsv/react";
import useSWR from 'swr';
import { Stack } from '@mui/system';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR(
    "/api/csv",
    fetcher
  );
  console.log(data);
  
  //if (error) return <div>Failed to load data</div>
  //if (!data) return ();

  return (
    <div className={styles.container}>
      <Head>
        <title>Example UseCSV Project</title>
      </Head>
      {data.antenaName ? 
       ( 
        <div> 
          {data[0].antenaName} ,  {data[0].tagCode} , {data[0].tagTimeStamp}
        </div> )
        : 
        (
        <Stack direction="column" justifyContent="center" alignItems="center" spacing={3}> 
          No data yet ...
        </Stack>
        )
      }
      
      <main className={styles.main}>
        <UseCSV importerKey="852a58b9-44d5-45fd-ae2d-def76722ddb3" user={{ userId: "Klaus" }}>
          Import Data
        </UseCSV>
      </main>
    </div>
  )
}