import React, { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { CountriesContext } from "../contexts/CountriesContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { useSearchParams } from "react-router-dom";

const Searchbox = () => {
  const [search, setSearch] = useSearchParams();
  const { handleFilteringSearch } = useContext(CountriesContext);
  const { theme } = useContext(ThemeContext);

  const handleChange = (e) => {
    const country = e.target.value;
    handleFilteringSearch(country);
    setSearch(country ? { country } : {});
  };

  return (
    <div className={`search_container ${theme} elements-color text-color`}>
      <span className="search-icon">
        <BsSearch />
      </span>
      <input
        onChange={(e) => handleChange(e)}
        className="search-field"
        type="text"
        placeholder="Search for a country..."
        value={search.get("country") || ""}
      />
    </div>
  );
};

export default Searchbox;
