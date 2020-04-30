document.addEventListener('DOMContentLoaded', function(){
    List.getAllLists().then(data =>{
        List.loadlist();
        List.renderLists();
    });

    
    document.querySelector('#sort-btn').addEventListener('click', List.addSortByButton); 
    document.querySelector('form').addEventListener('submit', List.createItem);
   
    
    
})


