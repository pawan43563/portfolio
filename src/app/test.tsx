import Image from 'next/image';

export default function Test() {
  return (
    <div className="bg-yellow-200 min-h-screen flex items-center justify-center">
      <div className="container max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 gap-4">
          
          {/* Left Section (Image) */}
          
          
          {/* Right Section (Text & Timeline) */}
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl font-bold">Hi! I am</h1>
            <h2 className="text-7xl font-extrabold text-gray-800 mb-4">Jeson Stetham</h2>
            <a href="#" className="text-lg font-semibold text-blue-500">View Portfolio →</a>
            
            <div className="mt-6">
              <div className="timeline-item mb-4">
                <p className="text-lg font-semibold">1992 — 1998</p>
                <h3 className="text-2xl font-bold">Masters in Fine Arts</h3>
                <p>Sydney University, Australia</p>
              </div>
              <div className="timeline-item mb-4">
                <p className="text-lg font-semibold">1988 — 1992</p>
                <h3 className="text-2xl font-bold">Bachelor in Fine Arts</h3>
                <p>Sydney University, Australia</p>
              </div>
              <div className="timeline-item mb-4">
                <p className="text-lg font-semibold">1984 — 1988</p>
                <h3 className="text-2xl font-bold">Honors in Fine Arts</h3>
                <p>Sydney University, Australia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
