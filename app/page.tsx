export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">
          Turn rough ideas into{" "}
          <span className="gradient-text">winning proposals</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          PitchForge transforms messy project notes into polished, reviewer-ready
          pitches for grants, hackathons, and model credit programs.
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
        <h2 className="text-2xl font-bold mb-4 text-center">The problem</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          You built something real. But when it comes time to apply for grants,
          credits, or hackathon prizes, you spend hours wrestling with application
          forms instead of shipping. Your proof is scattered across repos, logs,
          and screenshots. Reviewers see a mess, not your work.
        </p>
      </section>

      {/* How it works */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center">How it works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-hover p-6 rounded-xl border border-gray-100">
            <div className="text-3xl mb-3">1</div>
            <h3 className="font-semibold mb-2">Describe your project</h3>
            <p className="text-sm text-gray-600">
              Enter what you built, who it serves, what problem it solves, and
              what tech you used. Raw notes are fine.
            </p>
          </div>
          <div className="card-hover p-6 rounded-xl border border-gray-100">
            <div className="text-3xl mb-3">2</div>
            <h3 className="font-semibold mb-2">Add your evidence</h3>
            <p className="text-sm text-gray-600">
              Link your repo, demo, screenshots, logs, or any artifact that
              proves your work is real and functional.
            </p>
          </div>
          <div className="card-hover p-6 rounded-xl border border-gray-100">
            <div className="text-3xl mb-3">3</div>
            <h3 className="font-semibold mb-2">Generate your pitch</h3>
            <p className="text-sm text-gray-600">
              PitchForge structures everything into a clear, compelling proposal
              that reviewers can scan in 30 seconds.
            </p>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center">Built for</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="p-5 rounded-lg bg-gray-50">
            <h3 className="font-semibold mb-1">Grant applicants</h3>
            <p className="text-sm text-gray-600">Turn project work into structured grant proposals that reviewers trust.</p>
          </div>
          <div className="p-5 rounded-lg bg-gray-50">
            <h3 className="font-semibold mb-1">Hackathon teams</h3>
            <p className="text-sm text-gray-600">Ship your submission docs in minutes, not hours. Focus on building.</p>
          </div>
          <div className="p-5 rounded-lg bg-gray-50">
            <h3 className="font-semibold mb-1">Model credit seekers</h3>
            <p className="text-sm text-gray-600">Prove you have a real use case for API credits. Show, don't tell.</p>
          </div>
          <div className="p-5 rounded-lg bg-gray-50">
            <h3 className="font-semibold mb-1">Open-source maintainers</h3>
            <p className="text-sm text-gray-600">Document impact and usage for sponsorship applications.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100">
        <h2 className="text-2xl font-bold mb-3">Ready to pitch?</h2>
        <p className="text-gray-600 mb-6">No login. No API key. Runs in your browser.</p>
        <a
          href="/builder"
          className="px-8 py-3 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 transition-colors"
        >
          Open Builder
        </a>
      </section>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-gray-100 text-center text-sm text-gray-500">
        <p>PitchForge — built with MiMo. Open source on GitHub.</p>
      </footer>
    </div>
  );
}
