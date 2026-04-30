export default function SolutionsPage() {
  const solutions = [
    {
      title: 'White Label Streaming',
      category: 'Entertainment',
      description: 'Your own branded streaming platform with end-to-end management.',
      href: '/solutions/white-label-streaming'
    },
    {
      title: 'Privacy Compliance',
      category: 'Legal Tech',
      description: 'Automated data sovereignty and compliance tools for global enterprises.',
      href: '/solutions/privacy-compliance'
    },
    {
      title: 'Creator Economy',
      category: 'Web3',
      description: 'Monetization and ownership infrastructure for the next wave of creators.',
      href: '/solutions/creator-economy'
    },
    {
      title: 'City Data Ecosystems',
      category: 'Smart Cities',
      description: 'Aggregating and visualizing urban data for smarter decision making.',
      href: '/solutions/city-data'
    }
  ];

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-20">
        <h1 className="text-5xl font-bold mb-6">Enterprise Solutions</h1>
        <p className="text-xl text-gray-400">
          Tailored technical ecosystems designed to solve specific industry challenges with the Ultraverse stack.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {solutions.map((solution) => (
          <div key={solution.title} className="group border-b border-white/10 pb-12 hover:border-blue-500/50 transition-colors">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-blue-500 text-sm font-mono tracking-widest uppercase">{solution.category}</span>
                <h2 className="text-3xl font-bold mt-2 group-hover:text-blue-400 transition-colors">{solution.title}</h2>
              </div>
              <a href={solution.href} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                ↗
              </a>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              {solution.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
