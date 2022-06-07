import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CountriesContext = new createContext({});

const CountriesContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [alphaCodeList, setAlphaCodeList] = useState({});
  const [activeRegion, setActiveRegion] = useState(null);
  const [searchedValue, setSearchedValue] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    getCountries();
    return () => {
      setCountries([]);
    };
  }, []);

  useEffect(() => {
    setFilteredCountries(countries);
    createAlphaCodeList();
  }, [countries]);

  useEffect(() => {
    filterCountries();
  }, [searchedValue, activeRegion]);

  const getCountries = async () => {
    await axios
      .get("https://restcountries.com/v2/all")
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(err));
  };

  const createAlphaCodeList = () => {
    const alphaObj = {};
    countries.map((country) => {
      return (alphaObj[country.alpha3Code] = country.name);});
    setAlphaCodeList(alphaObj);
  };

  const handleFilteringSearch = (searchedValue) => {
    setSearchedValue(searchedValue);
  };

  const handleFilteringRegion = (selectedRegion) => {
    setActiveRegion(selectedRegion);
  };

  const filterCountries = () => {
    const filterList = countries.filter((country) => {
      let condi1 = country.name.toLowerCase().includes(searchedValue.toLowerCase())
      return activeRegion ? condi1 && country.region === activeRegion : condi1
    });
    setFilteredCountries(filterList);
  };

  return (
    <CountriesContext.Provider
      value={{
        alphaCodeList,
        filteredCountries,
        handleFilteringSearch,
        handleFilteringRegion,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContextProvider;
