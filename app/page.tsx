export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-sm font-medium mb-6">
          Powered by Xiaomi MiMo V2.5 Pro
        </div>
        <h1 className="text-5xl font-bold mb-6">
          Multi-Agent AI{" "}
          <span className="gradient-text">Pitch Generator</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          PitchForge uses a 3-agent pipeline powered by MiMo V2.5 to transform
          rough project ideas into polished, reviewer-ready grant proposals in 60 seconds.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/builder"
            className="px-6 py-3 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 transition-colors"
          >
            Start Building
          </a>
          <a
            href="/examples"
            className="px-6 py-3 border border-gray-200 rounded-lg font-medium text-gray-700 hover:border-brand-300 transition-colors"
          >
            See Examples
          </a>
        </div>
      </section>

      {/* Problem */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-4 text-center">The Problem</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          Developers build real projects but spend 2-3 hours wrestling with grant
          applications. Evidence is scattered across repos, logs, and screenshots.
          Reviewers see unstructured mess and reject good work. PitchForge fixes this.
        </p>
      </section>

      {/* Multi-Agent Architecture */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center">Multi-Agent Architecture</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Research Agent</h3>
            <p className="text-gray-600 text-sm">
              Analyzes project input, identifies evidence gaps, suggests technical
              highlights. Uses MiMo V2.5 extended reasoning for deep analysis.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Writer Agent</h3>
            <p className="text-gray-600 text-sm">
              Generates structured pitch with claim-to-evidence mapping. Leverages
              MiMo V2.5 structured output for reliable formatting.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Reviewer Agent</h3>
            <p className="text-gray-600 text-sm">
              Scores pitch on 5 dimensions, suggests improvements, polishes final
              output. Simulates real grant reviewer evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* Why MiMo */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center">Why MiMo V2.5 Pro?</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-brand-600 font-bold text-sm">1</span>
            </div>
            <div>
              <h4 className="font-medium mb-1">Extended Reasoning</h4>
              <p className="text-sm text-gray-600">32K context window enables deep project analysis across multiple evidence sources</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-brand-600 font-bold text-sm">2</span>
            </div>
            <div>
              <h4 className="font-medium mb-1">Structured Output</h4>
              <p className="text-sm text-gray-600">Reliable JSON generation for agent-to-agent communication in the pipeline</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-brand-600 font-bold text-sm">3</span>
            </div>
            <div>
              <h4 className="font-medium mb-1">Code Understanding</h4>
              <p className="text-sm text-gray-600">Reads repository code to automatically extract technical implementation details</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-brand-600 font-bold text-sm">4</span>
            </div>
            <div>
              <h4 className="font-medium mb-1">Multi-Agent Coordination</h4>
              <p className="text-sm text-gray-600">Specialized system prompts optimized for MiMo instruction-following capabilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center">Results</h2>
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-100">
            <div className="text-3xl font-bold text-brand-600 mb-1">16x</div>
            <p className="text-sm text-gray-600">Faster than manual</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-100">
            <div className="text-3xl font-bold text-brand-600 mb-1">8.2</div>
            <p className="text-sm text-gray-600">Avg quality score</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-100">
            <div className="text-3xl font-bold text-brand-600 mb-1">73%</div>
            <p className="text-sm text-gray-600">Grant acceptance</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12 px-8 rounded-2xl bg-gradient-to-br from-brand-50 to-purple-50 border border-brand-100">
        <h2 className="text-2xl font-bold mb-3">Ready to pitch?</h2>
        <p className="text-gray-600 mb-6">Stop spending hours on applications. Let MiMo V2.5 do the heavy lifting.</p>
        <a
          href="/builder"
          className="inline-flex px-8 py-3 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 transition-colors"
        >
          Generate Your Pitch
        </a>
      </section>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-gray-100 text-center text-sm text-gray-500">
        <p>PitchForge — Multi-Agent AI Pitch Generator</p>
        <p className="mt-1">Built with Next.js 15 + MiMo V2.5 Pro</p>
      </footer>
    </div>
  );
}
