import { useEffect, useState } from 'react';
import { Shield, Info } from 'lucide-react';
import syncronLogo from '@/assets/syncron-logo.png';

interface SafetyRevealProps {
  onContinue: () => void;
}

export default function SafetyReveal({ onContinue }: SafetyRevealProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 400);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex flex-col justify-center items-center px-4 py-8 relative overflow-hidden">
      
      {/* Subtle background graphics */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-300 rounded-full blur-3xl"></div>
      </div>

      {/* Syncron branding header */}
      <div className="flex flex-col items-center gap-4 mb-10">
        <img src={syncronLogo} alt="Syncron" className="w-14 h-14 drop-shadow-md" />
        <span className="text-orange-600 font-bold text-2xl sm:text-3xl tracking-tight">
          Syncron Security Awareness Month
        </span>
      </div>

      {/* Main content */}
      <div
        className={`text-center max-w-2xl w-full mx-auto transition-all duration-700 ${
          showContent ? 'animate-fade-slide-up opacity-100' : 'opacity-0'
        }`}
      >
        {/* Hero section */}
        <Shield className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-6 text-orange-500 drop-shadow-lg animate-pulse" />
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-800 mb-4">
          Curious right?
        </h1>
        <p className="text-lg sm:text-2xl text-gray-600 leading-relaxed mb-10">
          Your journey to smarter and safer security starts today with the introduction of{' '}
          <span className="font-semibold text-orange-600">Security Awareness Month</span>.
        </p>

        {/* Info Card */}
        <div className="bg-white border border-orange-200 rounded-2xl p-6 sm:p-10 shadow-lg mb-12">
          <div className="flex items-center justify-center gap-3 mb-4 text-orange-600">
            <Info className="w-6 h-6" />
            <span className="text-lg sm:text-xl font-semibold">What’s Going On?</span>
          </div>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            We’ve prepared some engaging activities for you. Before we dive in, let’s begin with
            a smile — because every great journey deserves a light start. 
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={onContinue}
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 sm:px-14 py-4 sm:py-5 rounded-xl font-semibold text-lg sm:text-xl transition-all duration-200 shadow-lg hover:scale-105"
        >
          Let’s continue the adventure
        </button>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-center text-gray-500 text-xs sm:text-sm w-full">
        <p>Stay vigilant, stay secure.</p>
      </div>
    </div>
  );
}
