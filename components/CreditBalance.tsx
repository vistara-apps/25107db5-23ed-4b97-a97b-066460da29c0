'use client';

import { Coins, Plus, Gift } from 'lucide-react';
import { useState } from 'react';

export function CreditBalance() {
  const [credits] = useState(150);

  return (
    <div className="glass-card p-6 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-accent bg-opacity-20 flex items-center justify-center">
            <Coins className="w-6 h-6 text-accent" />
          </div>
          <div>
            <p className="text-sm text-muted">Available Credits</p>
            <p className="text-3xl font-bold">{credits}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="btn-primary flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Buy Credits
          </button>
          <button className="btn-secondary flex items-center gap-2">
            <Gift className="w-4 h-4" />
            Gift
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-success">24</p>
          <p className="text-xs text-muted">Processed</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-accent">8</p>
          <p className="text-xs text-muted">NFTs Minted</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-muted">12</p>
          <p className="text-xs text-muted">Shared</p>
        </div>
      </div>
    </div>
  );
}
