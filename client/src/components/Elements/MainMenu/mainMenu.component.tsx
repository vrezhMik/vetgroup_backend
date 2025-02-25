"use client";
import { usePathname } from "next/navigation";

import style from "./mainMenu.module.scss";
import { useState } from "react";
import Link from "next/link";
import LogoSVG from "../Icons/LogoSVG";
import { useFilters } from "@/store/store";

const data = [
  {
    name: "Category",
    data: ["Sub 0", "Sub 01", "Sub 02", "Sub 03"],
  },
  {
    name: "Category1",
    data: ["Sub 1", "Sub 11", "Sub 12", "Sub 13"],
  },
  {
    name: "Category2",
    data: ["Sub 2", "Sub 21", "Sub 22", "Sub 23"],
  },
  {
    name: "Category3",
    data: ["Sub 3", "Sub 31", "Sub 32", "Sub 33"],
  },
];

export default function MainMenu() {
  const pathname = usePathname();

  const [currentSubMenu, setCurrentSubMenu] = useState<number | null>(null);
  const { addFilter, removeFilter, filters } = useFilters();

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    const value = event.target.value;
    const id = event.target.id;
    if (checked) addFilter({ id, value });
    else removeFilter(id);
  };

  const toggleSubMenu = (id: number) => {
    setCurrentSubMenu((prev) => (prev === id ? null : id));
  };

  const isChecked = (id: string) => {
    return filters.some((filter) => filter.id === id);
  };

  return (
    <div className={style.mainMenu}>
      <div className={style.mainMenuLogo}>
        <Link href={"/"}>
          <LogoSVG />
        </Link>
      </div>
      {pathname !== "/user" && (
        <nav>
          <ul>
            {data.map((category, index) => (
              <li key={index}>
                <button
                  onClick={() => toggleSubMenu(index)}
                  className={`${index === currentSubMenu ? style.active : ""}`}
                >
                  {category.name}
                </button>
                {index == currentSubMenu && (
                  <ol className={style.subMenu}>
                    {category.data.map((subCategory, subIndex) => {
                      const checkboxId = `cat_${index}_${subIndex}`;
                      return (
                        <div key={subIndex} className="flex">
                          <input
                            type="checkbox"
                            name={`cat_${subIndex}`}
                            value={subCategory}
                            id={checkboxId}
                            checked={isChecked(checkboxId)}
                            onChange={handleCheck}
                          />
                          <label htmlFor={checkboxId}>{subCategory}</label>
                        </div>
                      );
                    })}
                  </ol>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
