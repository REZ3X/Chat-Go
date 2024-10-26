import React from "react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import CloseButton from "./CloseButton";

function HeaderChat({ theme, toggleTheme, onClose }) {
  return (
    <div className={`h-20 flex flex-row items-center shadow-xl justify-between p-5 ${theme === "dark" ? "bg-[#1E201E] text-white rounded-xl" : "bg-[#1d5ac5] text-white rounded-xl"}`}>
      <div className="flex flex-row items-center">
      {onClose && <CloseButton onClick={onClose} theme={theme} />}
        <h1 className={`text-3xl font-bold font-inter`}>AIChat</h1>
      </div>
      <Logo theme={theme} />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default HeaderChat;