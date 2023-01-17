
function render() {
  fetch('http://localhost:3000') 
  .then(res => res.json())
  .then(data => {
    let listHtml = ''
    data.map(item => {
      listHtml += `
      <h2>${item.category}, ${item.item}</h2>
      <button data-id="${item.id}">delete</button>
      `
    })
    document.getElementById('list').innerHTML = listHtml;
  })
}


document.querySelector('#submit').addEventListener('click', (e) => {
    e.preventDefault()
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
    .then(render())
    .catch(error => console.log('error', error));
  });

  render()


document.addEventListener('click', (e) => {
  if(e.target.dataset.id) {
    console.log(`clicked id ${e.target.dataset.id}`)
  }
})