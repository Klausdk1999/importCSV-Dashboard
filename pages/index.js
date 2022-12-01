import Head from 'next/head'
import styles from '../styles/Home.module.css'
import UseCSV from "@usecsv/react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Example UseCSV Project</title>
      </Head>

      <main className={styles.main}>
        <UseCSV importerKey="852a58b9-44d5-45fd-ae2d-def76722ddb3" user={{ userId: "Klaus" }}>
          Import Data
        </UseCSV>
      </main>
    </div>
  )
}