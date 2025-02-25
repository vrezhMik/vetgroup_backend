"use client";

import Search from "../Search/search.component";
import style from "./searchbar.module.scss";
import { useFilters } from "@/store/store";
export default function SearchBar() {
  const { filters, removeFilter } = useFilters();

  return (
    <div className={`${style.searchBar} flex`}>
      <Search />
      <div className={`${style.searchBarFilters}`}>
        {filters.map((filter, key) => (
          <div key={key} className={`${style.searchBarFiltersFilter}`}>
            <span>{filter.value}</span>
            <button onClick={() => removeFilter(filter.id)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}
