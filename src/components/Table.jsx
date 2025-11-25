import React from "react";

function Table({ data }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Flag</th>
          <th scope="col">Name</th>
          <th scope="col">Population</th>
          <th scope="col">Area(km<sup>2</sup>)</th>
          <th scope="col">Region</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr key={item.cca2}>
              <th scope="row">
                <img
                  src={`https://flagcdn.com/${item.cca2.toLowerCase()}.svg`}
                  alt={`${item.name.common} Flag`}
                  className="country-flag"
                />
              </th>
              <td>{item.name.common}</td>
              <td>{item.population.toLocaleString()}</td>
              <td>{item.area?.toLocaleString()}</td>
              <td>{item.region}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
