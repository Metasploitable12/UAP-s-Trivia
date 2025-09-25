import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, RefreshCw, ExternalLink, Laugh } from 'lucide-react';
import { getRandomJoke, getStockholmJoke, type SecurityJoke } from '@/data/securityJokes';
// import officeChair from '@/assets/office-chair.jpg';
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
  <div className="min-h-screen orange-theme bg-background flex flex-col justify-center items-center px-2 sm:px-4 py-4">
      {/* Syncron branding header */}
  <div className="w-full flex flex-col items-center gap-2 sm:gap-4 mb-8 mt-2 sm:mt-6">
    <img src={syncronLogo} alt="Syncron" className="w-12 h-12" />
    <span className="text-primary font-bold text-2xl text-center leading-tight break-words">Syncron Security Awareness Month</span>
  </div>

  <div className="max-w-2xl w-full mx-auto px-2 sm:px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <Laugh className="w-12 h-12 sm:w-16 sm:h-16 text-accent mb-2 sm:mb-0 flex-shrink-0" />
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-foreground break-words text-center leading-tight">
              InfoSec Laughter Generator
            </h1>
          </div>
        </div>

        {/* Joke Card */}
        <Card className="mb-8 sm:mb-12 bg-card/50 backdrop-blur border-border">
          <CardContent className="p-4 sm:p-8">
            {/* Question */}
            <div className="mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-foreground mb-4 sm:mb-6 leading-relaxed text-center break-words">
                {currentJoke.question}
              </h2>
              
              {!showAnswer ? (
                <div className="text-center mt-2">
                  <Button
                    onClick={revealAnswer}
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 sm:px-8 py-2 sm:py-4 text-base sm:text-lg"
                  >
                    {isFirstJoke ? "Tell me what happened! 🤔" : "Tell me why! 🤔"}
                  </Button>
                </div>
              ) : (
                <div className="space-y-4 sm:space-y-6 animate-fade-slide-up">
                  {/* Answer */}
                  <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 sm:p-6 text-center">
                    <p className="text-base sm:text-xl font-medium text-accent mb-2 sm:mb-4 break-words">
                      {currentJoke.answer} 😂
                    </p>
                    {isFirstJoke && (
                      <div className="flex justify-center mt-4">
                        {/* Image removed due to missing office-chair.jpg */}
                      </div>
                    )}
                  </div>
                  
                  {/* Security lesson */}
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 sm:p-6">
                    <div className="flex items-start gap-2 sm:gap-4">
                      <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-base sm:text-lg font-semibold text-primary mb-1 sm:mb-2">Security Lesson:</p>
                        <p className="text-foreground text-base sm:text-lg break-words">{currentJoke.lesson}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-4">
          <Button
            onClick={getNewJoke}
            variant="outline"
            className="flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-2 sm:py-4 text-base sm:text-lg border-accent text-accent hover:bg-accent/10"
          >
            <RefreshCw className="w-5 h-5" />
            Give me another joke! 😂
          </Button>
          <Button
            onClick={openSecurityWiki}
            className="flex items-center gap-2 sm:gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-4 sm:px-8 py-2 sm:py-4 text-base sm:text-lg"
          >
            <ExternalLink className="w-5 h-5" />
            Explore InfoSec initiatives ✅
          </Button>
        </div>

        {/* Footer message */}
        <div className="text-center mt-8 sm:mt-12 text-muted-foreground">
          <p className="text-base sm:text-lg">
            Remember: The best security is a well-informed team! 🚀
          </p>
        </div>
      </div>
    </div>
  );
}