export interface SecurityJoke {
  question: string;
  answer: string;
  lesson: string;
}

// Special Stockholm office joke - always first
export const stockholmJoke: SecurityJoke = {
  question: "Guess! What’s more suspicious than a phishing email?",
  answer: "A big grey office chair that vanishes overnight from our Stockholm Office.",
  lesson: "Physical security matters too - always secure your workspace and report missing items!"
};

export const securityJokes: SecurityJoke[] = [
  {
    question: "What’s the most common fix in IT security?",
    answer: "Turning it off and on again—with prayer.",
    lesson: "When all else fails, pray to the patch gods and hope for a miracle."
  },
  {
    question: "What are a CISO’s two biggest security concerns?",
    answer: "Everyone who works at the company, and everyone who doesn’t.",
    lesson: "Security is everyone’s responsibility — both insiders and outsiders can create risk."
  },
  {
    question: "Thinking of skipping your password update?",
    answer: "That’s like ignoring fika — a critical part of keeping things fresh and safe!",
    lesson: "Strong, regularly updated passwords protect your accounts from compromise."
  },
  {
    question: "Why did the email look suspicious?",
    answer: "Because it had too many attachments.",
    lesson: "Don't open unknown attachments — they may contain malware."
  },
  {
    question: "How do you catch a runaway AI?",
    answer: "With a machine learning net.",
    lesson: "Use strong, unique passwords or passphrases."
  },
  {
    question: "Did you know?",
    answer: "We don’t always test backups... but when we do, it’s right after a major incident",
    lesson: "Regularly test backups before you need them — recovery is only as good as your last test."
  },
  {
    question: "Why don’t hackers target Bangalore developers?",
    answer: "Because they’re already masters at debugging under pressure.",
    lesson: "Security thrives under pressure, but proactive defense is better than constant firefighting."
  },
  {
    question: "Why don't phishing emails ever win spelling bees?",
    answer: "Too many typos.",
    lesson: "Poor grammar is a red flag for phishing attempts."
  },
];

export function getRandomJoke(): SecurityJoke {
  return securityJokes[Math.floor(Math.random() * securityJokes.length)];
}

export function getStockholmJoke(): SecurityJoke {
  return stockholmJoke;
}
