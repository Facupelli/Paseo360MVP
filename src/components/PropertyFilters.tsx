import { Dispatch, SetStateAction, useRef, useState } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

import { getLeftDivPosition, getTopDivPosition } from "../utils/filters";
import { FormValues } from "../types/filters";

import Flyout from "./UI/Flyout";
import FilterButton from "./UI/FilterButton";
import RangeInputs from "./UI/RangeInputs";

type Props = {
  register: UseFormRegister<FormValues>;
  setValue: UseFormSetValue<FormValues>;
  price: {
    minPrice: string | undefined;
    maxPrice: string | undefined;
  };
  ambiences: {
    ambiences: string[];
    bathrooms: string[];
  };
  setShowAllFIlters: Dispatch<SetStateAction<boolean>>;
};

export default function PropertyFilters({
  register,
  setValue,
  price,
  ambiences,
  setShowAllFIlters,
}: Props) {
  const priceDivRef = useRef<HTMLDivElement>(null);

  const [showPriceFilter, setShowPriceFilter] = useState<boolean>(false);

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <section className="fixed z-20 w-full bg-gray-800">
      <form
        // onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-4 py-4"
      >
        <select
          onChange={(e) => setValue("operation", e.target.value)}
          className="cursor-pointer rounded-md border border-gray-500 bg-gray-800 p-2 hover:border-slate-900"
        >
          <option value="rent">Alquiler</option>
          <option value="sell">Venta</option>
        </select>

        <div ref={priceDivRef}>
          <FilterButton
            color="gray"
            handleClick={() => setShowPriceFilter(true)}
            text="Precio"
            reset={!!price.minPrice || !!price.maxPrice}
            handleReset={() => {
              setValue("minPrice", undefined);
              setValue("maxPrice", undefined);
            }}
          />
        </div>
        {showPriceFilter && priceDivRef.current && (
          <Flyout
            top={getTopDivPosition(priceDivRef.current)}
            left={getLeftDivPosition(priceDivRef.current)}
          >
            <div className="flex gap-2">
              <RangeInputs setValue={setValue} price />
              <FilterButton
                handleClick={() => setShowPriceFilter(false)}
                text="listo"
                color="white"
              />
            </div>
          </Flyout>
        )}

        <select
          onChange={(e) => setValue("type", e.target.value)}
          className=" hidden cursor-pointer rounded-md border border-gray-500 bg-gray-800 p-2 hover:border-slate-900 md:block "
        >
          <option value="all">Todos</option>
          <option value="clby23yd40000e7ikw3evgekx">Casas</option>
          <option value="clbz7mo6n0003e7kowfcl1c3t">Departamentos</option>
        </select>

        <FilterButton
          icon
          color="gray"
          text="M??s filtros"
          handleClick={() => setShowAllFIlters(true)}
        />
      </form>
    </section>
  );
}
