import { useState } from "react";
import { FaMoon, FaSun, FaAngrycreative } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isDark, setDark] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="hidden mx-auto max-w-6xl md:flex items-center justify-between px-10 text-lg">
      <button className="text-8xl" onClick={() => navigate("/")}>
        <FaAngrycreative />
      </button>
      <button onClick={() => setDark(document.body.classList.toggle("dark"))}>
        {isDark ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
}
