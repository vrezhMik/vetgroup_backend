import style from "./historyList.module.scss";
import { useCardState, useCurrentUser } from "@/store/store";

const user = [
  {
    id: 0,
    name: "Full Name",
    company: "Company Name",
    phone: "00000000000",
    saledItems: [],
    history: [
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
    ],
  },
  {
    id: 1,
    name: "Full Name",
    company: "Company Name",
    phone: "00000000000",
    saledItems: [],
    history: [],
  },
  {
    id: 2,
    name: "Full Name",
    company: "Company Name",
    phone: "00000000000",
    saledItems: [],
    history: [],
  },
  {
    id: 3,
    name: "Full Name",
    company: "Company Name",
    phone: "00000000000",
    saledItems: [],
    history: [],
  },
];

function HistoryList() {
  const { setCardState } = useCardState();
  const { setCurrentUser } = useCurrentUser();

  const handleClick = (el) => {
    setCardState(true);
    setCurrentUser(el);
  };
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
            <button onClick={() => handleClick(element)}>Full Info</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoryList;
