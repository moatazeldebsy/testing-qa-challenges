export interface Challenge {
  title: string;
  description: string;
  difficulty: number;
  time: string;
  link: string;
}

export interface Category {
  title: string;
  emoji: string;
  challenges: Challenge[];
}