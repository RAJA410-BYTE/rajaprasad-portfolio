import { Moon, Sun } from 'lucide-react';
import { useTheme, type ColorScheme } from '../context/ThemeContext';

const colorSchemes: { name: ColorScheme; label: string; color: string }[] = [
  { name: 'blue', label: 'Blue', color: 'bg-blue-500' },
  { name: 'emerald', label: 'Emerald', color: 'bg-emerald-500' },
  { name: 'rose', label: 'Rose', color: 'bg-rose-500' },
  { name: 'amber', label: 'Amber', color: 'bg-amber-500' },
  { name: 'cyan', label: 'Cyan', color: 'bg-cyan-500' }
];

export default function ThemeToggle() {
  const { theme, setTheme, colorScheme, setColorScheme } = useTheme();

  return (
    <div className="flex items-center gap-3">
      <div className="hidden sm:flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
        {colorSchemes.map((scheme) => (
          <button
            key={scheme.name}
            onClick={() => setColorScheme(scheme.name)}
            className={`w-6 h-6 rounded-full transition-all ${scheme.color} ${
              colorScheme === scheme.name ? 'ring-2 ring-offset-2 dark:ring-offset-gray-800' : 'opacity-60 hover:opacity-100'
            }`}
            title={scheme.label}
          />
        ))}
      </div>

      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors"
        title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      >
        {theme === 'light' ? (
          <Moon size={20} className="text-gray-700" />
        ) : (
          <Sun size={20} className="text-yellow-400" />
        )}
      </button>
    </div>
  );
}
