import React from "react";

import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Clock from "@/components/Clock";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { ClockNumbers, ITime } from "@/types/Clock.types";
import {
  calculateSecondsFromTime,
  calculateTimeFromSeconds,
} from "@/utils/Clock.utils";

const inter = Inter({ subsets: ["latin"] });

export default function CountdownTimer() {
  const [running, setRunning] = useState<boolean>(false);
  const [settingUp, setSettingUp] = useState<ClockNumbers | undefined>(
    undefined
  );
  const [time, setTime] = useState<ITime>(calculateTimeFromSeconds(0));
  const [seconds, setSeconds] = useState<number>(0);

  const resetSeconds = () => {
    setRunning(false);
    setSeconds(calculateSecondsFromTime(time));
  };

  const handleSetup = () => {
    resetSeconds();
    setSettingUp(ClockNumbers.Seconds);
  };

  const handleStepLeft = () => {
    setSettingUp((p) => {
      switch (p) {
        case ClockNumbers.Seconds:
          return ClockNumbers.Minutes;
        case ClockNumbers.Minutes:
          return ClockNumbers.Hours;
        default:
          return ClockNumbers.Days;
      }
    });
    setSeconds(() => calculateSecondsFromTime(time));
  };

  const handleStepRight = () => {
    setSettingUp((p) => {
      switch (p) {
        case ClockNumbers.Days:
          return ClockNumbers.Hours;
        case ClockNumbers.Hours:
          return ClockNumbers.Minutes;
        default:
          return ClockNumbers.Seconds;
      }
    });
    setSeconds(() => calculateSecondsFromTime(time));
  };

  const toggleRunning = () => {
    setRunning((run) => !run);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (running) {
        setSeconds((sec) => {
          return sec > 0 ? sec - 1 : 0;
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    if (settingUp) {
      setTime(calculateTimeFromSeconds(seconds));
    }
  }, [seconds, settingUp]);

  return (
    <>
      <Head>
        <title>Countdown Timer</title>
        <meta name="description" content="Countdown timer page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Header />
        <h1>Countdown Timer</h1>
        <div className={styles.buttonWrapper}>
          <button className={styles.button} onClick={resetSeconds}>
            Reset
          </button>
          <button className={styles.button} onClick={handleSetup}>
            Setup
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
