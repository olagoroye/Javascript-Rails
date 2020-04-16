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

}

