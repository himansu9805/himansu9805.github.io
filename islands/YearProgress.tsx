import { Signal, useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

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
  const percent: Signal<string> = useSignal(getCurrentProgress());
  const progressBar = useSignal(emptyProgressBar);

  useEffect(() => {
    const interval = setInterval(() => {
      percent.value = getCurrentProgress();
      const counter = Number(percent) / 10;
      progressBar.value = Array.from({ length: counter }, () => "▓").join("") +
        Array.from({ length: 10 - counter }, () => "░").join("");
      progressBar.value = progressBar.value.slice(0, counter) + "▒" +
        progressBar.value.slice(counter + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <div className="flex flex-row justify-center items-center">
        <div className="text-2xl">{progressBar.value}</div>
        <div className="font-mono text-1xl ml-2">
          {progressBar.value === emptyProgressBar ? 0 : percent.value}%
        </div>
      </div>
    </main>
  );
}
