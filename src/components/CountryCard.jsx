import React, { useContext, memo } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

const CountryCard = ({ country }) => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`country/${country.name}`);
  };

  return (
    <div
      className={`countryCard_container ${theme} elements-color text-color`}
      onClick={handleClick}
    >
      <div className="country-img">
        <img src={country.flag} alt={country.name} />
      </div>
      <div className="country-info">
        <h3>{country.name}</h3>
        <h5>
          Population: <span>{country.population}</span>
        </h5>
        <h5>
          Region: <span>{country.region}</span>
        </h5>
        <h5>
          Capital: <span>{country.capital}</span>
        </h5>
      </div>
    </div>
  );
};

export default memo(CountryCard);
