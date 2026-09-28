import airplanes from '@/utils/data.json';

export default async function AirplaneDetail({ params }) {
  const { id } = await params;
  const plane = airplanes.find((p) => p.id.toString() === id);
  return (
    <div className="min-h-screen bg-white text-black flex justify-center py-10">
      <div className="w-2/3">
        <div className="bg-gray-100 border border-black rounded-xl p-8">
          <h1 className="text-3xl font-bold mb-6">{plane.name}</h1>
          <div className="text-base space-y-2">
            <p>Manufacturer: {plane.manufacturer}</p>
            <p>Type: {plane.type}</p>
            <p>Capacity: {plane.capacity}</p>
            <p>Range: {plane.range}</p>
            <p>Speed: {plane.speed}</p>
          </div>
        </div>
      </div>
    </div>
  );
}