"use client";

import { useCurrentUser } from "@/store/store";
import "./userInfo.scss";
import { useState } from "react";
import ArrowSVG from "../Icons/ArrowSVG";

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
        <p className="list_button">
          <button
            onClick={() => setListStatus(!listStatus)}
            className={listStatus ? "open" : ""}
          >
            <ArrowSVG />
          </button>
          <span>History</span>
        </p>
        {listStatus && (
          <div className="list">
            <ul>
              {currentUser.history?.map((element, key) => (
                <li key={key} className="history_element">
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
        <p className="list_button">
          <button
            onClick={() => setSaleStatus(!saleStatus)}
            className={saleStatus ? "open" : ""}
          >
            <ArrowSVG />
          </button>
          <span>Sale</span>
        </p>
        {saleStatus && (
          <div className="list">
            <ul>
              {allProducts.map((element, key) => (
                <li key={key}>
                  <input type="checkbox" />
                  <span>{element.name}</span>
                  <input type="number" max={100} />%
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="row">
        <p>Change Password</p>
        <div className="flex password_row">
          <input type="password" name="" id="" />
          <input type="password" name="" id="" />
          <button>Save</button>
        </div>
      </div>
      <div className="save_button">
        <button>Save</button>
      </div>
    </div>
  );
}
