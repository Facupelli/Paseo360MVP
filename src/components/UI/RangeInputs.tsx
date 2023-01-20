import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { FormValues } from "../../types/filters";

type Props = {
  register?: UseFormRegister<FormValues>;
  setValue?: UseFormSetValue<FormValues>;
  price?: boolean;
};

export default function RangeInputs({ register, setValue, price }: Props) {
  if (register) {
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

  if (setValue) {
    return (
      <div className="flex gap-2">
        <input
          className="rounded-sm border border-gray-800 p-2 text-gray-800"
          type="text"
          onChange={(e) =>
            setValue(price ? "minPrice" : "minSurface", e.target.value)
          }
          placeholder="mínimo"
        />
        <input
          className="rounded-sm border border-gray-800 p-2 text-gray-800"
          type="text"
          onChange={(e) =>
            setValue(price ? "maxPrice" : "maxSurface", e.target.value)
          }
          placeholder="máximo"
        />
      </div>
    );
  }

  return <div></div>;
}
