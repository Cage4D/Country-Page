import React from "react";
import { RenderCountryInfo } from "./API";
import { CountryContext } from "./CountryContext";
import Loading from "./Loading"
import NeighbouringCountries from "./NeighbouringCountries";

function CountryDetails({ name }) {
  const { setIndividual } = React.useContext(CountryContext)
  const [info, setInfo] = React.useState(null);

  React.useEffect(() => {
    async function fetchDetails() {
      const CountryInfo = await RenderCountryInfo(name);
      setInfo(CountryInfo[0]);
    }

    fetchDetails();
  }, [name]);

  if (!info) return <Loading/>
  return (
    <>
      <div className="detail-container">
        <div className="country-head">
          <div className="country-img-container">
            <img
              src={`https://flagcdn.com/${info.cca2.toLowerCase()}.svg`}
              alt={`${info.name.common} Flag`}
              className="image"
            />
          </div>
          <div className="head">
            <h1>{info.name.common}</h1>
            <p>{info.name.official}</p>
          </div>
          <div className="header-subsection">
            <div className="header-subsection__tab">
              <p>Population</p>
              <div className="divide"></div>
              <p>{info.population.toLocaleString()}</p>
            </div>
            <div className="header-subsection__tab">
              <p>
                Area(km<sup>2</sup>)
              </p>
              <div className="divide"></div>
              <p>{info.area.toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="country-body">
          <p>Capital</p>
          <p>{info.capital ? info.capital[0] : "No Official Capital"}</p>
        </div>
        <div className="country-body">
          <p>Subregion</p>
          <p>{info.subregion}</p>
        </div>
        <div className="country-body">
          <p>Language</p>
          <p>{info.languages ? Object.values(info.languages).join(", ") : "No Official Languages"}</p>
        </div>
        <div className="country-body">
          <p>Currencies</p>
          <p>{info.currencies ? Object.values(info.currencies)[0].name : "No Official Currencies"}</p>
        </div>
        <div className="country-body">
          <p>Continents</p>
          <p>{info.continents[0]}</p>
        </div>
        <div className="neighbouring-countries">
          <p>Neighbouring Countries</p>
          <div className="bordering-countries">
            {info.borders ? <NeighbouringCountries borders={info.borders}/> : ""}
          </div>
          <div className="close-detail-component">
            <button 
            className="close-btn"
            onClick={() => setIndividual(false)}>Close</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryDetails;
