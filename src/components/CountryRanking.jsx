import React from "react";
import Button from "./Button";
import CheckboxInput from "./checkboxInput";
import Table from "./Table"
import { RenderResults } from "./API";

function CountryRanking() {
  const [selectedSort, setSelectedSort] = React.useState("population");
  const [selectedRegion, setSelectedRegion] = React.useState([])
  const [nations, setNations] = React.useState(false)
  const [independent, setIndependent] = React.useState(false)
  const [countries, setCountries] = React.useState([])
  const [filteredCountries, setFilteredCountries] = React.useState([])
  const [input, setInput] = React.useState("")

  React.useEffect(() => {
    async function fetchData() {
      const results = await RenderResults(
        selectedSort,
        nations,
        independent,
        selectedRegion
      );
      setCountries(results)
      setFilteredCountries(results)
    }

    fetchData()
  }, [selectedSort, nations, independent, selectedRegion])

  React.useEffect(() => {
    if (countries?.length === 0) {
      setFilteredCountries([])
      return;
    }

    const query = input.trim().toLowerCase();
    const filtered = countries.filter(country => {
      const name = country.name.common.toLowerCase();
      const official = country.name.official?.toLowerCase() || "";
      const region = country.region?.toLowerCase() || "";
      const subregion = country.subregion?.toLowerCase() || "";

      return (
        name.includes(query) ||
        official.includes(query) ||
        region.includes(query) || 
        subregion.includes(query)
      )
    })

    setFilteredCountries(filtered)
  }, [input, countries])

  return (
    <>
      <div className="panel">
        <div className="header">
          <p>Found {filteredCountries.length} countries</p>
          <div className="input-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="input-search"
            >
              <circle cx="11" cy="11" r="7" stroke="#6C727F" strokeWidth="2" />
              <path
                d="M20 20L17 17"
                stroke="#6C727F"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="text"
              className="header-input"
              id="search-input"
              placeholder="Search by Name, Region, Subregion"
              value={input}
              onChange={event => setInput(event.target.value)}
            />
          </div>
        </div>
        <div className="body">
          <div className="sidebar">
            <label htmlFor="sortBy">
              <p className="sidebar-header">Sort by</p>
              <select
                name="sorting-option"
                id="sortBy"
                className="select-input"
                value={selectedSort}
                onChange={(event) => setSelectedSort(event.target.value)}
              >
                <option value="population">Population</option>
                <option value="alphabetical-order">Alphabetical Order</option>
                <option value="area">Area</option>
              </select>
            </label>

            {/* REGION */}
            <div className="region-container">
              <p className="sidebar-header">Region</p>
              <div
                className="toggle-button-group"
                role="group"
                >
                <Button region={"Americas"} state={selectedRegion} setState={setSelectedRegion}>Americas</Button>
                <Button region={"Antarctic"} state={selectedRegion} setState={setSelectedRegion}>Antarctica</Button>
                <Button region={"Africa"} state={selectedRegion} setState={setSelectedRegion}>Africa</Button>
                <Button region={"Asia"} state={selectedRegion} setState={setSelectedRegion}>Asia</Button>
                <Button region={"Europe"} state={selectedRegion} setState={setSelectedRegion}>Europe</Button>
                <Button region={"Oceania"} state={selectedRegion} setState={setSelectedRegion}>Oceania</Button>
              </div>
            </div>

            {/* STATUS */}
            <div className="status-container">
              <p className="sidebar-header">Status</p>
              <CheckboxInput id={"United Nations"} state={nations} setState={setNations}>
                Member of the United Nations
              </CheckboxInput>
              <CheckboxInput id={"United Independent-nations"} state={independent} setState={setIndependent}>
                Independent
              </CheckboxInput>
            </div>
          </div>
          <div className="display-info"><Table data={filteredCountries}/></div>
        </div>
      </div>
    </>
  );
}

export default CountryRanking;
