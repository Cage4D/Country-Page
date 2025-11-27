import React from "react";

function NeighbouringCountries({ borders }) {
  const [neighbours, setNeighbours] = React.useState([]);
  React.useEffect(() => {
    if (borders?.length === 0) return;

    fetch(`https://restcountries.com/v3.1/alpha?codes=${borders.join(",")}`)
      .then((info) => info.json())
      .then((data) =>
        setNeighbours(
          data.map((item) => ({ cca2: item.cca2, name: item.name.common, id: crypto.randomUUID() }))
        )
      )
      .catch(() => setNeighbours([]));
  }, [borders]);

  if (borders?.length === 0) return null;
  return (
    <>
      {neighbours.map((country) => (
        <div className="bordering-countries__group" key={country.id}>
          <img
            src={`https://flagcdn.com/${country.cca2.toLowerCase()}.svg`}
            alt={`${country.name} Flag`}
            className="small-flag"
          />
          <p>{country.name}</p>
        </div>
      ))}
    </>
  );
}

export default NeighbouringCountries;
