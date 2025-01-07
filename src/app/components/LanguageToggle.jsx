"use client";
import { useState } from "react";

export default function LanguageToggle() {
  const [isArabic, setIsArabic] = useState(false); 

  const handleToggle = () => {
    setIsArabic(!isArabic);
  };

  return (
    <div className="flex justify-center items-center absolute top-3 right-3">
      <div className="relative">
        <label
          htmlFor="language-toggle"
          className="cursor-pointer w-[75px] h-9 bg-gradient-to-l from-[#2AF598] to-[#009EFD] rounded-full flex items-center py-2 px-1 transition-all"
        >
          <input
            id="language-toggle"
            type="checkbox"
            className="sr-only"
            checked={isArabic}
            onChange={handleToggle}
          />
          {/* Toggle Button */}
          <div
            className={`w-7 h-7 bg-white rounded-full shadow-md transition-transform transform ${
              isArabic ? "translate-x-10" : "translate-x-0"
            }`}
          ></div>

          {/* Language Labels */}
          <span
            className={`absolute left-2 text-sm font-bold uppercase ${
              isArabic ? "text-white" : "text-black"
            }`}
          >
            AR
          </span>
          <span
            className={`absolute right-2 text-sm font-bold uppercase ${
              isArabic ? "text-black" : "text-white"
            }`}
          >
            EN
          </span>
        </label>
      </div>
    </div>
  );
} 