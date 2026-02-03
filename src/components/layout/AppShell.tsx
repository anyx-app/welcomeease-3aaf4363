import { Outlet, Link } from 'react-router-dom';

export default function AppShell() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-pink-50 text-slate-800 font-sans selection:bg-pink-200">
      {/* Navigation / Header */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none">
        <div className="mx-4 mt-4 rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] pointer-events-auto">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">
                W
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-600">
                WelcomeEase
              </span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
              {['Guide', 'Rules', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
                </a>
              ))}
            </nav>

            <button className="hidden sm:block px-5 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-full hover:scale-105 active:scale-95 hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20">
              Host Login
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-32 pb-20 px-4 min-h-[calc(100vh-80px)]">
        <div className="container mx-auto max-w-6xl">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/50 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded bg-blue-500/20 text-blue-600 flex items-center justify-center font-bold text-xs">W</div>
                <span className="font-bold text-slate-700">WelcomeEase</span>
              </div>
              <p className="text-slate-500 leading-relaxed max-w-sm text-sm">
                Simplifying vacation rentals with seamless digital guides. Access everything you need for a perfect stay, right from your phone.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-4 text-sm uppercase tracking-wider">Support</h4>
              <ul className="space-y-3 text-slate-500 text-sm">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Emergency Contacts</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Report Issue</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-4 text-sm uppercase tracking-wider">Legal</h4>
              <ul className="space-y-3 text-slate-500 text-sm">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Cookie Settings</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-200/60 text-center text-slate-400 text-xs">
            © {new Date().getFullYear()} WelcomeEase. Designed for modern hospitality.
          </div>
        </div>
      </footer>
    </div>
  );
}
