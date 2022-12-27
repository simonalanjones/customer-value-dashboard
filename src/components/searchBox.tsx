import { useState } from 'react';
import { SearchBoxProps } from '../interfaces';

const SearchBox = ({ callback }: SearchBoxProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (): void => {
    callback(text);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };

  return (
    <>
      <div>
        <input
          onChange={handleChange}
          value={text}
          name="membership"
          id="membership"
          placeholder="membership number"
          className="focus:ring-indigo-20 border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-transparent focus:ring-2 w-64"
        />
        <button
          onClick={handleSubmit}
          className="border border-gray-300 py-1 px-3"
        >
          search
        </button>
      </div>
    </>
  );
};

export default SearchBox;
