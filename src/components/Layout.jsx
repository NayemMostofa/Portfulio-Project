import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
];

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 font-black text-slate-950">
              NM
            </div>
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.22em] text-slate-300">Nayem</div>
              <div className="text-xs text-slate-400">Portfolio</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${isActive ? 'text-cyan-300' : 'text-slate-300 hover:text-white'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="mailto:mdnayemmostofa9650@gmail.com"
              className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-500/20"
            >
              Let&apos;s Talk
            </a>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div className="border-t border-white/10 bg-slate-950 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-3 py-2 text-sm font-medium ${isActive ? 'bg-cyan-500/10 text-cyan-300' : 'text-slate-200 hover:bg-white/5'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href="mailto:mdnayemmostofa9650@gmail.com"
                className="mt-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-2 text-center text-sm font-semibold text-white"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-6 md:px-8">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-slate-950/90">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 text-sm text-slate-300 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="text-base font-semibold text-white">Nayem Mostofa</p>
            <p>Junior Frontend Developer</p>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <a href="mailto:mdnayemmostofa9650@gmail.com" className="hover:text-cyan-300">Email</a>
            <a href="tel:+8801976309069" className="hover:text-cyan-300">Phone</a>
            <Link to="/projects" className="hover:text-cyan-300">Projects</Link>
            <Link to="/about" className="hover:text-cyan-300">About</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
