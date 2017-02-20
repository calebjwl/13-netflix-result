import 'whatwg-fetch';
import fillResults from './fill-in-result';
  // import './data';
const result = document.querySelector('.result-card');

fetch(`http://netflixroulette.net/api/api.php?title=Attack%20on%20titan`)
  .then(res => res.json()
  ).then((data) => {
    fillResults(result, data);
  });
