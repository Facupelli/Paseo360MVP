import { UseFormRegister } from "react-hook-form";
import { FormValues } from "../../types/filters";

type Props = {
  register: UseFormRegister<FormValues>;
  ambiences?: boolean;
  bedrooms?: boolean;
  bathrooms?: boolean;
};

export default function NumberRangeFilter({
  register,
  ambiences,
  bedrooms,
  bathrooms,
}: Props) {
  return (
    <fieldset className="align-center flex flex-wrap pb-4 text-gray-800">
      <legend className="font-semibold">
        {ambiences ? "Ambientes" : bathrooms ? "Baños" : "Dormitorios"}:
      </legend>

      <div className="flex align-middle">
        <input
          className="peer hidden"
          id={`${ambiences ? "A" : "B"}any`}
          type="checkbox"
          value="0"
          {...register(
            ambiences ? "ambiences" : bathrooms ? "bathrooms" : "bedrooms"
          )}
        />
        <label
          className="w-10 cursor-pointer border border-gray-500 px-2 py-px text-center  peer-checked:bg-gray-700 peer-checked:font-semibold peer-checked:text-white"
          htmlFor={`${ambiences ? "A" : "B"}any`}
        >
          any
        </label>
      </div>

      <div className="flex align-middle">
        <input
          className="peer hidden"
          id={`${ambiences ? "A" : "B"}1`}
          type="checkbox"
          value={1}
          {...register(
            ambiences ? "ambiences" : bathrooms ? "bathrooms" : "bedrooms"
          )}
        />
        <label
          className="w-10 cursor-pointer border border-gray-500 px-2 py-px text-center peer-checked:bg-gray-700 peer-checked:font-semibold peer-checked:text-white"
          htmlFor={`${ambiences ? "A" : "B"}1`}
        >
          1
        </label>
      </div>

      <div className="flex align-middle">
        <input
          className="peer hidden"
          id={`${ambiences ? "A" : "B"}2`}
          type="checkbox"
          value={2}
          {...register(
            ambiences ? "ambiences" : bathrooms ? "bathrooms" : "bedrooms"
          )}
        />
        <label
          className="w-10 cursor-pointer border border-gray-500 px-2 py-px text-center peer-checked:bg-gray-700 peer-checked:font-semibold peer-checked:text-white"
          htmlFor={`${ambiences ? "A" : "B"}2`}
        >
          2
        </label>
      </div>

      <div className="flex align-middle">
        <input
          className="peer hidden"
          id={`${ambiences ? "A" : "B"}3`}
          type="checkbox"
          value={3}
          {...register(
            ambiences ? "ambiences" : bathrooms ? "bathrooms" : "bedrooms"
          )}
        />
        <label
          className="w-10 cursor-pointer border border-gray-500 px-2 py-px text-center peer-checked:bg-gray-700 peer-checked:font-semibold peer-checked:text-white"
          htmlFor={`${ambiences ? "A" : "B"}3`}
        >
          3
        </label>
      </div>

      <div className="flex align-middle">
        <input
          className="peer hidden"
          id={`${ambiences ? "A" : "B"}4`}
          type="checkbox"
          value={4}
          {...register(
            ambiences ? "ambiences" : bathrooms ? "bathrooms" : "bedrooms"
          )}
        />
        <label
          className="w-10 cursor-pointer border border-gray-500 px-2 py-px text-center peer-checked:bg-gray-700 peer-checked:font-semibold peer-checked:text-white"
          htmlFor={`${ambiences ? "A" : "B"}4`}
        >
          4
        </label>
      </div>

      <div className="flex align-middle">
        <input
          className="peer hidden"
          id={`${ambiences ? "A" : "B"}+5`}
          type="checkbox"
          value="5"
          {...register(
            ambiences ? "ambiences" : bathrooms ? "bathrooms" : "bedrooms"
          )}
        />
        <label
          className="w-10 cursor-pointer border border-gray-500 px-2 py-px text-center peer-checked:bg-gray-700 peer-checked:font-semibold peer-checked:text-white"
          htmlFor={`${ambiences ? "A" : "B"}+5`}
        >
          +5
        </label>
      </div>
    </fieldset>
  );
}
