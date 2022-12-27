import { RATING } from './enums';

export interface Member {
  lengthOfMembership: string;
  premiumIncome: number;
  claimsPaid: number;
  lastClaimDate: string;
  memberRating: string;
  enrolmentDate: string;
}

export interface CardProps {
  title: string;
  description: string | number;
}

export interface CurrencyCardProps {
  title: string;
  amount: number;
}

export interface RatingCardProps {
  rating: RATING;
}

export interface SearchBoxProps {
  callback: (text: string) => void;
}

export interface RatingProps {
  rating: RATING;
}

export interface AlertBoxProps {
  text: string;
  icon?: boolean;
}
