import { UseFormRegister } from "react-hook-form";
import { FormValues } from "../../types/property";

type Props = {
  register: UseFormRegister<FormValues>;
};

export default function PriceInputs({ register }: Props) {
  return (
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
    </div>
  );
}
