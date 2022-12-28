import { CardProps, RatingCardProps, CurrencyCardProps } from '../interfaces';
import IconRating from './iconRating';

// Tailwind style for the outer card
const cardOuter: string =
  'h-36 border border-gray-200 px-6 py-6 bg-gray-100/50';
// Tailwind style for the card title
const cardTitle: string =
  'mb-2 text-gray-500 font-bold text-sm uppercase tracking-wider';
// Tailwind style for the card description
const cardDescription: string = 'text-gray-700 font-bold text-xl';

const Card = ({ title, description }: CardProps) => {
  return (
    <div className={cardOuter}>
      <h2 className={cardTitle}>{title}</h2>
      <p className={cardDescription}>{description}</p>
    </div>
  );
};

const CurrencyCard = ({ title, amount }: CurrencyCardProps) => {
  const UKpounds = Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  });

  return (
    <div className={cardOuter}>
      <h2 className={cardTitle}>{title}</h2>
      <p className={cardDescription}>{UKpounds.format(amount)}</p>
    </div>
  );
};

const RatingCard = ({ rating }: RatingCardProps) => {
  return (
    <>
      <div className={cardOuter}>
        <div className="float-right">
          <IconRating rating={rating} />
        </div>

        <h2 className={cardTitle}>Member rating</h2>
        <p className={cardDescription}>{rating}</p>
      </div>
    </>
  );
};

export { Card, RatingCard, CurrencyCard };
