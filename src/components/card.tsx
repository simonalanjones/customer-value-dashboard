import { CardProps, RatingCardProps, CurrencyCardProps } from '../interfaces';
import IconRating from './iconRating';

// see index.css for tailwind styles
const Card = ({ title, description }: CardProps) => {
  return (
    <div className="card-outer">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
};

const CurrencyCard = ({ title, amount }: CurrencyCardProps) => {
  const UKpounds = Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  });

  return (
    <div className="card-outer">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{UKpounds.format(amount)}</p>
    </div>
  );
};

const RatingCard = ({ rating }: RatingCardProps) => {
  return (
    <>
      <div className="card-outer">
        <div className="float-right">
          <IconRating rating={rating} />
        </div>

        <h2 className="card-title">Member rating</h2>
        <p className="card-description">{rating}</p>
      </div>
    </>
  );
};

export { Card, RatingCard, CurrencyCard };
