import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PitchForge — Turn rough ideas into winning proposals",
  description: "Transform messy project notes into polished, reviewer-ready pitches for grants, hackathons, and credit programs. Powered by MiMo.",
  openGraph: {
    title: "PitchForge",
    description: "Turn rough ideas into winning proposals",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <nav className="border-b border-gray-100 px-6 py-4">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <a href="/" className="text-xl font-bold gradient-text">
              PitchForge
            </a>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="/builder" className="hover:text-brand-600 transition-colors">Builder</a>
              <a href="/examples" className="hover:text-brand-600 transition-colors">Examples</a>
              <a href="https://github.com/Kanzai-png/pitchforge" className="hover:text-brand-600 transition-colors">GitHub</a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
