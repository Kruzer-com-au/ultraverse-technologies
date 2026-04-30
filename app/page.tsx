import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative isolate">
      {/* Hero Section */}
      <div className="relative px-6 pt-14 lg:px-8 min-h-[90vh] flex items-center">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56 text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20 transition-all">
              Announcing UltraData 2.0.{' '}
              <Link href="/products/ultradata" className="font-semibold text-blue-400">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-7xl">
            Architecting the <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Digital Frontier</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Scalable infrastructure for the next generation of streaming, data processing, and immersive experiences. Built for performance, designed for the future.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/products"
              className="rounded-md bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
            >
              Explore Products
            </Link>
            <Link href="/technology" className="text-sm font-semibold leading-6 text-white group">
              Learn our stack <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* Background Gradients */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-400">Transactions every 24 hours</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">44 million</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-400">Assets under holding</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">$119 trillion</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-400">New users annually</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">46,000</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
