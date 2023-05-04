import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import SevenSegment from "@/components/SevenSegment";
import Clock from "@/components/Clock";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function TimeNow() {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Time Now</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>Clock</h1>
        <Clock date={time} />
      </main>
    </>
  );
}
