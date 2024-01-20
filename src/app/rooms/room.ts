export enum Roomtype {
  Standard = 'Standard',
  Deluxe = 'Deluxe',
  Suite = 'Suite',
}

export interface Room {
  id: number;
  name: string;
  price: number;
  isAvailable: boolean;
  type: Roomtype;
}
