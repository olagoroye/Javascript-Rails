document.addEventListener('DOMContentLoaded', function(){
    List.loadlist();
    document.querySelector('#sort-btn').addEventListener('click', List.addSortByButton); 
    document.querySelector('form').addEventListener('submit', List.createItem);
   
    
    
})


