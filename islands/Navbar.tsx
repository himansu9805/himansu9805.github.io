import { Signal, useSignal } from "@preact/signals";
import Switch from "../components/Switch.tsx";

export default function Navbar() {
  const isDark: Signal<boolean> = useSignal(false);

  const handleToggleChange = () => {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="p-4 md:p-8 fixed top-0 w-full bg-white dark:bg-gray-800 z-10 border-b dark:border-none">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="/icon-circle.png"
            alt="logo"
            className="h-8 w-8"
          />
          <div className="text-xl font-mono text-gray-900 dark:text-gray-100 ">
            himansu.dev
          </div>
        </div>
        <Switch
          isChecked={isDark.value}
          label="Dark Mode"
          onChange={handleToggleChange}
        />
      </div>
    </div>
  );
}
