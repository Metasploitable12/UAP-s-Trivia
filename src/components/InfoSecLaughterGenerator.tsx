import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, RefreshCw, ExternalLink, Laugh } from 'lucide-react';
import { getRandomJoke, getStockholmJoke, type SecurityJoke } from '@/data/securityJokes';
import syncronLogo from '@/assets/syncron-logo.png';

export default function InfoSecLaughterGenerator() {
  const [currentJoke, setCurrentJoke] = useState<SecurityJoke>(() => getStockholmJoke());
  const [showAnswer, setShowAnswer] = useState(false);
  const [isFirstJoke, setIsFirstJoke] = useState(true);

  const getNewJoke = () => {
    setCurrentJoke(getRandomJoke());
    setShowAnswer(false);
    setIsFirstJoke(false);
  };

  const revealAnswer = () => {
    setShowAnswer(true);
  };

  const openSecurityWiki = () => {
    window.open('https://syncron.atlassian.net/wiki/x/UwDPZg', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex flex-col justify-center items-center px-4 py-8 relative overflow-hidden">
      
      {/* Decorative blurred circles */}
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
          <Laugh className="w-14 h-14 sm:w-20 sm:h-20 text-orange-500 mb-4 mx-auto" />
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-800">
            InfoSec Laughter Generator
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl mt-3">
            A little humor for a smarter, safer you.
          </p>
        </div>

        {/* Joke Card */}
        <Card className="mb-10 bg-white/80 backdrop-blur border border-orange-200 shadow-lg rounded-2xl">
          <CardContent className="p-6 sm:p-10 text-center">
            
            {/* Question */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-6 leading-relaxed">
              {currentJoke.question}
            </h2>

            {!showAnswer ? (
              <Button
                onClick={revealAnswer}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-md hover:scale-105"
              >
                {isFirstJoke ? "Reveal what happened" : "Show me the punchline"}
              </Button>
            ) : (
              <div className="space-y-8 animate-fade-slide-up">
                {/* Answer */}
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 shadow-inner">
                  <p className="text-lg sm:text-xl font-medium text-orange-700">
                    {currentJoke.answer}
                  </p>
                </div>

                {/* Security lesson */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-left sm:text-center shadow-inner">
                  <div className="flex items-start sm:items-center gap-3 sm:justify-center">
                    <Lightbulb className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="text-lg font-semibold text-green-700 mb-2">Security Lesson</p>
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{currentJoke.lesson}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={getNewJoke}
            variant="outline"
            className="flex items-center gap-2 border-orange-400 text-orange-600 hover:bg-orange-50 px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105"
          >
            <RefreshCw className="w-5 h-5" />
            Here’s one more…
          </Button>
          <Button
            onClick={openSecurityWiki}
            className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-md hover:scale-105"
          >
            <ExternalLink className="w-5 h-5" />
            Explore InfoSec Initiatives
          </Button>
        </div>

        {/* Footer message */}
        <div className="text-center mt-12 text-gray-500">
          <p className="text-sm sm:text-base">
            Security is serious — but learning can be fun.
          </p>
        </div>
      </div>
    </div>
  );
}
