import { useState } from 'react';
// import FakeRansomwareScreen from '@/components/FakeRansomwareScreen';
import SafetyReveal from '@/components/SafetyReveal';
import SecurityCaptcha from '@/components/SecurityCaptcha';
import InfoSecLaughterGenerator from '@/components/InfoSecLaughterGenerator';

type AppState = 'reveal' | 'captcha' | 'jokes';

const Index = () => {
  const [appState, setAppState] = useState<AppState>('reveal');



  const handleRevealContinue = () => {
    setAppState('captcha');
  };

  const handleCaptchaComplete = () => {
    setAppState('jokes');
  };

  return (
    <div className="min-h-screen">

      
      {appState === 'reveal' && (
        <SafetyReveal onContinue={handleRevealContinue} />
      )}
      
      {appState === 'captcha' && (
        <SecurityCaptcha onComplete={handleCaptchaComplete} />
      )}
      
      {appState === 'jokes' && (
        <InfoSecLaughterGenerator />
      )}
    </div>
  );
};

export default Index;
