import { Member } from '../interfaces';
import { Card, RatingCard, CurrencyCard } from './card';
import { RATING } from '../enums';

// function starCount(r: RATING): number {
//   //console.log(RATING[key])
//   return 1;
// }

const getRating = (r: string) => {
  switch (r) {
    case 'VL':
      return RATING.VL;
    case 'L':
      return RATING.L;
    case 'M':
      return RATING.M;
    case 'H':
      return RATING.H;
    case 'VH':
      return RATING.VH;
    default:
      return RATING.VL;
  }
};

const currency = (amount: number) => {
  let UKpounds = Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  });
  return UKpounds.format(amount);
};

const CardLayout = ({
  lengthOfMembership,
  premiumIncome,
  claimsPaid,
  lastClaimDate,
  memberRating,
  enrolmentDate,
}: Member) => {
  return (
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Card title="Length of membership" description={lengthOfMembership} />
      <CurrencyCard title="Premium income" amount={premiumIncome} />
      <Card title="Claims paid" description={currency(claimsPaid)} />
      <Card title="Last claim date" description={lastClaimDate} />
      <Card title="Enrolment date" description={enrolmentDate} />
      <RatingCard rating={getRating(memberRating)} />
    </div>
  );
};

export default CardLayout;
