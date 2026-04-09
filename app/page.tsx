export default function Page() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-5xl text-white mb-6">
        Fixing Broken Marketing
      </h1>

      <p className="text-gray-400 mb-10 text-lg">
        From random acts of marketing to a growth system.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl text-white mb-3">Identity</h2>
        <p className="text-gray-400">
          Define who you actually target. Without clear segmentation, ICP, and buying groups, marketing becomes generic.
        </p>

        <details className="mt-4 bg-[#1a1a1a] p-4 rounded">
          <summary className="cursor-pointer text-yellow-500">What to do</summary>
          <p className="mt-3 text-gray-400">
            Build segmentation, define ICP, and map buying groups.
          </p>
        </details>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl text-white mb-3">Value</h2>
        <p className="text-gray-400">
          Clarify why act, why you, and why trust.
        </p>
      </section>

      <section>
        <h2 className="text-2xl text-white mb-3">Positioning</h2>
        <p className="text-gray-400">
          Define where you compete and why your difference matters.
        </p>
      </section>
    </main>
  );
}