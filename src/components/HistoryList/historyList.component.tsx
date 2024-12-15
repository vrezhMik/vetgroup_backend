import style from "./historyList.module.scss";
// import { useCart, useCard, useCardView } from "@/store/store";
// import { CardView } from "@/utils/Types";

const historyData = [
  {
    orderID: "1234",
    date: "12/09/2024",
    total: "12000",
    products: [
      {
        id: "01",
        name: "Dog Food",
        weight: 800,
        price: 1200,
        image: "http://127.0.0.1:3000/dog.webp",
        description:
          "Give your furry friend the nutrition they deserve with our Premium Grain-Free Dog Food. Made with real chicken as the first ingredient, this formula provides high-quality protein to support strong muscles. Packed with wholesome vegetables like sweet potatoes and peas, it offers essential vitamins and minerals for overall health. Free from artificial colors, flavors, and preservatives, it's a natural and delicious choice for dogs of all breeds and sizes.",
        qty: 10,
        salePrcentage: 0,
        saledPrice: 0,
        totalPrice: 0,
      },
      {
        id: "02",
        name: "Dog Food",
        weight: 800,
        price: 1200,
        image: "http://127.0.0.1:3000/dog.webp",
        description:
          "Give your furry friend the nutrition they deserve with our Premium Grain-Free Dog Food. Made with real chicken as the first ingredient, this formula provides high-quality protein to support strong muscles. Packed with wholesome vegetables like sweet potatoes and peas, it offers essential vitamins and minerals for overall health. Free from artificial colors, flavors, and preservatives, it's a natural and delicious choice for dogs of all breeds and sizes.",
        qty: 3,
        salePrcentage: 20,
        saledPrice: 0,
        totalPrice: 0,
      },
    ],
  },
  {
    orderID: "1234",
    date: "12/09/2024",
    total: "12000",
    products: [],
  },
  {
    orderID: "1234",
    date: "12/09/2024",
    total: "12000",
    products: [],
  },
  {
    orderID: "1234",
    date: "12/09/2024",
    total: "12000",
    products: [],
  },
  {
    orderID: "1234",
    date: "12/09/2024",
    total: "12000",
    products: [],
  },
];

const user = [
  {
    id: 0,
    name: "Full Name",
    company: "Company Name",
    saledItems: [],
    history: [],
  },
  {
    id: 1,
    name: "Full Name",
    company: "Company Name",
    saledItems: [],
    history: [],
  },
  {
    id: 2,
    name: "Full Name",
    company: "Company Name",
    saledItems: [],
    history: [],
  },
  {
    id: 3,
    name: "Full Name",
    company: "Company Name",
    saledItems: [],
    history: [],
  },
];

function HistoryList() {
  return (
    <div className={`${style.history}`}>
      <div className={`${style.historyTitle}`}>
        <h1>Order History:</h1>
      </div>
      <div className={`${style.historyElements}`}>
        {user.map((element, key) => (
          <div key={key} className={`flex ${style.historyElementsElement}`}>
            <p className={style.UserName}>{element.name}</p>
            <p className={style.UserCompany}>{element.company}</p>
            <button>Full Info</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoryList;
