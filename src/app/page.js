import Link from 'next/link';
import airplanes from '@/utils/data.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex justify-center py-10">
      <div className="w-1/2">
        <h1 className="text-3xl font-extrabold mb-8">Airplanes</h1>

        <div className="flex flex-col gap-4">
          {airplanes.map((plane) => (
            <Link key={plane.id} href={`/airplanes/${plane.id}`} className="bg-gray-100 border border-black rounded-xl p-6">
              <h2 className="text-xl">{plane.name}</h2>
            </Link>
          ))} 
        </div>
      </div>
    </div>
  );
}