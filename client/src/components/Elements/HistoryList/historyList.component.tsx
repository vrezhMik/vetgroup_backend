import style from "./historyList.module.scss";
import FileSVG from "../Icons/FileSVG";
import { useCart, useCard, useCardView } from "@/store/store";
import { CardView } from "@/utils/Types";
import { Item } from "@/classes/ItemClass";

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

function HistoryList() {
  const { setCardState } = useCard();
  const { setCardView } = useCardView();
  const { addItem } = useCart();

  const showCart = (data: []) => {
    data.map((el) => {
      const current = new Item(el);
      addItem(current);
    });

    setCardState(true);
    setCardView(CardView.History);
  };
  return (
    <div className={`${style.history}`}>
      <div className={`${style.historyTitle}`}>
        <h1>Order History:</h1>
      </div>
      <div className={`${style.historyElements}`}>
        {historyData.map((element, key) => (
          <div key={key} className={`flex ${style.historyElementsElement}`}>
            <p>#{element.orderID}</p>
            <p>{element.date}</p>
            <p>{element.total} AMD</p>
            <button onClick={() => showCart(element.products)}>
              <FileSVG />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoryList;
