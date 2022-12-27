import { CardProps, RatingCardProps, CurrencyCardProps } from '../interfaces';
import IconRating from './iconRating';

const Card = ({ title, description }: CardProps) => {
  return (
    <>
      <div className="h-36 border border-gray-200 px-6 py-6 bg-gray-100/50">
        <h2 className="mb-2 text-gray-500 font-bold text-sm uppercase tracking-wider">
          {title}
        </h2>
        <p className="text-gray-700 font-bold text-xl">{description}</p>
      </div>
    </>
  );
};

const CurrencyCard = ({ title, amount }: CurrencyCardProps) => {
  const UKpounds = Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  });

  return (
    <>
      <div className="h-36 border border-gray-200 px-6 py-6 bg-gray-100/50">
        <h2 className="mb-2 text-gray-500 font-bold text-sm uppercase tracking-wider">
          {title}
        </h2>
        <p className="text-gray-700 font-bold text-xl">
          {UKpounds.format(amount)}
        </p>
      </div>
    </>
  );
};

const RatingCard = ({ rating }: RatingCardProps) => {
  return (
    <>
      <div className="h-36 border border-gray-200 px-6 py-6 bg-gray-100/50">
        <div className="float-right">
          <IconRating rating={rating} />
        </div>

        <h2 className="mb-2 text-gray-500 font-bold text-sm uppercase tracking-wider">
          Member rating
        </h2>
        <p className="text-gray-700 font-bold text-xl">{rating}</p>
      </div>
    </>
  );
};

export { Card, RatingCard, CurrencyCard };
