import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Toggles.css"

const Toggles = () => {
  const [active, setActive] = useState(1);

  const handleToggle = (num) => {
    if (active === num) return;
    setActive(num);
  };

  console.log(active);

  return (
    <div className="toggles">
      <Link to="/">
        <button
          className={`btn btn-primary btn-all-badges
      ${active === 1 ? "active" : ""}`}
          onClick={() => handleToggle(1)}
        >
          All Badges
        </button>
      </Link>
      <Link to="/popular">
        <button
          className={`btn btn-primary btn-popular-badges
      ${active === 2 ? "active" : ""}`}
          onClick={() => handleToggle(2)}
        >
          Popular Badges
        </button>
      </Link>
      <Link to="/ongoing">
        <button
          className={`btn btn-primary btn-ongoing-badges
      ${active === 3 ? "active" : ""}`}
          onClick={() => handleToggle(3)}
        >
          Ongoing Badges
        </button>
      </Link>
      <Link to="/earned">
        <button
          className={`btn btn-primary btn-earned-badges
      ${active === 4 ? "active" : ""}`}
          onClick={() => handleToggle(4)}
        >
          Earned Badges
        </button>
      </Link>
    </div>
  );
};

export default Toggles;
