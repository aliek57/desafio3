class Tour {
    id: number;
    title: string;
    description?: string;
    price: number;
    durationDays: number;
    availableFrom?: Date;
    availableTo?: Date;
    destinationId: number;
    createdAt: string;


    constructor(payload: Tour){
        this.id = payload.id;
        this.title = payload.title;
        this.description = payload.description;
        this.price = payload.price;
        this.durationDays = payload.durationDays;
        this.availableFrom = payload.availableFrom;
        this.availableTo = payload.availableTo;
        this.destinationId = payload.destinationId;
        this.createdAt = payload.createdAt;
    }
}

export { Tour };