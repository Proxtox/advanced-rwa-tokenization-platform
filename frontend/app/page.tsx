"use client";

import { useState } from 'react';

export default function RWADashboard() {
  const [asset, setAsset] = useState('');

  const handleTokenize = () => {
    alert(`Tokenizing asset: ${asset} (demo)`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 border rounded-3xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Advanced RWA Tokenization</h1>

      <div className="space-y-4">
        <input type="text" value={asset} onChange={(e) => setAsset(e.target.value)} className="w-full p-4 border rounded-2xl" placeholder="Asset ID or Reference" />
        <button onClick={handleTokenize} className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-2xl text-lg font-semibold">
          Tokenize Asset
        </button>
      </div>
    </div>
  );
}