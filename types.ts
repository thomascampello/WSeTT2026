export interface PricingTier {
  id: string;
  name: string;
  basePrice: number;
  description: string;
  highlight?: boolean;
}

export interface CommitteeMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface SponsorLevel {
  name: string;
  price?: string;
  benefits: string[];
}

export interface ScheduleItem {
  time: string;
  activity: string;
  speaker: string;
  type: 'session' | 'break' | 'lunch' | 'registration';
}

export interface Speaker {
  name: string;
  role: string;
  company: string;
  bio: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}