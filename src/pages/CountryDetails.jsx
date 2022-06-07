import React, { useContext, useState, useEffect, memo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {CountriesContext} from "../contexts/CountriesContext";
import "../assets/scss/countryDetails.scss";
import { BsArrowLeft } from "react-icons/bs";
import { ThemeContext } from "../contexts/ThemeContext";
import LoadingSpinner from "../components/LoadingSpinner";

const CountryDetails = () => {
  const { name } = useParams();
  const {filteredCountries:countries, alphaCodeList} = useContext(CountriesContext);
  const [country, setCountry] = useState(null);
  const navigate = useNavigate()
  const { theme } = useContext(ThemeContext);
  
  const handleBack = () => navigate(-1)

  const getSelectedCountry = async () => {
    const selectedCountry = await countries.find(
      (country) => country.name === name);
    setCountry(selectedCountry)
  };

  useEffect(() => {
    getSelectedCountry();
  }, [countries, name])

if (country) {
  return (
    <div className={`countryDetails_container ${theme} background-color text-color`}>
      <div className="back-btn_container elements-color" onClick={handleBack}>
        <span className="back-icon">
          <BsArrowLeft />
        </span>
        <button className="back-btn elements-color">Back</button>
      </div>
      <div className="country-details">
        <div className="country-img">
          <img src={country.flag} alt={country.name} />
        </div>
        <div className="country-info">
            <h2>{country.name}</h2>
            <div className="info">
                <p>Native Name: <span>{country.nativeName}</span></p>
                <p>Population: <span>{country.population}</span></p>
                <p>Region: <span>{country.region}</span></p>
                <p>Sub Region: <span>{country.subregion}</span></p>
                <p>Capital: <span>{country.capital}</span></p>
                <p>Top Level Domain: <span>{country.topLevelDomain}</span></p>
                <p>Currencies: <span>{country.currencies[0].name}</span></p>
                <p>Languages: <span>{country.languages[0].name}</span></p>
            </div>
            {country.borders ? (
                <div className="borderCountries">
                  <p>Border Countries:</p>
                  {country.borders.map(border => {
                    return (
                        <Link to={`/country/${alphaCodeList[border]}`}
                          key={border} 
                          className={`border-link elements-color text-color`}>
                          {alphaCodeList[border]}
                        </Link>
                    )})}
                </div> ) : null }
        </div>
      </div>
    </div>
  );
}
else {
  return <LoadingSpinner />
}
};

export default memo(CountryDetails);
