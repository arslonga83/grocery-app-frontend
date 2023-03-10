import { addItem, deleteItem } from "./list.js"

document.querySelector('#submit').addEventListener('click', (e) => {
  e.preventDefault()
  addItem()
  document.getElementById('itemInput').value = ''
});

document.addEventListener('click', (e) => {
  if(e.target.dataset.id) {
    console.log(`clicked id ${e.target.dataset.id}`)
    e.preventDefault()
    deleteItem(e)
  }
})

let categoriesArray = ['Amazon', 'Asian', 'Baking', 'Beer/Wine', 'Canned', 'Cereal', 'Cleaning', 'Condiments', 'Cookies', 'Crackers', 'Dairy', 'Drinks', 'Frozen', 'Fruit', 'Grains', 'Household', 'Paper Products', 'Pasta', 'Pets', 'Pharmacy', 'Produce', 'Snacks', 'Spices', 'Staples', 'Supplies', 'Urgent']

export function render() {
  fetch('https://grocery-list-fny0.onrender.com') 
  .then(res => res.json())
  .then(data => {
    document.getElementById('list').innerHTML = getListHtml(data);
    console.log(data)
  })
}

function getListHtml(data) {
  let listHtml = ''
    data.map(item => {
      listHtml += `
      <div class="item">
        <p>${item.category}</p> 
        <h2>${item.item}</h2>
        <button data-id="${item.id}">X</button>
      </div>
      `
    })
    return listHtml;
}

function renderOptions() {
  document.getElementById('categoryInput').innerHTML = getOptionsHtml();
}

function getOptionsHtml() {
  let optionsHtml = '<option></option>';
  categoriesArray.map(option => {
    optionsHtml += `
    <option value=${option} name=${option}>${option}</option>
    `
  })
  return optionsHtml;
}

render()
renderOptions()