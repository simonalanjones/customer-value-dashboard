import { RatingProps } from '../interfaces';
import { StarEmpty, StarFull } from './icons';
import { RATING } from '../enums';

const IconRating = ({ rating }: RatingProps) => {
  const starCount =
    Object.values(RATING).findIndex((element) => element === rating) + 1;

  const stars = Math.min(Math.max(starCount, 0), 5);
  const emptyStars = [...Array(5 - stars)].map((e, i) => <StarEmpty key={i} />);
  const fullStars = [...Array(stars)].map((e, i) => <StarFull key={i} />);
  return (
    <>
      <div className="flex">
        {fullStars}
        {emptyStars}
      </div>
    </>
  );
};

export default IconRating;
