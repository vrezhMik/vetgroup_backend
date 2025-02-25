import { FilterType } from "./Types";
import { CartItemType } from "./Types";
import { Item } from "@/classes/ItemClass";
import { CardView } from "./Types";
import { UserMenu } from "./Types";
import { CurrentUserType } from "./Types";

export interface ImagePropsInterface {
  url: string;
  alt: string;
}

export interface CardProductViewPropsInterface {
  item: Item | null;
}

export interface ProductPropsInterface {
  data: CartItemType;
}

export interface FiltersStateInterface {
  filters: FilterType[];
  addFilter: (filter: FilterType) => void;
  removeFilter: (id: string) => void;
}
export interface CartStateInterface {
  cartItems: Item[];
  cartTotal: number;
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
  getItemCount: () => number;
}

export interface CardStateInterface {
  cardState: boolean;
  currentItem: Item | null;
  setCurrentItem: (item: Item | null) => void;
  setCardState: (value: boolean) => void;
}

export interface CardViewInterface {
  cardViewState: CardView;
  setCardView: (view: CardView) => void;
}

export interface UserMenuStateInterface {
  activeState: UserMenu;
  setActiveState: (value: UserMenu) => void;
}

export interface CurrentUserStateInterface {
  user_data: CurrentUserType;
  set_current_user: (user: CurrentUserType) => void;
}

export interface LoginStateInterface {
  is_logged_in: boolean;
  set_logged_in_status: (status: boolean) => void;
}
