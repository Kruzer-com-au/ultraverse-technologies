export default function ProductsPage() {
  const products = [
    {
      name: 'UltraStream',
      description: 'Next-generation low-latency streaming infrastructure for global reach.',
      href: '/products/ultrastream',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      name: 'UltraData',
      description: 'Decentralized data storage and processing at the edge.',
      href: '/products/ultradata',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'UltraVerse',
      description: 'Immersive virtual world platforms for enterprise and entertainment.',
      href: '/products/ultraverse',
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h1 className="text-5xl font-bold mb-6">Our Products</h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          Scale your digital footprint with our suite of high-performance technical products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.name} className="group relative p-8 rounded-2xl bg-neutral-900 border border-white/5 hover:border-white/10 transition-all overflow-hidden">
            <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${product.color}`} />
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              {product.description}
            </p>
            <a href={product.href} className="inline-flex items-center text-sm font-semibold group-hover:gap-2 transition-all">
              Learn More <span className="ml-1">→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
