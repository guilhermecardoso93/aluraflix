import { useState, useRef, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import "./OptionList.css";

export function OptionList({ value, onChange, options, classe, classe2 }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    onChange({ target: { name: "category", value: option } });
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="option-list" ref={dropdownRef}>
      <label>Categoria</label>
      <div className="input-with-icon" onClick={handleToggleDropdown}>
        <div className={`${classe}`}>{value || "Selecionar uma Categoria"}</div>
        <IoMdArrowDropdown className="dropdown-icon dropdown-icon-video" />
      </div>
      {isOpen && (
        <ul className="dropdown-options">
          {options.map((option) => (
            <li
              key={option.id}
              className={`${classe2}`}
              onClick={() => handleSelectOption(option.name)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
