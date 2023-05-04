import React from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Clock from "@/components/Clock";
import { useEffect, useState } from "react";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function StopWatch() {
  const [running, setRunning] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(0);

  const resetSeconds = () => {
    setRunning(false);
    setSeconds(0);
  };

  const toggleRunning = () => {
    setRunning((run) => !run);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (running) {
        setSeconds((sec) => sec + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [running]);

  return (
    <>
      <Head>
        <title>Stop Watch</title>
        <meta name="description" content="Stop watch page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Header />
        <h1>Stop Watch</h1>
        <div className={styles.buttonWrapper}>
          <button className={styles.button} onClick={resetSeconds}>
            Reset
          </button>
          <button className={styles.button} onClick={toggleRunning}>
            {running ? "Stop" : "Start"}
          </button>
        </div>
        <Clock seconds={seconds} />
      </main>
    </>
  );
}
