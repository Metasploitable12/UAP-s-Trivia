import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';
import syncronLogo from '@/assets/syncron-logo.png';
import wrong1 from '@/assets/wrong1.jpg';
import wrong2 from '@/assets/wrong2.jpg';
import wrong3 from '@/assets/wrong3.jpg';
import wrong4 from '@/assets/wrong4.jpg';
import wrong5 from '@/assets/wrong5.jpg';
import wrong6 from '@/assets/wrong6.jpg';
import wrong7 from '@/assets/wrong7.jpg';
import security1 from '@/assets/security1.jpg';
import security2 from '@/assets/security2.jpg';

interface SecurityCaptchaProps {
  onComplete: () => void;
}

const captchaImages = [
  { src: wrong1, isSecure: false, name: 'wrong1' },
  { src: security1, isSecure: true, name: 'security1' },
  { src: wrong2, isSecure: false, name: 'wrong2' },
  { src: wrong3, isSecure: false, name: 'wrong3' },
  { src: security2, isSecure: true, name: 'security2' },
  { src: wrong4, isSecure: false, name: 'wrong4' },
  { src: wrong5, isSecure: false, name: 'wrong5' },
  { src: wrong6, isSecure: false, name: 'wrong6' },
  { src: wrong7, isSecure: false, name: 'wrong7' },
];

export default function SecurityCaptcha({ onComplete }: SecurityCaptchaProps) {
  const [selectedIcons, setSelectedIcons] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleIconClick = (index: number) => {
    if (showResult) return;
    
    if (selectedIcons.includes(index)) {
      setSelectedIcons(selectedIcons.filter(i => i !== index));
    } else {
      setSelectedIcons([...selectedIcons, index]);
    }
  };

  const handleVerify = () => {
    const correctIndices = captchaImages
      .map((img, index) => img.isSecure ? index : -1)
      .filter(index => index !== -1);
    
    const isAllCorrect = correctIndices.length === selectedIcons.length &&
                        correctIndices.every(index => selectedIcons.includes(index));
    
    setIsCorrect(isAllCorrect);
    setShowResult(true);
  };

  const handleContinue = () => {
    if (isCorrect) {
      onComplete();
    } else {
      setSelectedIcons([]);
      setShowResult(false);
    }
  };

  return (
    <div className="min-h-screen orange-theme bg-background flex flex-col justify-center items-center px-2 sm:px-4 py-4">
      {/* Syncron branding header */}
      <div className="w-full flex flex-col items-center gap-2 sm:gap-4 mb-8 mt-2 sm:mt-6">
        <img src={syncronLogo} alt="Syncron" className="w-12 h-12" />
        <span className="text-primary font-bold text-2xl text-center leading-tight break-words">Syncron Security Awareness Month</span>
      </div>

      <div className="max-w-2xl w-full mx-auto px-2 sm:px-4 mt-20 sm:mt-24">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex flex-col items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-accent mb-2" />
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-foreground break-words text-center leading-tight">
              Captcha Verification
            </h1>
          </div>
          <p className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-2 sm:mb-4 text-center">
            Please verify all security captcha
          </p>
          <p className="text-sm sm:text-lg text-muted-foreground text-center">
            Select all information security related images and find out what recently happened in Syncron.
          </p>
        </div>

        {/* Captcha Grid */}
        <Card className="mb-8 bg-card/50 backdrop-blur border-border">
          <CardContent className="p-4 sm:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {captchaImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative cursor-pointer rounded-lg overflow-hidden border-4 transition-all duration-200 ${
                    selectedIcons.includes(index)
                      ? 'border-primary bg-primary/20'
                      : 'border-border hover:border-accent'
                  }`}
                  onClick={() => handleIconClick(index)}
                >
                  <img
                    src={image.src}
                    alt={`Captcha option ${index + 1}`}
                    className="w-full h-24 sm:h-32 object-cover"
                  />
                  {selectedIcons.includes(index) && (
                    <div className="absolute top-1 right-1 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      ✓
                    </div>
                  )}
                </div>
              ))}
            </div>

            {!showResult ? (
              <div className="flex justify-center mt-2">
                <Button
                  onClick={handleVerify}
                  disabled={selectedIcons.length === 0}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 sm:px-8 py-2 sm:py-4 text-base sm:text-lg"
                >
                  Verify Selection
                </Button>
              </div>
            ) : (
              <div className="text-center space-y-2 sm:space-y-4 animate-fade-slide-up">
                <div className={`p-3 sm:p-4 rounded-lg ${
                  isCorrect 
                    ? 'bg-green-100 border border-green-300 text-green-800' 
                    : 'bg-red-100 border border-red-300 text-red-800'
                }`}>
                  <p className="text-base sm:text-lg font-semibold">
                    {isCorrect 
                      ? '✅ Correct! Well done on identifying the security images.' 
                      : '❌ Not quite right. Try again and select only the cybersecurity-related images.'}
                  </p>
                </div>
                <Button
                  onClick={handleContinue}
                  className={isCorrect 
                    ? "bg-green-600 hover:bg-green-700 text-white px-4 sm:px-8 py-2 sm:py-4 text-base sm:text-lg"
                    : "bg-red-600 hover:bg-red-700 text-white px-4 sm:px-8 py-2 sm:py-4 text-base sm:text-lg"
                  }
                >
                  {isCorrect ? 'Continue' : 'Try Again'}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Footer message */}
        <div className="text-center text-muted-foreground mt-6">
          <p className="text-xs sm:text-sm">
            Security awareness starts with recognizing threats! 🔍
          </p>
        </div>
      </div>
    </div>
  );
}