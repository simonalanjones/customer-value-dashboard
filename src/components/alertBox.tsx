import { AlertBoxProps } from '../interfaces';
import { AlertIcon } from './icons';

const AlertBox = ({ text, icon }: AlertBoxProps) => {
  return (
    <div className="bg-orange-500 text-gray-700 px-4 py-4 flex">
      {icon && (
        <div className="pr-2">
          <AlertIcon />
        </div>
      )}
      <div>{text}</div>
    </div>
  );
};

export default AlertBox;
