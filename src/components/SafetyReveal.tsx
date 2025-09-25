import { useEffect, useState } from 'react';
import { Shield, Heart } from 'lucide-react';
import syncronLogo from '@/assets/syncron-logo.png';

interface SafetyRevealProps {
  onContinue: () => void;
}

export default function SafetyReveal({ onContinue }: SafetyRevealProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 300);
  }, []);

  return (
  <div className="min-h-screen orange-theme bg-background flex flex-col justify-center items-center px-2 sm:px-4 py-4 relative">
      {/* Syncron branding header */}
  <div className="w-full flex flex-col items-center gap-2 sm:gap-4 mb-8 mt-2 sm:mt-6">
    <img src={syncronLogo} alt="Syncron" className="w-12 h-12" />
    <span className="text-primary font-bold text-2xl text-center leading-tight break-words">Syncron Security Awareness Month</span>
  </div>

  <div className={`text-center max-w-xl w-full mx-auto transition-all duration-700 ${showContent ? 'animate-fade-slide-up opacity-100' : 'opacity-0'}`}> 
        {/* Relief message */}
  <div className="mb-6 sm:mb-8 space-y-2 sm:space-y-3">
          <Shield className="w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 text-accent animate-pulse" />
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-accent mb-2 sm:mb-4 break-words">
            Curious right?
          </h1>
          <h2 className="text-lg sm:text-2xl md:text-3xl text-foreground mb-4 sm:mb-6 break-words">
            Your journey to smarter and safer security starts today with the introduction of Security Awareness Month.
          </h2>
        </div>

        {/* Educational message */}
  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 sm:p-8 mb-8 sm:mb-12 space-y-2 sm:space-y-4 text-left sm:text-center">
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-primary mb-2">
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            <span className="text-base sm:text-xl font-semibold">What's Going On?</span>
          </div>
          <p className="text-sm sm:text-lg leading-relaxed text-black break-words mt-2">
            We’ve prepared some engaging activities for you, 
            But before we dive in, We believe the beginning to something great must start with a smile. 
            let’s share a few quick moments of laughter together.
          </p>
        </div>

        {/* Continue button */}
        <button
          onClick={onContinue}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-12 py-3 sm:py-6 rounded-lg font-semibold text-lg sm:text-xl transition-all duration-200 hover:scale-105 transform mt-4 mt-6 sm:mt-8"
        >
          Let's continue the adventure!
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-4 sm:bottom-6 text-center text-muted-foreground text-xs sm:text-sm w-full">
        <p>Stay vigilant, stay secure </p>
      </div>
    </div>
  );
}
