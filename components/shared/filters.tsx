import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui/input";
import { RangeSlider } from "./range-slider";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={5000} />
          <Input type="number" placeholder="5000" min={100} max={5000} />
        </div>
      </div>

      <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />

      <div className="mt-5">
        <p className="font-bold ">Ингредиенты:</p>
        <div className="flex flex-col gap-4 mt-5">
          <FilterCheckbox text="Сырный соус" value="3" />
          <FilterCheckbox text="Моцарела" value="4" />
          <FilterCheckbox text="Чеснок" value="5" />
          <FilterCheckbox text="Солённые огурчики" value="6" />
          <FilterCheckbox text="Красный лук" value="7" />
          <FilterCheckbox text="Томаты" value="8" />
        </div>
      </div>

      <div className="mt-5">
        <p className="font-bold ">Тип теста:</p>
        <div className="flex flex-col gap-4 mt-5">
          <FilterCheckbox text="Традиционное" value="9" />
          <FilterCheckbox text="Тонкое" value="10" />
        </div>
      </div>
    </div>
  );
};
