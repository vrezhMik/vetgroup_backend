"use client";
import style from "./product.module.scss";
import { useState } from "react";
import { useCart, useCard, useCardView } from "@/store/store";
import { ProductPropsInterface } from "@/utils/Interfaces";
import { CardView } from "@/utils/Types";
import { Item } from "@/classes/ItemClass";

import ImageComponent from "@/components/Elements/Image/image.component";
import ArrowSVG from "@/components/Elements/Icons/ArrowSVG";

export default function Product({ data }: ProductPropsInterface) {
  const [quantity, setQuantity] = useState(1);
  const { setCardState, setCurrentItem } = useCard();
  const { addItem } = useCart();
  const { setCardView } = useCardView();
  const currentProduct = new Item(data);

  const increment = () => {
    currentProduct.setQty(quantity + 1);
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity <= 1) return;
    currentProduct.setQty(quantity - 1);
    setQuantity(quantity - 1);
  };

  const handleChange = (e: any) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setQuantity(value);
    }
  };

  const handleClick = (state: boolean): void => {
    setCardState(state);
    setCurrentItem(currentProduct);
    setCardView(CardView.Product);
  };

  const orderItem = (): void => {
    currentProduct.setTotal();
    addItem(currentProduct);
  };

  return (
    <section className={`${style.product} flex`}>
      <div
        className={style.productImage}
        onClick={() => {
          handleClick(true);
        }}
      >
        {currentProduct.hasSale() && (
          <div className={style.productImageSale}>
            <span>-{currentProduct.getSalePercentage()}%</span>
          </div>
        )}
        <ImageComponent
          alt={currentProduct.getTitle() || ""}
          url={currentProduct.getImage() || "/"}
        />
      </div>

      <div className={`${style.productInfo} flex`}>
        <div className={`${style.productInfoPrice} flex`}>
          <p
            className={
              currentProduct.hasSale() ? style.productInfoPriceSale : ""
            }
          >
            {currentProduct.getQty() *
              (currentProduct.hasSale()
                ? currentProduct.getSalePrice()
                : currentProduct.getPrice())}{" "}
            AMD
          </p>
          {currentProduct.hasSale() && (
            <span className={style.productOldPrice}>
              {currentProduct.getPrice()}AMD
            </span>
          )}
        </div>
        <div className={`${style.productInfoAvailability}`}>
          <span>On Demand</span>
        </div>
      </div>

      <div className={style.productTitle}>
        <h2>
          {currentProduct.getTitle()}
          <span>
            ({(currentProduct.getWeight() * currentProduct.getQty()) / 1000} kg)
          </span>
        </h2>
      </div>

      <div className={`flex ${style.productAction}`}>
        <div className={`${style.productActionInput} flex`}>
          <button
            onClick={decrement}
            className={`${style.productActionInputSubstract}`}
          >
            <ArrowSVG />
          </button>
          <input
            type="number"
            name=""
            value={currentProduct.getQty()}
            id=""
            onChange={handleChange}
          />
          <button
            onClick={increment}
            className={`${style.productActionInputAdd}`}
          >
            <ArrowSVG />
          </button>
        </div>
        <div>
          <button className={`${style.productActionOrder}`} onClick={orderItem}>
            Order
          </button>
        </div>
      </div>
    </section>
  );
}
