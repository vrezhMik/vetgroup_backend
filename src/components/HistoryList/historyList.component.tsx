import style from "./historyList.module.scss";
import { useCardState } from "@/store/store";
// import { CardView } from "@/utils/Types";

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
  const { setCardState } = useCardState();
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
            <button onClick={() => setCardState(true)}>Full Info</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoryList;
