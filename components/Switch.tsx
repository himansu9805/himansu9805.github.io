export default function Switch(
  { label, isChecked, onChange }: {
    label: string;
    isChecked: boolean;
    onChange: () => void;
  },
) {
  return (
    <label class="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        onInput={onChange}
        checked={isChecked}
        class="sr-only peer"
      />
      <div class="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
      </div>
      <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
      </span>
    </label>
  );
}
