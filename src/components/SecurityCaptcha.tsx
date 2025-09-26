import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, CheckCircle2, XCircle, Search } from 'lucide-react';
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
  { src: wrong6, isSecure: true, name: 'wrong6' },
  { src: wrong7, isSecure: false, name: 'wrong7' },
];

export default function SecurityCaptcha({ onComplete }: SecurityCaptchaProps) {
  const [selectedIcons, setSelectedIcons] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleIconClick = (index: number) => {
    if (showResult) return;

    setSelectedIcons(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleVerify = () => {
    const correctIndices = captchaImages
      .map((img, index) => (img.isSecure ? index : -1))
      .filter(index => index !== -1);

    const isAllCorrect =
      correctIndices.length === selectedIcons.length &&
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

      <div className="max-w-2xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <Shield className="w-14 h-14 sm:w-20 sm:h-20 text-orange-500 mb-4 mx-auto" />
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            Captcha Verification
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-2">
            Verify your awareness skills
          </p>
          <p className="text-sm sm:text-base text-gray-500">
            Select all <span className="font-medium text-orange-600">security-related images</span> to proceed.
          </p>
        </div>

        {/* Captcha Grid */}
        <Card className="mb-10 bg-white/80 backdrop-blur border border-orange-200 shadow-lg rounded-2xl">
          <CardContent className="p-6 sm:p-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              {captchaImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative cursor-pointer rounded-xl overflow-hidden border-4 transition-all duration-200 transform hover:scale-105 ${
                    selectedIcons.includes(index)
                      ? 'border-orange-500 ring-2 ring-orange-300'
                      : 'border-gray-200 hover:border-orange-300'
                  }`}
                  onClick={() => handleIconClick(index)}
                >
                  <img
                    src={image.src}
                    alt={`Captcha option ${index + 1}`}
                    className="w-full h-28 sm:h-36 object-cover"
                  />
                  {selectedIcons.includes(index) && (
                    <div className="absolute top-2 right-2 bg-orange-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shadow">
                      ✓
                    </div>
                  )}
                </div>
              ))}
            </div>

            {!showResult ? (
              <div className="flex justify-center">
                <Button
                  onClick={handleVerify}
                  disabled={selectedIcons.length === 0}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 sm:px-10 sm:py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-md hover:scale-105"
                >
                  Verify Selection
                </Button>
              </div>
            ) : (
              <div className="text-center space-y-4 animate-fade-slide-up">
                <div
                  className={`p-4 rounded-xl flex items-center justify-center gap-3 font-semibold ${
                    isCorrect
                      ? 'bg-green-50 border border-green-200 text-green-700'
                      : 'bg-red-50 border border-red-200 text-red-700'
                  }`}
                >
                  {isCorrect ? (
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-600" />
                  )}
                  <span>
                    {isCorrect
                      ? 'Correct! You identified the security images.'
                      : 'Not quite right. Try again and select only the cybersecurity-related images.'}
                  </span>
                </div>
                <Button
                  onClick={handleContinue}
                  className={`px-6 py-3 sm:px-10 sm:py-4 rounded-xl font-semibold text-lg shadow-md hover:scale-105 ${
                    isCorrect
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-red-600 hover:bg-red-700 text-white'
                  }`}
                >
                  {isCorrect ? 'Continue' : 'Try Again'}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Footer message */}
        <div className="text-center text-gray-500 mt-6 flex items-center justify-center gap-2">
          <Search className="w-4 h-4" />
          <p className="text-sm">Security awareness starts with recognizing threats.</p>
        </div>
      </div>
    </div>
  );
}
