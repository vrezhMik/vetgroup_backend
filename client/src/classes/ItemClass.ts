import { CartItemType } from "@/utils/Types";

export class Item {
  private currentItem: CartItemType;

  constructor(item: CartItemType) {
    this.currentItem = item;
  }

  getId(): string {
    if (this.isEmpty()) return "";
    return this.currentItem.id;
  }

  getTitle(): string {
    if (this.isEmpty()) return "";

    return this.currentItem.name;
  }

  getWeight(): number {
    if (this.isEmpty()) return 0;

    return this.currentItem?.weight;
  }

  getPrice(): number {
    if (this.isEmpty()) return 0;

    return this.currentItem.price;
  }

  getDescription(): string {
    if (this.isEmpty()) return "";

    return this.currentItem.description;
  }

  getImage(): string {
    if (this.isEmpty()) return "";
    return this.currentItem.image;
  }

  getQty(): number {
    if (this.isEmpty()) return 1;
    return this.currentItem.qty;
  }

  getSalePercentage(): number {
    if (this.isEmpty()) return 0;
    return this.currentItem.salePrcentage;
  }

  getSalePrice(): number {
    if (this.isEmpty()) return 0;
    this.setSalePrice();
    return this.currentItem.saledPrice;
  }

  getTotalPrice(): number {
    if (this.isEmpty()) return 0;
    this.setSalePrice();
    return this.currentItem.totalPrice;
  }

  hasSale(): boolean {
    if (this.isEmpty()) return false;
    return this.currentItem.salePrcentage > 0;
  }

  isEmpty(): boolean {
    if (this.currentItem) return false;
    return true;
  }

  setSalePrice(): void {
    if (!this.hasSale() || this.isEmpty()) return;
    this.currentItem.saledPrice =
      this.currentItem.price -
      (this.currentItem.price * this.currentItem.salePrcentage) / 100;
  }

  setQty(value: number): void {
    if (this.isEmpty()) return;
    this.currentItem.qty = value;
  }

  setTotal(): void {
    if (this.isEmpty()) return;
    let finalPrice = 0;
    finalPrice = this.hasSale()
      ? this.getSalePrice()
      : (finalPrice = this.getPrice());
    this.currentItem.totalPrice = finalPrice * this.getQty();
  }
}
