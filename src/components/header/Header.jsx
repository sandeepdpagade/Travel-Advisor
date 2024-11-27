import { BiSearchAlt2 } from "react-icons/bi";
import React, { useState } from "react";

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

const Header = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const items = [
    "React",
    "Tailwind",
    "JavaScript",
    "CSS",
    "HTML",
    "Node.js",
    "TypeScript",
    "Python",
    "Django",
    "Flask",
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Filter suggestions
    if (value.length > 0) {
      const filtered = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
  };

  return (
    <>
      <div className="bg-blue-600 p-4 flex flex-col sm:flex-row gap-4 justify-between items-center text-white">
        <div className="">Travel Advisor</div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div>Explore all places</div>
          <div className="text-black flex items-center bg-white rounded">
            <div className="relative w-full max-w-md mx-auto text-black">
              {/* Search Input */}
              <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
                <input
                  type="text"
                  value={query}
                  onChange={handleInputChange}
                  placeholder="Search..."
                  className="flex-grow px-4 py-2 outline-none rounded-md "
                />
                <button className="px-3 h-4 w-8 text-gray-500">
                  <BiSearchAlt2 />
                </button>
              </div>

              {/* Suggestions */}
              {suggestions.length > 0 && (
                <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
