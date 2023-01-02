import { useState } from 'react';
import { SearchBoxProps } from '../interfaces';

const SearchBox = ({ callback }: SearchBoxProps) => {
  const [text, setText] = useState('');
  const [inputError, setInputError] = useState('');

  const handleSubmit = (): void => {
    let validFormats = [
      /^\d{7}[a-zA-Z]$/,
      /^[hH][oO][lL]\/\d{7}$/,
      /^[aA][xX][aA]\/\d{7}$/,
    ];

    let matched = false;
    for (let i = 0; i < validFormats.length; i++) {
      if (validFormats[i].test(text)) {
        matched = true;
        setInputError('');
        break;
      }
    }

    if (matched === true) {
      callback(text);
    } else {
      setInputError('Input does not match any valid format');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="my-6">
        <div className="bg-slate-50 px-16 py-8 border-2 border-slate-100">
          <input
            onChange={handleChange}
            className="w-96 p-4 border-t border-r mr-3 border-b border-l text-gray-800 border-gray-200 bg-white
          focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-lg"
            placeholder="membership number"
          />

          <button
            onClick={handleSubmit}
            className="px-8  bg-indigo-500  text-white font-bold p-4 uppercase border-indigo-500  border-t border-b border-r text-lg hover:bg-indigo-600"
          >
            Search
          </button>
          {inputError && (
            <p className="text-red-500 ml-1 mt-2 text-center">{inputError}</p>
          )}

          <div className="text-center mt-10">
            <p className="text-indigo-400 font-extrabold text-xs mb-4 uppercase tracking-wider font-inter">
              Valid formats
            </p>

            <div className="grid grid-cols-3 gap-4 text-slate-500 text-lg  font-semibold ">
              <kbd className="bg-slate-100 p-2 shadow-sm">1234567Z</kbd>
              <kbd className="bg-slate-100 p-2 shadow-sm">AXA/217222</kbd>
              <kbd className="bg-slate-100 p-2 shadow-sm">HOL/1234567</kbd>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
