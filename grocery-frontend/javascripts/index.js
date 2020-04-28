document.addEventListener('DOMContentLoaded', function(){
    List.loadlist();

    document.querySelector('form').addEventListener('submit', List.createItem);
})

