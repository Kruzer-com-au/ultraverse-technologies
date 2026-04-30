export default function UltraStreamPage() {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
        <div className="flex-1">
          <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">Products / UltraStream</span>
          <h1 className="text-6xl font-bold mt-4 mb-8 leading-tight">
            High Performance <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Streaming Infrastructure
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            Deliver seamless, low-latency video and data streams to millions of concurrent users worldwide with our distributed edge network.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors">
              Deploy Now
            </button>
            <button className="border border-white/20 hover:bg-white/5 text-white px-8 py-3 rounded-lg font-bold transition-colors">
              Documentation
            </button>
          </div>
        </div>
        <div className="flex-1 w-full aspect-square bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl border border-white/5 flex items-center justify-center relative overflow-hidden">
           {/* Abstract visual element */}
           <div className="absolute w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
           <div className="z-10 text-9xl font-black text-white/5">STREAM</div>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-400">Low Latency</h3>
          <p className="text-gray-400">Sub-500ms global delivery for interactive applications and live events.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-400">Edge Optimized</h3>
          <p className="text-gray-400">Content processed and cached at the network edge, closest to your users.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-400">Auto-Scaling</h3>
          <p className="text-gray-400">Automatically scales to handle sudden traffic spikes without performance degradation.</p>
        </div>
      </section>
    </div>
  );
}
