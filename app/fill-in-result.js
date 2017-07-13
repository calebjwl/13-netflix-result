export default function fillResults(el, data) {
  el.querySelector('.title').innerText = data.show_title;
  el.querySelector('.genre').innerText = data.category;
  el.querySelector('.rating__number ').innerText = data.rating;
  el.querySelector('.result-card__pic').src = data.poster;
  el.querySelector('.summary').innerText = data.summary;
  el.querySelector('.actors').innerText = data.show_cast;
}
