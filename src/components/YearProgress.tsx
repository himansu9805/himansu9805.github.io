import { useState, useEffect } from "react";

const emptyProgressBar = "▒▒▒▒▒▒▒▒▒▒";

function getCurrentProgress() {
  const firstDateOfYear = new Date(new Date().getFullYear(), 0, 1);
  const currentDate = new Date();
  return (
    (((currentDate.getTime() - firstDateOfYear.getTime()) /
      (1000 * 60 * 60 * 24)) * 100) /
    365
  ).toFixed(6);
}

export default function YearProgress() {
  const [percent, setPercent] = useState(getCurrentProgress());
  const [progressBar, setProgressBar] = useState(emptyProgressBar);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent(getCurrentProgress());
      const counter = Number(percent) / 10;
      setProgressBar(Array.from({ length: counter }, () => "▓").join("") +
        Array.from({ length: 10 - counter }, () => "░").join(""));
      setProgressBar(progressBar.slice(0, counter) + "▒" +
        progressBar.slice(counter + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <div className="flex flex-row justify-center items-center">
        <div className="text-2xl">{progressBar}</div>
        <div className="font-mono text-1xl ml-2">
          {progressBar === emptyProgressBar ? 0 : percent}%
        </div>
      </div>
    </main>
  );
}
