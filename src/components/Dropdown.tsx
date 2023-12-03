"use client"
import { useState } from 'react';
interface DropdownProps {
    options: string[];
    onSelect: (selectedOption: string | null) => void;
  }

const Dropdown = ({options, onSelect}: DropdownProps) => {
    //States
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    
    //Handle Open Function
    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false);
      };
    return ( 
        <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full rounded-lg border border-textLightBlue text-textBlue px-4 py-3 bg-inherit text-xs md:text-sm duration-500 focus:outline-none "
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption || 'Select an option'}
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right z-10 absolute right-0 mt-2 w-full rounded-md shadow-lg bg-accentBlue ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map((option) => (
              <p
                key={option}
                className="block px-4 py-2 text-xs md:text-sm text-textWhite hover:bg-bglightBlue font-bold cursor-pointer"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
     );
}
 
export default Dropdown;

