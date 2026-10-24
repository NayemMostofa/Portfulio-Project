import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="max-w-xl rounded-[2rem] border border-white/10 bg-slate-900/70 p-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">404</p>
        <h1 className="mt-4 text-4xl font-black text-white">Page not found</h1>
        <p className="mt-4 text-slate-300">The page you are looking for doesn&apos;t exist or has moved.</p>
        <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white">
          <ArrowLeft size={16} /> Go home
        </Link>
      </div>
    </div>
  );
}
