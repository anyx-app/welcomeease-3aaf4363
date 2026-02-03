import { motion } from 'framer-motion';

// Mock Data for Visual Foundation
const FEATURE_CARDS = [
  {
    title: "House Rules",
    icon: "📋",
    description: "Quiet hours, smoking policy, and general guidelines for a pleasant stay.",
    color: "bg-rose-50 border-rose-100 text-rose-600"
  },
  {
    title: "WiFi Access",
    icon: "📡",
    description: "High-speed network credentials and connection troubleshooting.",
    color: "bg-blue-50 border-blue-100 text-blue-600"
  },
  {
    title: "Local Gems",
    icon: "💎",
    description: "Curated recommendations for dining, adventures, and hidden spots.",
    color: "bg-emerald-50 border-emerald-100 text-emerald-600"
  },
  {
    title: "Check-out",
    icon: "👋",
    description: "Simple steps for departure, trash disposal, and key return.",
    color: "bg-purple-50 border-purple-100 text-purple-600"
  }
];

export default function Home() {
  return (
    <div className="space-y-24">
      
      {/* Hero Section */}
      <section className="relative text-center space-y-8 py-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-white/50 shadow-sm backdrop-blur-md text-sm font-medium text-slate-600 mb-4"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Your Guide is Ready
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900"
        >
          Welcome to <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-500">
            Seaside Escape
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          We've prepared everything you need for a perfect stay. 
          Access door codes, WiFi passwords, and local tips instantly.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-semibold shadow-lg shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all">
            Unlock Guide
          </button>
          <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-semibold shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all">
            Host Contact
          </button>
        </motion.div>
      </section>

      {/* Feature Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURE_CARDS.map((feature, idx) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * idx }}
            className={`p-8 rounded-3xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group ${feature.color.replace('text-', 'bg-opacity-20 ')} bg-white`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-6 ${feature.color} bg-opacity-20`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
              {feature.title}
            </h3>
            <p className="text-slate-500 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </section>

      {/* Spotlight Section - e.g. WiFi */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 text-white p-12 md:p-20 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-pink-600/20"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-6 max-w-lg">
            <h2 className="text-3xl md:text-5xl font-bold">Instant Access</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              No more searching through emails. Get your door code and WiFi password immediately upon arrival.
            </p>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-between">
                <span className="text-slate-300 font-medium">WiFi Network</span>
                <span className="font-mono text-blue-300">Seaside_Guest_5G</span>
              </div>
              <div className="p-4 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-between">
                <span className="text-slate-300 font-medium">Password</span>
                <span className="font-mono text-pink-300 flex items-center gap-2">
                  •••••••• 
                  <span className="text-xs uppercase bg-white/20 px-2 py-0.5 rounded">Click to Reveal</span>
                </span>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-sm aspect-square bg-gradient-to-tr from-blue-500 to-pink-500 rounded-3xl opacity-20 blur-3xl animate-pulse"></div>
        </div>
      </section>

    </div>
  );
}
