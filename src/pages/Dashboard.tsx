import { GlassCard } from '../components/ui/GlassCard';

export default function Dashboard() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="relative py-8 md:py-12">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wide text-blue-600 uppercase bg-blue-100/50 rounded-full border border-blue-200/50">
            Current Stay
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Welcome to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500">
              Oceanview Retreat
            </span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
            We're delighted to have you. Here's everything you need to know to make your stay comfortable and seamless.
          </p>
        </div>
      </section>

      {/* Quick Actions Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* WiFi Card */}
        <GlassCard 
          title="WiFi Access" 
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>}
        >
          <div className="space-y-2">
            <div>
              <div className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Network</div>
              <div className="font-mono text-lg text-slate-800 font-medium select-all">OceanGuest_5G</div>
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Password</div>
              <div className="font-mono text-lg text-slate-800 font-medium select-all">Welcome2024!</div>
            </div>
            <button className="w-full mt-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              Copy Password
            </button>
          </div>
        </GlassCard>

        {/* Check-in Info */}
        <GlassCard 
          title="Access Codes" 
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>}
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
              <span className="text-slate-600">Front Door</span>
              <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded">8842 #</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
              <span className="text-slate-600">Back Gate</span>
              <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded">1234</span>
            </div>
            <p className="text-xs text-slate-400 italic">
              * Press # after entering the front door code to unlock.
            </p>
          </div>
        </GlassCard>

        {/* House Guide CTA */}
        <GlassCard 
          title="House Guide" 
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>}
          className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-white/60 to-blue-50/50"
          onClick={() => console.log('Navigate to guide')}
        >
          <p className="mb-4 text-slate-600">
            Learn how to use the coffee machine, hot tub, and thermostat.
          </p>
          <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
            View Full Guide <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
          </div>
        </GlassCard>
      </section>

      {/* Local Recommendations Preview */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full"></span>
          Local Favorites
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Joe's Coffee", tag: "Cafe", dist: "0.2 mi" },
            { name: "The Blue Crab", tag: "Dinner", dist: "1.5 mi" },
            { name: "Sunset Beach", tag: "Activity", dist: "0.5 mi" },
          ].map((place, i) => (
            <GlassCard key={i} className="hover:bg-white/60">
              <div className="flex justify-between items-start mb-2">
                <span className="px-2 py-1 text-xs font-semibold bg-pink-100 text-pink-600 rounded-full">
                  {place.tag}
                </span>
                <span className="text-xs text-slate-400">{place.dist}</span>
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-1">{place.name}</h3>
              <p className="text-slate-500 text-sm">Top rated by guests.</p>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
