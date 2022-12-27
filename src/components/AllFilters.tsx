import { Dispatch, SetStateAction } from "react";
import { UseFormRegister, UseFormReset } from "react-hook-form";

import { FormValues } from "../types/filters";
import { filterDefaultValues } from "../utils/filters";

import XMark from "../Icons/XMark";
import AmbiencesFilter from "./UI/AmbiencesFilter";
import PriceInputs from "./UI/PriceInputs";

type Props = {
  setShowAllFilters: Dispatch<SetStateAction<boolean>>;
  register: UseFormRegister<FormValues>;
  reset: UseFormReset<FormValues>;
};

export default function AllFilters({
  setShowAllFilters,
  register,
  reset,
}: Props) {
  return (
    <aside className="fixed top-0 right-0 z-30 h-screen w-2/5 bg-gray-100 shadow-lg">
      <div className="flex justify-end pt-6 pr-6">
        <button type="button" onClick={() => setShowAllFilters(false)}>
          <XMark black size={22} />
        </button>
      </div>
      <form className="flex flex-col text-gray-800">
        <div className="border-b border-gray-300 ">
          <div className="p-6">
            <select
              {...register("operation")}
              className="cursor-pointer rounded-md border border-gray-500  p-2 hover:border-purple-900"
            >
              <option value="rent">Alquiler</option>
              <option value="sell">Venta</option>
            </select>
          </div>
        </div>

        <div className="border-b border-gray-300 ">
          <div className="p-6">
            <label>Precio:</label>
            <PriceInputs register={register} price />
          </div>
        </div>

        <div className="border-b border-gray-300 ">
          <div className="p-6">
            <select
              {...register("type")}
              className=" hidden cursor-pointer rounded-md border border-gray-500  p-2 hover:border-purple-900 md:block "
            >
              <option value="all">Todos</option>
              <option value="clby23yd40000e7ikw3evgekx">Casas</option>
              <option value="clbz7mo6n0003e7kowfcl1c3t">Departamentos</option>
            </select>
          </div>
        </div>

        <div className="border-b border-gray-300 ">
          <div className="p-6">
            <AmbiencesFilter register={register} ambiences />
            <AmbiencesFilter register={register} />
          </div>
        </div>

        <div className="flex flex-col gap-2 border-b border-gray-300">
          <div className="p-6">
            <div className="flex gap-4">
              <input type="checkbox" {...register("petsAllowed")} id="pets" />
              <label htmlFor="pets">Mascotas permitidas</label>
            </div>

            <div className="flex gap-4">
              <input type="checkbox" {...register("parking")} id="parking" />
              <label htmlFor="parking">Estacionamiento</label>
            </div>

            <div className="flex gap-4">
              <input
                type="checkbox"
                {...register("airConditioning")}
                id="a/c"
              />
              <label htmlFor="a/c">Aire Acondicionado</label>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-300 ">
          <div className="p-6">
            <label>Superficie:</label>
            <PriceInputs register={register} />
          </div>
        </div>

        <div className="fixed bottom-0 z-40 flex w-2/5 justify-between border-t border-gray-300 bg-gray-100 p-6">
          <button
            className="rounded-sm border border-red-600 p-2 font-semibold text-red-600"
            type="button"
            onClick={() => reset(filterDefaultValues)}
          >
            Limpiar filtros
          </button>
          <button
            className="rounded bg-purple-700 py-2 px-6 font-semibold text-gray-50"
            type="button"
            onClick={() => setShowAllFilters(false)}
          >
            Ver hogares
          </button>
        </div>
      </form>
    </aside>
  );
}
