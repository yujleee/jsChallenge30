const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

const searchInput = document.querySelector('.search');
const sugesstions = document.querySelector('.suggestions');

fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

const findMatches = (word, cites) => {
  return cites.filter((place) => {
    const regex = new RegExp(word, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
};

const displayMatches = (e) => {
  const value = e.target.value;
  const matchArray = findMatches(value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(value, 'gi');
      const cityName = place.city.replace(regex, `<span class="hl">${value}</span>`);
      const stateName = place.state.replace(regex, `<span class="hl">${value}</span>`);
      return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${place.population}</span>
        </li>
      `;
    })
    .join('');
  sugesstions.innerHTML = html;
};

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
