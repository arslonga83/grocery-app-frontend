import { render } from "./script.js";

export function addItem() {
  fetch("http://localhost:3000", {
  method: 'POST',
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({
    "item": itemInput.value,
    "category": categoryInput.value
  }),
  redirect: 'follow'
  })
  .then(response => response.text())
  .then(result => console.log(result))
  .then(render)
  .catch(error => console.log('error', error));
}

export function deleteItem(e) {
  fetch(`http://localhost:3000/${e.target.dataset.id}`, {
    method: 'DELETE',
    headers: {"Content-Type": "application/json"},
    redirect: 'follow'
  })
    .then(response => response.text())
    .then(result => console.log(result))
    .then(render)
    .catch(error => console.log('error', error));
}