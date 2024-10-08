class Review {
    id:  number;
    servicesRating: number;
    locationsRating: number;
    amenitiesRating: number;
    pricesRating: number;
    roomRating: number;
    comment?: string;
    isAnonymous?: boolean;
    createdAt: string;
    userId?: string;
    tourId: number;


    constructor(payload: Review){
        this.id = payload.id;
        this.servicesRating = payload.servicesRating;
        this.locationsRating = payload.locationsRating;
        this.amenitiesRating = payload.amenitiesRating;
        this.pricesRating = payload.pricesRating;
        this.roomRating = payload.roomRating;
        this.comment = payload.comment;
        this.isAnonymous = payload.isAnonymous;
        this.createdAt = payload.createdAt;
        this.userId = payload.userId;
        this.tourId = payload.tourId;
    }
}

export { Review}