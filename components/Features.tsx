'use client';

import { Wand2, Share2, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: Wand2,
    title: 'AI Background Removal',
    description: 'Precise, fast background removal powered by advanced AI models',
  },
  {
    icon: Share2,
    title: 'Farcaster Frames',
    description: 'Share your creations as interactive Frames on Farcaster',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Shared credit pools and collaborative workflows for teams',
  },
  {
    icon: Zap,
    title: 'Instant NFT Minting',
    description: 'Mint your processed images as NFTs on Base with one click',
  },
];

export function Features() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Powerful Features</h2>
        <p className="text-muted">Everything you need to create stunning visuals</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="metric-card">
            <div className="w-12 h-12 rounded-lg bg-accent bg-opacity-20 flex items-center justify-center mb-4">
              <feature.icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-muted">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
