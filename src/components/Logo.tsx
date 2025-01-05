import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link to="/" className="inline-block">
      <h1 className="font-serif text-4xl sm:text-5xl text-brand-secondary italic tracking-wider">
        Chetna
        <span className="text-brand-accent font-normal not-italic">
          &#8217;s
        </span>
      </h1>
    </Link>
  );
};

export default Logo;
