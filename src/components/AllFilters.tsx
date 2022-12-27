import { Dispatch, SetStateAction } from "react";
import { UseFormRegister } from "react-hook-form";

import XMark from "../Icons/XMark";
import { FormValues } from "../types/property";
import AmbiencesFilter from "./UI/AmbiencesFilter";
import PriceInputs from "./UI/PriceInputs";

type Props = {
  setShowAllFilters: Dispatch<SetStateAction<boolean>>;
  register: UseFormRegister<FormValues>;
};

export default function AllFilters({ setShowAllFilters, register }: Props) {
  return (
    <aside className="fixed top-0 right-0 z-30 h-screen w-1/2 bg-gray-100 py-2 px-6 shadow-lg">
      <div className="flex justify-end pb-4">
        <button type="button" onClick={() => setShowAllFilters(false)}>
          <XMark black size={22} />
        </button>
      </div>
      <form className="flex flex-col gap-4 text-gray-800">
        <div>
          <select
            {...register("operation")}
            className="cursor-pointer rounded-md border border-gray-500  p-2 hover:border-purple-900"
          >
            <option value="rent">Alquiler</option>
            <option value="sell">Venta</option>
          </select>
        </div>

        <div>
          <label>Precio:</label>
          <PriceInputs register={register} price />
        </div>

        <div>
          <select
            {...register("type")}
            className=" hidden cursor-pointer rounded-md border border-gray-500  p-2 hover:border-purple-900 md:block "
          >
            <option value="all">Todos</option>
            <option value="clby23yd40000e7ikw3evgekx">Casas</option>
            <option value="clbz7mo6n0003e7kowfcl1c3t">Departamentos</option>
          </select>
        </div>

        <div>
          <AmbiencesFilter register={register} ambiences />
          <AmbiencesFilter register={register} />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-4">
            <input type="checkbox" {...register("petsAllowed")} />
            <label>Mascotas permitidas</label>
          </div>

          <div className="flex gap-4">
            <input type="checkbox" {...register("parking")} />
            <label>Estacionamiento</label>
          </div>

          <div className="flex gap-4">
            <input type="checkbox" {...register("airConditioning")} />
            <label>Aire Acondicionado</label>
          </div>
        </div>

        <div>
          <label>Superficie:</label>
          <PriceInputs register={register} />
        </div>
      </form>
    </aside>
  );
}
