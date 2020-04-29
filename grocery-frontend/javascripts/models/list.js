class List {
    static all = []
    constructor(data){
        this.id = data.id;
        this.title = data.title;
        this.items = data.items;
        this.save();
    }
    save(){
        List.all.push(this);
    }

    static loadlist(){

        API.get('/lists')
        .then(function(lists){
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
        })
        .catch(errors => console.log(errors))
        List.renderLists();
        //List.collapse('item0')
    }
    
    
    static createItem(e) {
        e.preventDefault();
    //   
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

        if(list_ids.length == 0) {
            console.log("You have to select at least one list.");
            return;
        }

        const strongParams = {
            item: {
              name: name,
              price: price,
              brand: brand,
              description: description,
              list_ids: list_ids
            }
        }  

        API.post('/items', strongParams)
        .then(data=>{
            // render html for item just created 
            const form = document.getElementById("item-form");
            form.reset();
            List.renderLists();
            console.log(data);
        })
        .catch((error)=> {console.log(error)});       
        
        
    }

    static renderLists() {
        // console.log('render start')
        List.all = [];
        let listsDiv = document.getElementById('lists');
        listsDiv.innerHTML = '';
      
        API.get('/lists')
        .then((data)=>{
            data.forEach((list, key) => {
                 
                console.log(list)
                let div = document.createElement('div');
                let sub_div = document.createElement('div')
                let h3 = document.createElement('h3');
                let check = true;
                
                h3.innerText = list.title;
                div.appendChild(h3)
                list.items.forEach((item, key1) =>{
                    let div1 = document.createElement('div')
                    let h5 = document.createElement('h5')
                    let delete_btn = document.createElement('button')
                    delete_btn.innerText = "Delete Item"
                    h5.style.margin = "10px 30px"
                    h5.innerText = item.name
                    div1.appendChild(h5)
                    div1.appendChild(delete_btn)
                    div1.style.display= "flex"
                    delete_btn.addEventListener("click", delete_item)
        function delete_item(){
                        API.delete(`/remove_item/${list.id}/${item.id}`)
                        .then((data)=>{
                            console.log(data)
                            List.renderLists();
                        })
                        .catch((error)=>{
                            console.log(error)
                        })
                    }
                    sub_div.appendChild(div1)
                    sub_div.setAttribute("id", "item"+key)
                    sub_div.style.display = "none"
                    
                })
                div.appendChild(sub_div)
                h3.addEventListener("click", show)
                function show(){
                    if(check){
                        sub_div.style.display = 'block'
                        check = false
                    }
                    else{
                        sub_div.style.display = 'none'
                        check = true
                    }
                }
                listsDiv.appendChild(div);
            })           
        })
        .catch((error)=>{
            console.log(error)
        })    
      }
    static addSortByButton() {
        // document.getElementById('lists').addEventListener('onclick', (e) =>{
        //     let list = document.getElementById
        // })
        
        List.all.sort(function (a, b){
            const keyA = a.title.toUpperCase();
            const keyB = b.title.toUpperCase();
            if(keyA < keyB){return -1;}
            if(keyA > keyB){return 1;}
            return 0;
        });
         console.log(List.all);
        // List.renderLists();
        let list = document.getElementById('lists').innerHTML;
    //    API.get('/lists')
    //    .then((data) =>{
    //        data.sort(function (a, b){
    //            var keyA = a.title;
    //            var keyB = b.title;
    //            if(keyA >keyB){return -1;}
    //            if(keyA  < keyB){return 1;}
    //            return 0;
    //        });
    //        data.forEach((list, key)=>{
    //            console.log(list)
    //         let div = document.createElement('div');
    //         let ul = document.createElement('div');
    //         let li = document.createElement('li');
    //         let check = true;

    //         li.innerText = list.title;
    //         ul.appendChild(li);
    //         list.items.sort(function (a,b){
    //             var keyA = a.name;
    //             var keyB = b.name; 
    //            if(keyA >keyB){return -1;}
    //            if(keyA  < keyB){return 1;}
    //            return 0;
    //         })
    //        })
    //        List.renderLists(true);
    //    })
        
                
    }

}

// all list available for items to be saved =checkboxes
