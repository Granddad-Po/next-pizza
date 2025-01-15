import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "../ui";

interface Props {
  className?: string;
}

const cats = [
  "Пиццы",
  "Комбо",
  "Закуски",
  "Коктейли",
  "Кофе",
  "Напитки",
  "Десерты",
  "Десерты",
];
let activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-2 rounded-2xl", className)}
    >
      {cats.map((cat, index) => (
        <a
          key={index}
          className={cn(
            "flex items-center rounded-2xl font-bold h-11 px-5",
            activeIndex === index &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
        >
          <button>{cat}</button>
        </a>
      ))}
    </div>
  );
};
