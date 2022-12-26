import { Dispatch, SetStateAction, useRef, useState } from "react";
import {
  SetFieldValue,
  useForm,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

import { getLeftDivPosition, getTopDivPosition } from "../utils/filters";

import Flyout from "./UI/Flyout";
import FilterButton from "./UI/FilterButton";

type FormValues = {
  operation: string;
  minPrice: number | undefined;
  maxPrice: number | undefined;
  type: string;
  ambiences: string[];
  bathrooms: string[];
};

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
};

export default function PropertyFilters({
  register,
  setValue,
  price,
  ambiences,
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
              <input
                className="rounded-sm border border-gray-800 px-2 text-gray-800"
                type="text"
                {...register("minPrice")}
                placeholder="mínimo"
              />
              <input
                className="rounded-sm border border-gray-800 px-2 text-gray-800"
                type="text"
                {...register("maxPrice")}
                placeholder="máximo"
              />
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
            <fieldset className="align-center flex flex-wrap pb-4 text-gray-800">
              <legend className="font-semibold">Ambientes:</legend>

              <div className="flex align-middle">
                <input
                  className="peer hidden"
                  id="Aany"
                  type="checkbox"
                  value="0"
                  {...register("ambiences")}
                />
                <label
                  className="w-10 cursor-pointer border border-gray-500 px-2 py-px text-center  peer-checked:bg-gray-700 peer-checked:font-semibold peer-checked:text-white"
                  htmlFor="Aany"
                >
                  any
                </label>
              </div>

              <div className="flex align-middle">
                <input
                  className="peer hidden"
                  id="A1"
                  type="checkbox"
                  value={1}
                  {...register("ambiences")}
                />
                <label
                  className="w-10 cursor-pointer border border-gray-500 px-2 py-px text-center peer-checked:bg-gray-700 peer-checked:font-semibold peer-checked:text-white"
                  htmlFor="A1"
                >
                  1
                </label>
              </div>

              <div className="flex align-middle">
                <input
                  className="peer hidden"
                  id="A2"
                  type="checkbox"
                  value={2}
                  {...register("ambiences")}
                />
                <label
                  className="w-10 cursor-pointer border border-gray-500 px-2 py-px text-center peer-checked:bg-gray-700 peer-checked:font-semibold peer-checked:text-white"
                  htmlFor="A2"
                >
                  2
                </label>
              </div>

              <div className="flex align-middle">
                <input
                  className="peer hidden"
                  id="A3"
                  type="checkbox"
                  value={3}
                  {...register("ambiences")}
                />
                <label
                  className="w-10 cursor-pointer border border-gray-500 px-2 py-px text-center peer-checked:bg-gray-700 peer-checked:font-semibold peer-checked:text-white"
                  htmlFor="A3"
                >
                  3
                </label>
              </div>

              <div className="flex align-middle">
                <input
                  className="peer hidden"
                  id="A4"
                  type="checkbox"
                  value={4}
                  {...register("ambiences")}
                />
                <label
                  className="w-10 cursor-pointer border border-gray-500 px-2 py-px text-center peer-checked:bg-gray-700 peer-checked:font-semibold peer-checked:text-white"
                  htmlFor="A4"
                >
                  4
                </label>
              </div>

              <div className="flex align-middle">
                <input
                  className="peer hidden"
                  id="A+5"
                  type="checkbox"
                  value="5"
                  {...register("ambiences")}
                />
                <label
                  className="w-10 cursor-pointer border border-gray-500 px-2 py-px text-center peer-checked:bg-gray-700 peer-checked:font-semibold peer-checked:text-white"
                  htmlFor="A+5"
                >
                  +5
                </label>
              </div>
            </fieldset>

            <fieldset className="flex flex-wrap items-center text-gray-800">
              <legend className="font-semibold">Baños:</legend>
              <div className="flex align-middle">
                <input
                  className="peer hidden"
                  id="Bany"
                  type="checkbox"
                  value="0"
                  {...register("bathrooms")}
                />
                <label
                  className="w-10 cursor-pointer border border-gray-500 px-2 py-px text-center peer-checked:bg-gray-700 peer-checked:font-semibold peer-checked:text-white"
                  htmlFor="Bany"
                >
                  any
                </label>
              </div>

              <div className="flex align-middle">
                <input
                  className="peer hidden"
                  id="B1"
                  type="checkbox"
                  value={1}
                  {...register("bathrooms")}
                />
                <label
                  className="w-10 cursor-pointer border border-gray-500 px-2 py-px text-center peer-checked:bg-gray-700 peer-checked:font-semibold peer-checked:text-white"
                  htmlFor="B1"
                >
                  1
                </label>
              </div>

              <div className="flex align-middle">
                <input
                  className="peer hidden"
                  id="B2"
                  type="checkbox"
                  value={2}
                  {...register("bathrooms")}
                />
                <label
                  className="w-10 cursor-pointer border border-gray-500 px-2 py-px text-center peer-checked:bg-gray-700 peer-checked:font-semibold peer-checked:text-white"
                  htmlFor="B2"
                >
                  2
                </label>
              </div>

              <div className="flex align-middle">
                <input
                  className="peer hidden"
                  id="B3"
                  type="checkbox"
                  value={3}
                  {...register("bathrooms")}
                />
                <label
                  className="w-10 cursor-pointer border border-gray-500 px-2 py-px text-center peer-checked:bg-gray-700 peer-checked:font-semibold peer-checked:text-white"
                  htmlFor="B3"
                >
                  3
                </label>
              </div>

              <div className="flex align-middle">
                <input
                  className="peer hidden"
                  id="B4"
                  type="checkbox"
                  value="4"
                  {...register("bathrooms")}
                />
                <label
                  className="w-10 cursor-pointer border border-gray-500 px-2 py-px text-center peer-checked:bg-gray-700 peer-checked:font-semibold peer-checked:text-white"
                  htmlFor="B4"
                >
                  4
                </label>
              </div>

              <div className="flex align-middle">
                <input
                  className="peer hidden"
                  id="B5"
                  type="checkbox"
                  value="5"
                  {...register("bathrooms")}
                />
                <label
                  className="w-10 cursor-pointer border border-gray-500 px-2 py-px text-center peer-checked:bg-gray-700 peer-checked:font-semibold peer-checked:text-white"
                  htmlFor="B5"
                >
                  +5
                </label>
              </div>
            </fieldset>

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
          handleClick={() => null}
        />
      </form>
    </section>
  );
}
