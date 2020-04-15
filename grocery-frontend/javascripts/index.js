document.addEventListener('DOMContentLoaded', function(){
    loadLists();
})


async function loadLists() {
    let response = await fetch('http://localhost:3000/lists')
    let lists = await response.json();
  
    lists.forEach(data => {
      let list = new List(data);
      let div = document.getElementById('list-checkboxes');
      let checkbox = document.createElement('input');
      let label = document.createElement('label');
      label.setAttribute('for', `list-${list.id}`);
      label.innerText = list.title;
      checkbox.id = `list-${list.id}`;
      checkbox.type = "checkbox";
      checkbox.value = list.id;
      div.appendChild(checkbox);
      div.appendChild(label);
    })

    document.querySelector('form').addEventListener('submit', createItem);
}


async function createItem(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const brand = document.getElementById('brand').value;
    const description = document.getElementById('description').value;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')
    const list_ids = [];
  
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        list_ids.push(checkboxes[i].value);
      }
    }
   
    const strongParams = {
        item: {
          name,
          price,
          brand,
          description,
          list_ids
        }
    }
    const response = await fetch("http://localhost:3000/lists", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(strongParams)
      })
      const item = await response.json();
    
    
      renderLists();
}
async function renderLists() {
    List.all = [];
    let listsDiv = document.querySelector('#lists');
    listsDiv.innerHTML = '';
  
    let response = await fetch('http://localhost:3000/lists');
    let data = await response.json();
  
    List.all = data.map(list => new Location(list));
  
    List.all.forEach(list => {
      let div = document.createElement('div');
      let h3 = document.createElement('h3');
      h3.textContent = list.name;
      div.appendChild(h3)
      listDiv.appendChild(div);
    })
  }