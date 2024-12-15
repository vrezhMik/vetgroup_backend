"use client";

import { useCurrentUser } from "@/store/store";
import "./userInfo.scss";
import { useState } from "react";

const allProducts = [
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

export default function UserInfo() {
  const [listStatus, setListStatus] = useState(false);
  const [saleStatus, setSaleStatus] = useState(false);
  const { currentUser } = useCurrentUser();
  return (
    <div className="userInfo">
      <div className="row name">
        <p>
          Name:{" "}
          <span>
            {currentUser.name}
            {currentUser.id}
          </span>
        </p>
      </div>
      <div className="row">
        <p>
          Company: <span>{currentUser.company}</span>
        </p>
      </div>
      <div className="row">
        <p>
          Phone: <span>{currentUser.phone}</span>
        </p>
      </div>
      <div className="row">
        <p>
          <button onClick={() => setListStatus(!listStatus)}>{">"}</button>
          History
        </p>
        {listStatus && (
          <div>
            <ul>
              {currentUser.history?.map((element, key) => (
                <li key={key}>
                  <span>{element.name}</span>
                  <span>{element.totalPrice}</span>
                  <span>{element.qty}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="row">
        <p>
          <button onClick={() => setSaleStatus(!saleStatus)}>{">"}</button>
          Sale
        </p>
        {saleStatus && (
          <div>
            <ul>
              {allProducts.map((element, key) => (
                <li key={key}>
                  <span>
                    <input type="checkbox" />
                    {element.name}
                    <input type="number" />%
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="row flex">
        <p>Change Password</p>
        <input type="password" name="" id="" />
        <input type="password" name="" id="" />
        <button>Save</button>
      </div>
      <div>
        <button>Save</button>
      </div>
    </div>
  );
}
