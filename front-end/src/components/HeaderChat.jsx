import React from "react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

function HeaderChat({ theme, toggleTheme }) {
  return (
    <div className={`h-20 flex flex-row items-center shadow-xl justify-between p-5 ${theme === "dark" ? "bg-[#1E201E] text-white rounded-xl" : "bg-[#1d5ac5] text-white rounded-xl"}`}>
      <h1 className={`text-3xl font-bold font-inter`}>AIChat</h1>
      <Logo theme={theme} />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default HeaderChat;