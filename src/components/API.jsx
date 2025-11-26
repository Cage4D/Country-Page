
async function fetcher(endpoint) {
  try {
    const response = await fetch(endpoint);

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)
    const json = await response.json();

    return json;
  } catch (error) {
    console.error("Fetch error: ", error);
    return [];
  }
}

export async function RenderResults(
  sortType,
  memberOfUN = false,
  independent = false,
  regions = []
) {
  let countries = [];
  try {
    if (regions.length > 0) {
      const regionUrls = regions.map(
        (region) =>
          `https://restcountries.com/v3.1/region/${region}?fields=name,population,cca2,area,unMember,independent,region`
      );
      const responses = await Promise.all(
        regionUrls.map((url) => fetcher(url))
      );
      countries = responses.flat();
    } else {
      countries = await fetcher(
        "https://restcountries.com/v3.1/all?fields=name,population,cca2,area,unMember,independent,region"
      );
    }

    if (memberOfUN)
      countries = countries.filter((country) => country.unMember === true);
    if (independent)
      countries = countries.filter((country) => country.independent === true);

    let sorted;
    if (sortType === "population") {
      sorted = countries.sort((a, b) => b.population - a.population);
    } else if (sortType === "alphabetical-order") {
      sorted = countries.sort((a, b) => {
        if (a.name.common < b.name.common) return -1;
        if (a.name.common > b.name.common) return 1;
        return 0;
      });
    } else {
      sorted = countries.sort((a, b) => b.area - a.area);
    }

    return sorted;
  } catch (error) {
    console.error("Error fetching countries: ", error);
    return [];
  }
}

export async function RenderCountryInfo(name) {
  try {
    const info = await fetcher(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`
    );
    return info;
  } catch (error) {
    console.error("Fetch error: ", error);
  }
}