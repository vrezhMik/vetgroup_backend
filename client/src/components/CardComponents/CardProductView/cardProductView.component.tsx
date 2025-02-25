import { CardProductViewPropsInterface } from "@/utils/Interfaces";
import ImageComponent from "../../Elements/Image/image.component";
import style from "./cardProductView.module.scss";
import { useCard } from "@/store/store";

export default function CardProductView() {
  const { currentItem } = useCard();

  return (
    <div className={`row flex ${style.cardProduct}`}>
      <div className={`${style.cardProductImage}`}>
        <ImageComponent alt={"image"} url={currentItem?.getImage() || "/"} />
      </div>
      <div className={`${style.cardProductInfo}`}>
        <div className={`${style.cardProductInfoTitle}`}>
          {currentItem?.getTitle()}
          <span>
            {currentItem?.getWeight() && currentItem?.getWeight() / 1000} kg
          </span>
        </div>
        <div className={`${style.cardProductInfoPrice}`}>
          <p>{currentItem?.getPrice()} AMD</p>
        </div>
        <div className={`${style.cardProductInfoDescription}`}>
          {currentItem?.getDescription()}
        </div>
      </div>
    </div>
  );
}
