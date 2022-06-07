import React, { useState, useEffect, useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CountriesContext } from "../contexts/CountriesContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Filters = () => {
  const [showRegions, setShowRegions] = useState(false);
  const [activeRegion, setActiveRegion] = useState(null);
  const { handleFilteringRegion } = useContext(CountriesContext);
  const {theme} = useContext(ThemeContext)
  const regionsList = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    handleFilteringRegion(activeRegion);
  }, [activeRegion]);

  return (
    <div className={`regionFilter_container ${theme} elements-color text-color`}>
      <div
        className="select-field"
        onClick={() => setShowRegions(!showRegions)}
      >
        <p>{activeRegion ? activeRegion : "Filter by Region"}</p>
        <span>
          <IoIosArrowDown />
        </span>
      </div>
      <div
        className="regions"
        style={{ display: showRegions ? "block" : "none" }}
      >
        <ul className="reg-items">
          <li
            className="reg-item"
            onClick={() => {
              setShowRegions(false);
              setActiveRegion(null);
            }}
          >
            Filter by Region
          </li>
          {regionsList.map((reg) => {
            return (
              <li
                key={reg}
                className="reg-item"
                onClick={() => {
                  setShowRegions(false);
                  setActiveRegion(reg);
                }}
              >
                {reg}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Filters;
