export default function TechnologyPage() {
  const stack = [
    { name: 'Next.js 15+', category: 'Framework', description: 'Leveraging Server Components and App Router for optimal performance.' },
    { name: 'React 19', category: 'UI Library', description: 'Building modular, interactive user interfaces with the latest concurrent features.' },
    { name: 'Tailwind CSS', category: 'Styling', description: 'Utility-first CSS for rapid, scalable, and maintainable design systems.' },
    { name: 'TypeScript', category: 'Language', description: 'End-to-end type safety for a robust and developer-friendly codebase.' },
  ];

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-24 text-center">
        <h1 className="text-6xl font-bold mb-6">Our Tech Stack</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          We use industry-leading technologies to build fast, reliable, and scalable digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
        {stack.map((item) => (
          <div key={item.name} className="p-8 rounded-2xl bg-neutral-900/50 border border-white/5">
            <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">{item.category}</span>
            <h3 className="text-2xl font-bold mt-2 mb-4">{item.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-3xl p-12 border border-white/10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Scalable Architecture</h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            The Ultraverse platform is built with modularity at its core. By utilizing Next.js App Router, we ensure that every section of our site is independently scalable and optimized for performance.
          </p>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Dynamic nested routing for infinite content expansion.
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Shared layout components for consistent global branding.
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Edge-ready deployment for global low-latency access.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
