export enum Roomtype {
    Standard = "Standard",
    Deluxe = "Deluxe",
    Suite = "Suite"
}

export interface Room {
    name : string,
    price : number,
    isAvailable : boolean,
    type : Roomtype
}