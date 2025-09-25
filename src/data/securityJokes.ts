export interface SecurityJoke {
  question: string;
  answer: string;
  lesson: string;
}

// Special Stockholm office joke - always first
export const stockholmJoke: SecurityJoke = {
  question: "Did you know something strange happened at the Stockholm office?",
  answer: "One of the big grey office chairs are missing",
  lesson: "Physical security matters too - always secure your workspace and report missing items!"
};

export const securityJokes: SecurityJoke[] = [
  {
    question: "Why did the computer go to therapy?",
    answer: "Too many unresolved issues.",
    lesson: "Keep software and systems patched regularly."
  },
  {
    question: "Why did the hacker break up with their partner?",
    answer: "They just couldn't trust them anymore.",
    lesson: "Trust is central — verify before you click or share data."
  },
  {
    question: "Why was the computer cold?",
    answer: "It left its Windows open.",
    lesson: "Unsecured systems are entry points for attackers."
  },
  {
    question: "Why don't hackers take vacations?",
    answer: "Because they're afraid of getting logged out.",
    lesson: "Always log out when you're done — don't stay signed in everywhere."
  },
  {
    question: "Why did the email look suspicious?",
    answer: "Because it had too many attachments.",
    lesson: "Don't open unknown attachments — they may contain malware."
  },
  {
    question: "What's a hacker's favorite season?",
    answer: "Phishing season!",
    lesson: "Always spot and report phishing attempts."
  },
  {
    question: "Why did the IT guy bring a ladder to work?",
    answer: "To reach the cloud.",
    lesson: "Cloud security matters — treat it like your own data center."
  },
  {
    question: "Why did the password go to jail?",
    answer: "It was too weak.",
    lesson: "Use strong, unique passwords or passphrases."
  },
  {
    question: "Why did the smartphone need glasses?",
    answer: "It lost its contacts.",
    lesson: "Protect sensitive information like contacts and data backups."
  },
  {
    question: "Why do security pros love nature?",
    answer: "Because it has the best firewalls.",
    lesson: "Firewalls block unwanted traffic — keep yours updated."
  },
  {
    question: "Why did the antivirus cross the road?",
    answer: "To get to the other site safely.",
    lesson: "Browsing safely protects against infections."
  },
  {
    question: "Why don't keyboards ever get locked out?",
    answer: "Because they always have good caps lock.",
    lesson: "Multi-factor authentication keeps accounts secure."
  },
  {
    question: "Why was the network always calm?",
    answer: "Because it had strong connections.",
    lesson: "Secure networks rely on trusted connections."
  },
  {
    question: "Why was the security analyst so humble?",
    answer: "Because they knew their privileges were limited.",
    lesson: "Follow the principle of least privilege."
  },
  {
    question: "Why don't routers ever get lost?",
    answer: "They always know the way home.",
    lesson: "Proper configuration ensures data travels securely."
  },
  {
    question: "Why did the hacker sit at the computer all night?",
    answer: "They were working overtime on your dime.",
    lesson: "Security is 24/7 — attackers don't sleep."
  },
  {
    question: "Why was the server a great listener?",
    answer: "Because it always gave a response.",
    lesson: "Monitoring logs and responses is vital for detection."
  },
  {
    question: "Why don't phishing emails ever win spelling bees?",
    answer: "Too many typos.",
    lesson: "Poor grammar is a red flag for phishing attempts."
  },
  {
    question: "Why did the Wi-Fi break up with the laptop?",
    answer: "Bad connection.",
    lesson: "Secure Wi-Fi with strong encryption and passwords."
  },
  {
    question: "Why was the cybersecurity quiz so easy?",
    answer: "Because it was just common sense.",
    lesson: "Awareness is often about practicing safe habits, not rocket science."
  }
];

export function getRandomJoke(): SecurityJoke {
  return securityJokes[Math.floor(Math.random() * securityJokes.length)];
}

export function getStockholmJoke(): SecurityJoke {
  return stockholmJoke;
}