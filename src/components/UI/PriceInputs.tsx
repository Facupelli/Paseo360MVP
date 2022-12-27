import { UseFormRegister } from "react-hook-form";
import { FormValues } from "../../types/filters";

type Props = {
  register: UseFormRegister<FormValues>;
  price?: boolean;
};

export default function PriceInputs({ register, price }: Props) {
  return (
    <div className="flex gap-2">
      <input
        className="rounded-sm border border-gray-800 p-2 text-gray-800"
        type="text"
        {...register(price ? "minPrice" : "minSurface")}
        placeholder="mínimo"
      />
      <input
        className="rounded-sm border border-gray-800 p-2 text-gray-800"
        type="text"
        {...register(price ? "maxPrice" : "maxSurface")}
        placeholder="máximo"
      />
    </div>
  );
}
