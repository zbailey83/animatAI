import { registry } from '@/data/components';
import { PromptCard } from '@/components/PromptCard';
import { Sparkles } from 'lucide-react';

export default function LibraryPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white">
            {/* Background radial glow */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                <header className="mb-20 text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase">
                        <Sparkles size={12} />
                        The AI Design Bible
                    </div>
                    <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-white">
                        ANIMAI <span className="text-zinc-600">LIBRARY</span>
                    </h1>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        Elite prompts for AI-first design engineers. Stop guessing and start shipping high-performance GSAP and Framer Motion components with architectural certainty.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {registry.map((comp) => (
                        <PromptCard key={comp.id} component={comp} />
                    ))}

                    {/* Placeholder for "Coming Soon" */}
                    <div className="flex flex-col items-center justify-center p-8 rounded-2xl border border-zinc-800 border-dashed bg-zinc-900/20 group hover:border-zinc-700 transition-colors h-[300px]">
                        <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 group-hover:scale-110 transition-transform">
                            ?
                        </div>
                        <p className="mt-4 text-zinc-500 font-medium">New schema coming soon</p>
                    </div>
                </div>
            </main>

            <footer className="relative z-10 py-20 border-t border-zinc-900 text-center">
                <p className="text-zinc-600 text-sm">
                    Built for the future of AI-assisted frontend engineering.
                </p>
            </footer>
        </div>
    );
}
