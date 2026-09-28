'use client';

import { useState } from 'react';
import Link from 'next/link';
import airplanes from '@/utils/data.json';

export default function Home() {
  const [Hailt, searchFunc] = useState('');
  const filteredAirplanes = airplanes.filter((plane) =>
    plane.name.toLowerCase().includes(Hailt.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-black flex justify-center py-10">
      <div className="w-1/2">
        <h1 className="text-3xl font-extrabold mb-6">Airplanes</h1>

        <div className="mb-6">
          <input type="text" placeholder="Ongots haih" value={Hailt} onChange={(e) => searchFunc(e.target.value)} className="w-full p-3 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-black"/>
        </div>

        <div className="flex flex-col gap-4">
          {filteredAirplanes.length > 0 ? (
            filteredAirplanes.map((plane) => (
              <Link key={plane.id} href={`/airplanes/${plane.id}`} className="bg-gray-100 border border-black rounded-xl p-6 hover:bg-gray-200 transition-colors">
                <h2 className="text-xl font-semibold">{plane.name}</h2>
              </Link>
            ))
          ) : (
            <p className="text-gray-500">Taarsan ongots oldsongui</p>
          )}
        </div>
      </div>
    </div>
  );
}