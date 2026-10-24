import { MoonStar, SunMedium } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../features/themeSlice';

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  return (
    <button
      type="button"
      onClick={() => dispatch(toggleTheme())}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-400/50 hover:text-white"
      aria-label="Toggle theme"
    >
      {mode === 'dark' ? <SunMedium size={16} /> : <MoonStar size={16} />}
      <span>{mode === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  );
}
