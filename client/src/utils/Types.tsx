export type CartItemType = {
  id: string;
  name: string;
  description: string;
  weight: number;
  price: number;
  image: string;
  qty: number;
  salePrcentage: number;
  saledPrice: number;
  totalPrice: number;
};

export type FilterType = {
  id: string;
  value: string;
};

export enum CardView {
  Product,
  List,
  History,
}

export enum UserMenu {
  History,
  Settings,
}

export type CurrentUserType = {
  documentId: string;
  first_name: string;
  last_name: string;
  company: string;
};
