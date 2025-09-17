"use client";

import { useState } from "react";

export default function Home() {
  const [candlesLit, setCandlesLit] = useState(0);
  const [showLetter, setShowLetter] = useState(false);
  const totalCandles = 5;

  const handleCakeClick = () => {
    if (candlesLit < totalCandles) {
      setCandlesLit(prev => prev + 1);
      if (candlesLit + 1 === totalCandles) {
        setTimeout(() => setShowLetter(true), 1000);
      }
    }
  };

  const CakeComponent = () => (
    <div 
      className="relative cursor-pointer transform hover:scale-105 transition-transform duration-300"
      onClick={handleCakeClick}
    >
      <svg width="300" height="250" viewBox="0 0 300 250" className="drop-shadow-lg">
        <ellipse cx="150" cy="220" rx="120" ry="20" fill="#FFD6BA" />
        
        <rect x="30" y="160" width="240" height="60" rx="8" fill="#FFE8CD" />
        <rect x="35" y="165" width="230" height="50" rx="8" fill="#FFF2EB" />
        
        <rect x="50" y="120" width="200" height="50" rx="8" fill="#FFDCDC" />
        <rect x="55" y="125" width="190" height="40" rx="8" fill="#FFF2EB" />
        
        <circle cx="80" cy="145" r="8" fill="#FFD6BA" />
        <circle cx="150" cy="140" r="10" fill="#FFD6BA" />
        <circle cx="220" cy="145" r="8" fill="#FFD6BA" />
        
        <circle cx="100" cy="190" r="12" fill="#FFDCDC" />
        <circle cx="200" cy="185" r="10" fill="#FFDCDC" />
        
        {Array.from({ length: candlesLit }).map((_, index) => {
          const positions = [
            { x: 90, y: 120 },
            { x: 120, y: 115 },
            { x: 150, y: 110 },
            { x: 180, y: 115 },
            { x: 210, y: 120 }
          ];
          const pos = positions[index];
          
          return (
            <g key={index}>
              <rect x={pos.x - 3} y={pos.y - 25} width="6" height="25" fill="#FFE8CD" />
              <ellipse cx={pos.x} cy={pos.y - 30} rx="4" ry="8" fill="#FF6B6B" className="animate-pulse" />
              <ellipse cx={pos.x} cy={pos.y - 32} rx="2" ry="4" fill="#FFD93D" className="animate-pulse" />
            </g>
          );
        })}
      </svg>
      
      {candlesLit < totalCandles && (
        <div className="text-center mt-4 text-[#8B4513] font-medium animate-bounce">
          คลิกที่เค้ก เพื่อจุดเทียน!
        </div>
      )}
    </div>
  );

  const PhotoCard = ({ fileName, index }: { fileName: string; index: number }) => {
    const [imageError, setImageError] = useState(false);
    
    return (
      <div className="flex-shrink-0 w-32 h-32 rounded-lg border-2 border-[#FFD6BA] overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-lg">
        {!imageError ? (
          <img 
            src={`/${fileName}`} 
            alt={`ความทรงจำ ${index + 1}`}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#FFDCDC] to-[#FFE8CD] flex flex-col items-center justify-center text-[#8B4513] font-medium">
            <svg width="40" height="40" viewBox="0 0 40 40" className="mb-2">
              <rect x="5" y="8" width="30" height="20" rx="3" fill="#FFF2EB" stroke="#FFD6BA" strokeWidth="1"/>
              <circle cx="15" cy="16" r="3" fill="#FFD6BA"/>
              <circle cx="25" cy="14" r="1" fill="#FFDCDC"/>
              <path d="M5 24 L12 18 L18 20 L35 12" stroke="#FFD6BA" strokeWidth="2" fill="none"/>
            </svg>
            รูปที่ {index + 1}
          </div>
        )}
      </div>
    );
  };

  const BirthdayLetter = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-[#FFF2EB] rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border-4 border-[#FFD6BA]">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <svg width="40" height="40" viewBox="0 0 40 40">
              <path d="M20 5 L24 16 L35 16 L26 23 L30 34 L20 27 L10 34 L14 23 L5 16 L16 16 Z" fill="#FFD93D"/>
            </svg>
            <h2 className="text-3xl font-bold text-[#8B4513]">สุขสันต์วันเกิด ข้าวสวย</h2>
            <svg width="40" height="40" viewBox="0 0 40 40">
              <path d="M20 5 L24 16 L35 16 L26 23 L30 34 L20 27 L10 34 L14 23 L5 16 L16 16 Z" fill="#FFD93D"/>
            </svg>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-[#FFDCDC] via-[#FFE8CD] to-[#FFD6BA] rounded"></div>
        </div>
        
        <div className="text-[#8B4513] space-y-4 mb-6">
          <p className="text-lg leading-relaxed flex items-center gap-2">
            ขออวยพรให้ข้าวสวยมีความสุขมากๆ
            <svg width="24" height="24" viewBox="0 0 24 24" className="inline">
              <path d="M12 2 L12 8 M8 4 L16 4 M5 8 L19 8 L19 20 L5 20 Z" fill="#FFE8CD" stroke="#FFD6BA" strokeWidth="1"/>
              <circle cx="8" cy="6" r="1" fill="#FF6B9D"/>
              <circle cx="12" cy="6" r="1" fill="#FF6B9D"/>
              <circle cx="16" cy="6" r="1" fill="#FF6B9D"/>
            </svg>
          </p>
          <p className="text-base leading-relaxed flex items-start gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" className="mt-1 flex-shrink-0">
              <path d="M10 2 L12 8 L18 8 L13 12 L15 18 L10 14 L5 18 L7 12 L2 8 L8 8 Z" fill="#FFD93D"/>
            </svg>
            ขอให้มีสุขภาพแข็งแรง รวยๆ มีแต่ความสุข และประสบความสำเร็จ เรื่องที่หวังไว้
            ก็ขอให้สมหวังตามที่ต้องการไว้ และให้พบเจอแต่คนดีๆไม่ทำร้ายจิตใจข้าวสวยด้วย อะไรที่ทำร้ายความรู้สึกทำร้ายจิตใจก็อย่าเก็บมาคิด อย่าไปคิดถึงมันเยอะ
            คนรอบๆตัวที่รักข้าวสวยมีตั้งเยอะมากๆๆเลย ใช้ชีวิตให้คุ้ม ใช้ขีวิตให้สนุกมีความสุขในทุกๆวันนะะ
          </p>
          <p className="text-base leading-relaxed flex items-start gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" className="mt-1 flex-shrink-0">
              <circle cx="10" cy="10" r="8" fill="#FFE8CD" stroke="#FFD6BA" strokeWidth="1"/>
              <circle cx="7" cy="8" r="1" fill="#8B4513"/>
              <circle cx="13" cy="8" r="1" fill="#8B4513"/>
              <path d="M6 13 Q10 16 14 13" stroke="#8B4513" strokeWidth="1.5" fill="none"/>
            </svg>
            และขอให้ทุกวันของข้าวสวยสดใสในทุกๆวันแล้วก็ยิ้มเยอะๆ!
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <rect x="3" y="6" width="18" height="12" rx="2" fill="#FFE8CD" stroke="#FFD6BA" strokeWidth="1"/>
              <circle cx="8" cy="10" r="2" fill="#FFD6BA"/>
              <circle cx="16" cy="10" r="1" fill="#FFDCDC"/>
              <path d="M3 15 L8 12 L12 14 L21 9" stroke="#FFD6BA" strokeWidth="2" fill="none"/>
            </svg>
            <h3 className="text-xl font-semibold text-[#8B4513]">รูปคนสวย</h3>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4" style={{ scrollbarWidth: 'thin' }}>
            {['1.JPG', '2.JPG', '3.JPG', '4.JPG', '5.JPG'].map((fileName, index) => (
              <PhotoCard key={index} fileName={fileName} index={index} />
            ))}
          </div>
          <p className="text-sm text-[#8B4513] text-center mt-2 opacity-75">
            ← เลื่อนเพื่อดูรูปอื่นๆ →
          </p>
        </div>

        <div className="text-center">
          <button 
            onClick={() => setShowLetter(false)}
            className="bg-[#FFD6BA] hover:bg-[#FFE8CD] text-[#8B4513] font-semibold py-3 px-6 rounded-full border-2 border-[#FFDCDC] transition-colors duration-300 flex items-center gap-2 mx-auto"
          >
            ปิดจดหมาย
            <svg width="20" height="20" viewBox="0 0 20 20">
              <path d="M10 2 C15 2 18 5 18 10 C18 15 15 18 10 18 C5 18 2 15 2 10 C2 5 5 2 10 2 Z" fill="#FF6B9D"/>
              <path d="M6 10 Q10 13 14 10" stroke="white" strokeWidth="1.5" fill="none"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-8 relative"
      style={{
        background: `linear-gradient(135deg, #FFDCDC 0%, #FFF2EB 25%, #FFE8CD 50%, #FFD6BA 75%, #FFDCDC 100%)`
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 animate-pulse">
          <svg width="50" height="50" viewBox="0 0 50 50">
            <rect x="5" y="20" width="40" height="25" rx="3" fill="#FFD6BA"/>
            <rect x="5" y="15" width="40" height="10" rx="2" fill="#FFE8CD"/>
            <rect x="22" y="10" width="6" height="35" fill="#FF6B9D"/>
            <rect x="10" y="22" width="30" height="4" fill="#FFDCDC"/>
          </svg>
        </div>
        
        <div className="absolute bottom-20 left-20 animate-bounce" style={{ animationDelay: '0.5s' }}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            <rect x="10" y="10" width="8" height="8" rx="2" fill="#FF6B9D" transform="rotate(45 14 14)"/>
            <rect x="30" y="15" width="6" height="6" rx="1" fill="#FFD93D" transform="rotate(30 33 18)"/>
            <rect x="15" y="35" width="10" height="10" rx="2" fill="#4CAF50" transform="rotate(60 20 40)"/>
            <rect x="40" y="25" width="7" height="7" rx="1" fill="#2196F3" transform="rotate(15 43.5 28.5)"/>
            <rect x="25" y="45" width="5" height="5" rx="1" fill="#FF9800" transform="rotate(75 27.5 47.5)"/>
          </svg>
        </div>
        
        <div className="absolute bottom-10 right-10 animate-pulse" style={{ animationDelay: '1s' }}>
          <svg width="40" height="40" viewBox="0 0 40 40">
            <path d="M20 5 L24 16 L35 16 L26 23 L30 34 L20 27 L10 34 L14 23 L5 16 L16 16 Z" fill="#FFD93D" stroke="#FFA000" strokeWidth="1"/>
          </svg>
        </div>
        
        <div className="absolute top-1/2 left-5 animate-bounce" style={{ animationDelay: '1.5s' }}>
          <svg width="45" height="60" viewBox="0 0 45 60">
            <path d="M5 50 L22.5 5 L40 50 Z" fill="#FF6B9D"/>
            <ellipse cx="22.5" cy="50" rx="18" ry="8" fill="#FFE8CD"/>
            <circle cx="22.5" cy="8" r="5" fill="#FFD93D"/>
            <circle cx="15" cy="25" r="2" fill="#FFDCDC"/>
            <circle cx="30" cy="30" r="2" fill="#FFDCDC"/>
            <circle cx="20" cy="38" r="2" fill="#FFDCDC"/>
          </svg>
        </div>
        
        <div className="absolute top-1/3 right-5 animate-pulse" style={{ animationDelay: '2s' }}>
          <svg width="50" height="50" viewBox="0 0 50 50">
            <path d="M25 5 L27 18 L40 20 L27 22 L25 35 L23 22 L10 20 L23 18 Z" fill="#FFD93D"/>
            <path d="M40 10 L41 15 L46 16 L41 17 L40 22 L39 17 L34 16 L39 15 Z" fill="#FF6B9D"/>
            <path d="M10 35 L11 38 L14 39 L11 40 L10 43 L9 40 L6 39 L9 38 Z" fill="#4CAF50"/>
          </svg>
        </div>
      </div>

      <main className="flex flex-col items-center justify-center text-center z-10 min-h-screen">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-[#8B4513] mb-4 animate-fade-in">
            Happy Birthday
          </h1>
          <h2 className="text-3xl font-semibold text-[#8B4513] mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            สุขสันต์วันเกิด ข้าวสวย! 
          </h2>
        </div>
        
        <div className="flex items-center justify-center">
          <CakeComponent />
        </div>
        
        {candlesLit === totalCandles && (
          <div className="mt-8 animate-fade-in">
            {!showLetter ? (
              <>
                <p className="text-2xl text-[#8B4513] font-semibold animate-pulse">
                  เย้! จุดเทียนครบแล้ว!
                </p>
                <p className="text-lg text-[#8B4513] mt-2 mb-4">
                  รอสักครู่... จดหมายอวยพรกำลังมา!
                </p>
              </>
            ) : (
              <button
                onClick={() => setShowLetter(true)}
                className="bg-[#FFDCDC] hover:bg-[#FFE8CD] text-[#8B4513] font-semibold py-3 px-6 rounded-full border-2 border-[#FFD6BA] transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" className="animate-pulse">
                  <path d="M3 6 L21 6 L12 15 Z" fill="#FF6B9D"/>
                  <rect x="2" y="6" width="20" height="12" rx="2" fill="none" stroke="#8B4513" strokeWidth="1"/>
                </svg>
                อ่านจดหมายอวยพรอีกครั้ง
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <path d="M10 2 C15 2 18 5 18 10 C18 15 15 18 10 18 C5 18 2 15 2 10 C2 5 5 2 10 2 Z" fill="#FF6B9D"/>
                  <path d="M6 10 Q10 13 14 10" stroke="white" strokeWidth="1.5" fill="none"/>
                </svg>
              </button>
            )}
          </div>
        )}
      </main>

      {showLetter && <BirthdayLetter />}
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
