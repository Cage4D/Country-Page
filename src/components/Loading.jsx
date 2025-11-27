function Loading() {
  return (
    <>
      <div className="detail-container">
        <div className="country-head">
          <div className="country-img-container">
            <div className="loading-big"></div>
          </div>
          <div className="head">
            <div className="loading-small"></div>
          </div>
          <div className="header-subsection">
            <div className="header-subsection__tab">
              <div className="loading-small"></div>
            </div>
            <div className="header-subsection__tab">
              <div className="loading-small"></div>
            </div>
          </div>
        </div>
        <div className="country-body">
          <p>Capital</p>
          <div className="loading-small"></div>
        </div>
        <div className="country-body">
          <p>Subregion</p>
          <div className="loading-small"></div>
        </div>
        <div className="country-body">
          <p>Language</p>
          <div className="loading-small"></div>
        </div>
        <div className="country-body">
          <p>Currencies</p>
          <div className="loading-small"></div>
        </div>
        <div className="country-body">
          <p>Continents</p>
          <div className="loading-small"></div>
        </div>
        <div className="neighbouring-countries">
          <p>Neighbouring Countries</p>
          <div className="bordering-countries">
            <div className="bordering-countries__group">
              <div className="loading-big"></div>
              <div className="loading-small"></div>
            </div>
            <div className="bordering-countries__group">
              <div className="loading-big"></div>
              <div className="loading-small"></div>
            </div>
            <div className="bordering-countries__group">
              <div className="loading-big"></div>
              <div className="loading-small"></div>
            </div>
          </div>
          <div className="close-detail-component">
            <button className="close-btn">Close</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loading;
