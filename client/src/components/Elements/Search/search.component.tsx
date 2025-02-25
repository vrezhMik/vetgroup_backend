import SearchSVG from "../Icons/SearchSVG";
import style from "./search.module.scss";

export default function Search() {
  return (
    <div className={`${style.search} flex`}>
      <input type="text" className={style.searchInput} placeholder="Search" />
      {/* <button className={style.searchButton}>
        <SearchSVG />
      </button> */}
    </div>
  );
}
