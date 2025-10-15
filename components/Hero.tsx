'use client';

import { Wand2, Zap, Share2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="text-center space-y-6 py-12">
      <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm">
        <Zap className="w-4 h-4 text-accent" />
        <span className="text-muted">AI-Powered Background Removal</span>
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
        Remove objects, object
        <br />
        <span className="text-gradient">make backgrounds.</span>
      </h1>

      <p className="text-lg text-muted max-w-2xl mx-auto">
        Professional background removal powered by AI. Create stunning visuals for Farcaster, mint NFTs, and share onchain.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <button className="btn-primary flex items-center gap-2">
          <Wand2 className="w-5 h-5" />
          Start Creating
        </button>
        <button className="btn-secondary flex items-center gap-2">
          <Share2 className="w-5 h-5" />
          View Gallery
        </button>
      </div>
    </section>
  );
}
