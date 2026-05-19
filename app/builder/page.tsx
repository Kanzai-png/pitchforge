"use client";

import { useState } from "react";
import { generatePitch, generateGrantAnswer, ProjectInput, EvidenceItem } from "@/lib/generate-pitch";

export default function Builder() {
  const [input, setInput] = useState<ProjectInput>({
    name: "",
    problem: "",
    solution: "",
    users: "",
    techStack: "",
    modelUsed: "",
    repoUrl: "",
    demoUrl: "",
    evidence: [],
    grantTarget: "",
  });

  const [output, setOutput] = useState<string>("");
  const [mode, setMode] = useState<"pitch" | "grant">("pitch");
  const [copied, setCopied] = useState(false);

  const addEvidence = () => {
    setInput({
      ...input,
      evidence: [...input.evidence, { type: "repo", url: "", description: "" }],
    });
  };

  const updateEvidence = (index: number, field: keyof EvidenceItem, value: string) => {
    const updated = [...input.evidence];
    updated[index] = { ...updated[index], [field]: value };
    setInput({ ...input, evidence: updated });
  };

  const removeEvidence = (index: number) => {
    setInput({
      ...input,
      evidence: input.evidence.filter((_, i) => i !== index),
    });
  };

  const generate = () => {
    if (mode === "pitch") {
      setOutput(generatePitch(input));
    } else {
      setOutput(generateGrantAnswer(input));
    }
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const loadExample = () => {
    setInput({
      name: "ShipLog",
      problem: "developers spend 2-3 hours writing release notes and changelogs manually after each sprint",
      solution: "an automated changelog generator that analyzes git history and produces structured, human-readable release notes",
      users: "development teams shipping weekly releases, open-source maintainers, DevOps engineers",
      techStack: "Next.js 15, TypeScript, Tailwind CSS, Vercel",
      modelUsed: "Xiaomi MiMo-2.5-Pro",
      repoUrl: "https://github.com/example/shiplog",
      demoUrl: "https://shiplog-demo.vercel.app",
      evidence: [
        { type: "repo", url: "https://github.com/example/shiplog", description: "Public repository with full commit history" },
        { type: "demo", url: "https://shiplog-demo.vercel.app", description: "Live deployment with working generation" },
        { type: "artifact", url: "https://shiplog-demo.vercel.app/sample", description: "Sample generated changelog" },
      ],
      grantTarget: "Xiaomi MiMo Model Credit Program",
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Pitch Builder</h1>
        <p className="text-gray-600">Fill in your project details. PitchForge structures them into a reviewer-ready proposal.</p>
        <button onClick={loadExample} className="mt-3 text-sm text-brand-600 hover:text-brand-700 underline">Load MiMo example</button>
      </div>

      <div className="space-y-6 mb-8">
        <div>
          <label className="block text-sm font-medium mb-1">Project name</label>
          <input type="text" value={input.name} onChange={(e) => setInput({ ...input, name: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-200" placeholder="e.g. ShipLog" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Problem it solves</label>
          <textarea value={input.problem} onChange={(e) => setInput({ ...input, problem: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-200 h-24" placeholder="What pain point does this address?" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Your solution</label>
          <textarea value={input.solution} onChange={(e) => setInput({ ...input, solution: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-200 h-24" placeholder="How does your project solve it?" />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Target users</label>
            <input type="text" value={input.users} onChange={(e) => setInput({ ...input, users: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-200" placeholder="Who uses this?" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Tech stack</label>
            <input type="text" value={input.techStack} onChange={(e) => setInput({ ...input, techStack: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-200" placeholder="Next.js, Python, etc." />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">AI model used</label>
            <input type="text" value={input.modelUsed} onChange={(e) => setInput({ ...input, modelUsed: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-200" placeholder="e.g. Xiaomi MiMo-2.5-Pro" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Grant / program target</label>
            <input type="text" value={input.grantTarget} onChange={(e) => setInput({ ...input, grantTarget: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-200" placeholder="e.g. Xiaomi MiMo Credit Program" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Repository URL</label>
            <input type="text" value={input.repoUrl} onChange={(e) => setInput({ ...input, repoUrl: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-200" placeholder="https://github.com/..." />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Live demo URL</label>
            <input type="text" value={input.demoUrl} onChange={(e) => setInput({ ...input, demoUrl: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-200" placeholder="https://your-app.vercel.app" />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium">Evidence items</label>
            <button onClick={addEvidence} className="text-sm text-brand-600 hover:text-brand-700">+ Add evidence</button>
          </div>
          {input.evidence.map((item, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <select value={item.type} onChange={(e) => updateEvidence(i, "type", e.target.value)} className="px-3 py-2 border border-gray-200 rounded-lg text-sm">
                <option value="repo">Repo</option>
                <option value="demo">Demo</option>
                <option value="screenshot">Screenshot</option>
                <option value="log">Log</option>
                <option value="artifact">Artifact</option>
                <option value="other">Other</option>
              </select>
              <input type="text" value={item.url} onChange={(e) => updateEvidence(i, "url", e.target.value)} className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm" placeholder="URL" />
              <input type="text" value={item.description} onChange={(e) => updateEvidence(i, "description", e.target.value)} className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm" placeholder="Description" />
              <button onClick={() => removeEvidence(i)} className="px-3 py-2 text-red-500 hover:text-red-700 text-sm">x</button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3 mb-8">
        <button onClick={() => { setMode("pitch"); generate(); }} className="px-6 py-3 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 transition-colors">Generate Pitch</button>
        <button onClick={() => { setMode("grant"); generate(); }} className="px-6 py-3 border border-brand-200 text-brand-700 rounded-lg font-medium hover:bg-brand-50 transition-colors">Generate Grant Answer</button>
      </div>

      {output && (
        <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">{mode === "pitch" ? "Pitch Pack" : "Grant Answer"}</h3>
            <button onClick={copyOutput} className="text-sm px-4 py-1.5 bg-brand-600 text-white rounded-md hover:bg-brand-700">{copied ? "Copied!" : "Copy"}</button>
          </div>
          <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono leading-relaxed">{output}</pre>
        </div>
      )}
    </div>
  );
}
