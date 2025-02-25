import { useCart } from "@/store/store";
import TrashSVG from "../../Elements/Icons/TrashSVG";
import style from "./cardListView.module.scss";
import { CardView } from "@/utils/Types";
import { useCardView } from "@/store/store";

export default function CardListView() {
  const { cartItems, removeItem, cartTotal } = useCart();
  const { cardViewState } = useCardView();

  return (
    <div className={`${style.cardList}`}>
      <div className={`${style.cardListRow} flex row`}>
        <div className={` ${style.cardListRowTitle}`}>
          <span>Name</span>
        </div>
        <div className={` ${style.cardListRowTitle}`}>
          <span>Qty</span>
        </div>
        <div className={` ${style.cardListRowTitle}`}>
          <span>Price</span>
        </div>
        <div className={` ${style.cardListRowTitle}`}>
          <span>Total</span>
        </div>
      </div>
      <div className={`${style.cardListData}`}>
        {cartItems?.map((item, key) => (
          <div className={`row flex ${style.cardListDataRow}`} key={key}>
            <div className={`${style.cardListDataRowElement}`}>
              <span>{item.getTitle()}</span>
            </div>

            <div className={`${style.cardListDataRowElement}`}>
              <span>{(item.getWeight() / 1000) * item.getQty()} kg</span>
            </div>
            {item.hasSale() ? (
              <div className={`${style.cardListDataRowElement}`}>
                <span>{item.getSalePrice()} AMD</span>
              </div>
            ) : (
              <div className={`${style.cardListDataRowElement}`}>
                <span>{item.getPrice()} AMD</span>
              </div>
            )}

            <div className={`${style.cardListDataRowElement} flex`}>
              <span>{item.getTotalPrice()} AMD</span>
              {cardViewState != CardView.History && (
                <button onClick={() => removeItem(item.getId())}>
                  <TrashSVG />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      {cardViewState != CardView.History && (
        <div className={`${style.cardListCheckout} flex`}>
          <h1>
            Total: <span>{cartTotal}amd</span>
          </h1>
          <button>Request</button>
        </div>
      )}
    </div>
  );
}
