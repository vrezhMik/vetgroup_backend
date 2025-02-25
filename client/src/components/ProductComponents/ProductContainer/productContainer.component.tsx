"use client";
import style from "./productContainer.module.scss";

import { useEffect } from "react";
import { useCart, useCard, useCardView } from "@/store/store";

import Product from "../Product/product.component";
import SearchBar from "@/components/Elements/SearchBar/searchBar.component";
import CartSVG from "@/components/Elements/Icons/CartSVG";
import { CardView } from "@/utils/Types";

const products = [
  {
    id: "01",
    name: "Dog Food",
    weight: 800,
    price: 1200,
    image: "http://127.0.0.1:3000/food3.png",
    description:
      "Give your furry friend the nutrition they deserve with our Premium Grain-Free Dog Food. Made with real chicken as the first ingredient, this formula provides high-quality protein to support strong muscles. Packed with wholesome vegetables like sweet potatoes and peas, it offers essential vitamins and minerals for overall health. Free from artificial colors, flavors, and preservatives, it's a natural and delicious choice for dogs of all breeds and sizes.",
    qty: 1,
    salePrcentage: 0,
    saledPrice: 0,
    totalPrice: 0,
  },
  {
    id: "02",
    name: "Dog Food",
    weight: 800,
    price: 1200,
    image: "http://127.0.0.1:3000/food1.jpeg",
    description:
      "Give your furry friend the nutrition they deserve with our Premium Grain-Free Dog Food. Made with real chicken as the first ingredient, this formula provides high-quality protein to support strong muscles. Packed with wholesome vegetables like sweet potatoes and peas, it offers essential vitamins and minerals for overall health. Free from artificial colors, flavors, and preservatives, it's a natural and delicious choice for dogs of all breeds and sizes.",
    qty: 1,
    salePrcentage: 10,
    saledPrice: 0,
    totalPrice: 0,
  },
  {
    id: "03",
    name: "Dog Food",
    weight: 800,
    price: 1200,
    image: "http://127.0.0.1:3000/food2.jpg",
    description:
      "Give your furry friend the nutrition they deserve with our Premium Grain-Free Dog Food. Made with real chicken as the first ingredient, this formula provides high-quality protein to support strong muscles. Packed with wholesome vegetables like sweet potatoes and peas, it offers essential vitamins and minerals for overall health. Free from artificial colors, flavors, and preservatives, it's a natural and delicious choice for dogs of all breeds and sizes.",
    qty: 1,
    salePrcentage: 10,
    saledPrice: 0,
    totalPrice: 0,
  },
  {
    id: "04",
    name: "Dog Food",
    weight: 800,
    price: 1200,
    image: "http://127.0.0.1:3000/food2.jpg",
    description:
      "Give your furry friend the nutrition they deserve with our Premium Grain-Free Dog Food. Made with real chicken as the first ingredient, this formula provides high-quality protein to support strong muscles. Packed with wholesome vegetables like sweet potatoes and peas, it offers essential vitamins and minerals for overall health. Free from artificial colors, flavors, and preservatives, it's a natural and delicious choice for dogs of all breeds and sizes.",
    qty: 1,
    salePrcentage: 10,
    saledPrice: 0,
    totalPrice: 0,
  },
  {
    id: "05",
    name: "Dog Food",
    weight: 800,
    price: 1200,
    image: "http://127.0.0.1:3000/food3.png",
    description:
      "Give your furry friend the nutrition they deserve with our Premium Grain-Free Dog Food. Made with real chicken as the first ingredient, this formula provides high-quality protein to support strong muscles. Packed with wholesome vegetables like sweet potatoes and peas, it offers essential vitamins and minerals for overall health. Free from artificial colors, flavors, and preservatives, it's a natural and delicious choice for dogs of all breeds and sizes.",
    qty: 1,
    salePrcentage: 10,
    saledPrice: 0,
    totalPrice: 0,
  },
  {
    id: "05",
    name: "Dog Food",
    weight: 800,
    price: 1200,
    image: "http://127.0.0.1:3000/food1.jpeg",
    description:
      "Give your furry friend the nutrition they deserve with our Premium Grain-Free Dog Food. Made with real chicken as the first ingredient, this formula provides high-quality protein to support strong muscles. Packed with wholesome vegetables like sweet potatoes and peas, it offers essential vitamins and minerals for overall health. Free from artificial colors, flavors, and preservatives, it's a natural and delicious choice for dogs of all breeds and sizes.",
    qty: 1,
    salePrcentage: 10,
    saledPrice: 0,
    totalPrice: 0,
  },
];

export default function ProductContainer() {
  const { getItemCount } = useCart();
  const { cardState, setCardState } = useCard();
  const { cardViewState, setCardView } = useCardView();

  useEffect(
    () => () => {
      const body = document.getElementsByTagName("body")[0];
      const overflowStatus = cardState ? "scroll" : "hidden";
      body.style.overflow = overflowStatus;
    },
    [cardState]
  );

  const showCart = () => {
    setCardState(true);
    setCardView(CardView.List);
  };

  return (
    <div className={`${style.mainContainer}`}>
      <div className={`${style.mainContainerSearchBar} flex`}>
        <SearchBar />
        <div className={`${style.mainContainerSearchBarCart}`}>
          <button
            className={`${style.mainContainerSearchBarCartButton}`}
            onClick={showCart}
          >
            {getItemCount() > 0 && (
              <div
                className={`${style.mainContainerSearchBarCartButtonItems}`}
              ></div>
            )}
            <CartSVG />
          </button>
        </div>
      </div>
      <div className={`${style.mainContainerProductContainer} flex`}>
        {products.map((element, key) => (
          <Product key={key} data={element} />
        ))}
      </div>
    </div>
  );
}
