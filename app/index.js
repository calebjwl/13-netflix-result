import 'whatwg-fetch';
import fillResults from './fill-in-result';
  // import './data';
const result = document.querySelector('.result-card');
const button = document.querySelector('.search-submit');
const searchInput = document.querySelector('.search');

function searchForTitle(name) {
  fetch(`http://netflixroulette.net/api/api.php?title=${name}`)
    .then(res => res.json()
    ).then((data) => {
      fillResults(result, data);
    });
}

button.addEventListener('click', () => {
  searchForTitle(searchInput.value);
});
