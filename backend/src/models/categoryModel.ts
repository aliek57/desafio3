class Category {
    id: number;
    name: string;

    constructor(payload: Category){
        this.id = payload.id;
        this.name = payload.name;
    }
}

export { Category };