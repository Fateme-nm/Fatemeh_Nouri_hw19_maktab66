import React, { useContext, useState, useEffect } from "react";
import Searchbox from "../components/SearchBox";
import Filters from "../components/RegionFilter";
import "../assets/scss/home.scss";
import CountryCard from "../components/CountryCard";
import { CountriesContext } from "../contexts/CountriesContext";
import LoadingSpinner from "../components/LoadingSpinner";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useSearchParams();
  const { filteredCountries: countries } = useContext(CountriesContext);

  return (
    <>
      <section className="filters_container">
        <Searchbox />
        <Filters />
      </section>
      <section className="countries-items_container">
        {countries.length > 0 ? (
          countries.map((country) => {
            return <CountryCard key={country.name} country={country} />;
          })
        ) : search.get("country") ? null : <LoadingSpinner />}
      </section>
    </>
  );
};

export default Home;
