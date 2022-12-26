import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { getLeftDivPosition, getTopDivPosition } from "../utils/filters";

import Flyout from "./UI/Flyout";
import FilterButton from "./UI/FilterButton";

type FormValues = {
  operation: string;
  minPrice: string;
  maxPrice: string;
  type: string;
  ambiences: string;
  bathrooms: string;
};

export default function PropertyFilters() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  const priceDivRef = useRef<HTMLDivElement>(null);
  const ambiencesDivRef = useRef<HTMLDivElement>(null);
  const bathsDivRef = useRef<HTMLDivElement>(null);

  const [showPriceFilter, setShowPriceFilter] = useState<boolean>(false);
  const [showAmbiencesFilter, setShowAmbiencesFilter] =
    useState<boolean>(false);

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <section className="fixed z-20 w-full bg-gray-800">
      <form
        onSubmit={handleSubmit(onSubmit)}
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
          />
        </div>
        {showPriceFilter && priceDivRef.current && (
          <Flyout
            top={getTopDivPosition(priceDivRef.current)}
            left={getLeftDivPosition(priceDivRef.current)}
          >
            <div className="flex gap-2">
              <input
                type="text"
                {...register("minPrice")}
                placeholder="mínimo"
              />
              <input
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
          className="visible cursor-pointer rounded-md border border-gray-500 bg-gray-800 p-2 hover:border-purple-900 sm:max-md:hidden"
        >
          <option value="todos">todos</option>
          <option value="Casa">Casa</option>
          <option value="Departamento">Departamento</option>
        </select>

        <div ref={ambiencesDivRef} className="visible sm:max-lg:hidden ">
          <FilterButton
            color="gray"
            handleClick={() => setShowAmbiencesFilter(true)}
            text="Ambientes / Baños"
          />
        </div>
        {showAmbiencesFilter && ambiencesDivRef.current && (
          <Flyout
            top={getTopDivPosition(ambiencesDivRef.current)}
            left={getLeftDivPosition(ambiencesDivRef.current)}
          >
            <fieldset className="align-center flex flex-wrap text-gray-800">
              <legend>Ambientes:</legend>

              <div className="flex align-middle">
                <input
                  className="peer hidden"
                  id="any"
                  type="checkbox"
                  value="any"
                  {...register("ambiences")}
                />
                <label
                  className="w-10 cursor-pointer border border-gray-500 p-2 text-center peer-checked:bg-gray-700 peer-checked:font-semibold peer-checked:text-white"
                  htmlFor="any"
                >
                  any
                </label>
              </div>

              <div className="flex align-middle">
                <input
                  className="peer hidden"
                  id="1"
                  type="checkbox"
                  value={1}
                  {...register("ambiences")}
                />
                <label
                  className="w-10 cursor-pointer border border-gray-500 p-2 text-center peer-checked:bg-gray-700 peer-checked:font-semibold peer-checked:text-white"
                  htmlFor="1"
                >
                  1
                </label>
              </div>

              <div className="flex align-middle">
                <input
                  className="peer hidden"
                  id="2"
                  type="checkbox"
                  value={2}
                  {...register("ambiences")}
                />
                <label
                  className="w-10 cursor-pointer border border-gray-500 p-2 text-center peer-checked:bg-gray-700 peer-checked:font-semibold peer-checked:text-white"
                  htmlFor="2"
                >
                  2
                </label>
              </div>

              <div className="flex align-middle">
                <input
                  className="peer hidden"
                  id="3"
                  type="checkbox"
                  value={3}
                  {...register("ambiences")}
                />
                <label
                  className="w-10 cursor-pointer border border-gray-500 p-2 text-center peer-checked:bg-gray-700 peer-checked:font-semibold peer-checked:text-white"
                  htmlFor="3"
                >
                  3
                </label>
              </div>

              <div className="flex align-middle">
                <input
                  className="peer hidden"
                  id="4"
                  type="checkbox"
                  value={4}
                  {...register("ambiences")}
                />
                <label
                  className="w-10 cursor-pointer border border-gray-500 p-2 text-center peer-checked:bg-gray-700 peer-checked:font-semibold peer-checked:text-white"
                  htmlFor="4"
                >
                  4
                </label>
              </div>

              <div className="flex align-middle">
                <input
                  className="peer hidden"
                  id="+5"
                  type="checkbox"
                  value="+5"
                  {...register("ambiences")}
                />
                <label
                  className="w-10 cursor-pointer border border-gray-500 p-2 text-center peer-checked:bg-gray-700 peer-checked:font-semibold peer-checked:text-white"
                  htmlFor="+5"
                >
                  +5
                </label>
              </div>
            </fieldset>

            <fieldset className="flex flex-wrap items-center text-gray-800">
              <legend>Baños:</legend>
              <div className="flex align-middle">
                <input
                  className="peer hidden"
                  id="any"
                  type="checkbox"
                  value="any"
                  {...register("bathrooms")}
                />
                <label
                  className="w-10 cursor-pointer border border-gray-500 p-2 text-center peer-checked:bg-gray-700 peer-checked:font-semibold peer-checked:text-white"
                  htmlFor="any"
                >
                  any
                </label>
              </div>

              <div className="flex align-middle">
                <input
                  className="peer hidden"
                  id="1"
                  type="checkbox"
                  value={1}
                  {...register("bathrooms")}
                />
                <label
                  className="w-10 cursor-pointer border border-gray-500 p-2 text-center peer-checked:bg-gray-700 peer-checked:font-semibold peer-checked:text-white"
                  htmlFor="1"
                >
                  1
                </label>
              </div>

              <div className="flex align-middle">
                <input
                  className="peer hidden"
                  id="2"
                  type="checkbox"
                  value={2}
                  {...register("bathrooms")}
                />
                <label
                  className="w-10 cursor-pointer border border-gray-500 p-2 text-center peer-checked:bg-gray-700 peer-checked:font-semibold peer-checked:text-white"
                  htmlFor="2"
                >
                  2
                </label>
              </div>

              <div className="flex align-middle">
                <input
                  className="peer hidden"
                  id="3"
                  type="checkbox"
                  value={3}
                  {...register("bathrooms")}
                />
                <label
                  className="w-10 cursor-pointer border border-gray-500 p-2 text-center peer-checked:bg-gray-700 peer-checked:font-semibold peer-checked:text-white"
                  htmlFor="3"
                >
                  3
                </label>
              </div>

              <div className="flex align-middle">
                <input
                  className="peer hidden"
                  id="+4"
                  type="checkbox"
                  value="+4"
                  {...register("bathrooms")}
                />
                <label
                  className="w-10 cursor-pointer border border-gray-500 p-2 text-center peer-checked:bg-gray-700 peer-checked:font-semibold peer-checked:text-white"
                  htmlFor="+4"
                >
                  +4
                </label>
              </div>
            </fieldset>

            <FilterButton
              handleClick={() => setShowAmbiencesFilter(false)}
              text="listo"
              color="white"
            />
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
