import { Dispatch, SetStateAction, useRef, useState } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

import { getLeftDivPosition, getTopDivPosition } from "../utils/filters";
import { FormValues } from "../types/property";

import Flyout from "./UI/Flyout";
import FilterButton from "./UI/FilterButton";
import PriceInputs from "./UI/PriceInputs";
import AmbiencesFilter from "./UI/AmbiencesFilter";

type Props = {
  register: UseFormRegister<FormValues>;
  setValue: UseFormSetValue<FormValues>;
  price: {
    minPrice: number | undefined;
    maxPrice: number | undefined;
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
  const ambiencesDivRef = useRef<HTMLDivElement>(null);

  const [showPriceFilter, setShowPriceFilter] = useState<boolean>(false);
  const [showAmbiencesFilter, setShowAmbiencesFilter] =
    useState<boolean>(false);

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
          {...register("operation")}
          className="cursor-pointer rounded-md border border-gray-500 bg-gray-800 p-2 hover:border-purple-900"
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
              <PriceInputs register={register} />
              <FilterButton
                handleClick={() => setShowPriceFilter(false)}
                text="listo"
                color="white"
              />
            </div>
          </Flyout>
        )}

        <select
          {...register("type")}
          className=" hidden cursor-pointer rounded-md border border-gray-500 bg-gray-800 p-2 hover:border-purple-900 md:block "
        >
          <option value="all">Todos</option>
          <option value="clby23yd40000e7ikw3evgekx">Casas</option>
          <option value="clbz7mo6n0003e7kowfcl1c3t">Departamentos</option>
        </select>

        <div ref={ambiencesDivRef} className="hidden md:block ">
          <FilterButton
            color="gray"
            handleClick={() => setShowAmbiencesFilter(true)}
            text="Ambientes / Baños"
            reset={!!ambiences.ambiences[1] || !!ambiences.bathrooms[1]}
            handleReset={() => {
              setValue("ambiences", ["0"]);
              setValue("bathrooms", ["0"]);
            }}
          />
        </div>
        {showAmbiencesFilter && ambiencesDivRef.current && (
          <Flyout
            top={getTopDivPosition(ambiencesDivRef.current)}
            left={getLeftDivPosition(ambiencesDivRef.current)}
          >
            <AmbiencesFilter register={register} ambiences />
            <AmbiencesFilter register={register} />

            <div className="flex justify-end pt-6">
              <FilterButton
                handleClick={() => setShowAmbiencesFilter(false)}
                text="listo"
                color="white"
              />
            </div>
          </Flyout>
        )}

        <FilterButton
          icon
          color="gray"
          text="Más filtros"
          handleClick={() => setShowAllFIlters(true)}
        />
      </form>
    </section>
  );
}
