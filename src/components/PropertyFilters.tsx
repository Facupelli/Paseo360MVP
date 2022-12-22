import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
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
  const [showBathsFilter, setShowBathsFilter] = useState<boolean>(false);

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <section className="pb-4 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-4 py-4"
      >
        <select
          {...register("operation")}
          className="rounded-md border border-gray-500 bg-gray-800 p-2"
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
            top={
              priceDivRef.current.getBoundingClientRect().top +
              priceDivRef.current.getBoundingClientRect().height
            }
            left={priceDivRef.current.getBoundingClientRect().left}
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
          className="rounded-md border border-gray-500 bg-gray-800 p-2"
        >
          <option value="Casa">Casa</option>
          <option value="Departamento">Departamento</option>
        </select>

        <div ref={ambiencesDivRef}>
          <FilterButton
            color="gray"
            handleClick={() => setShowAmbiencesFilter(true)}
            text="Ambientes"
          />
        </div>
        {showAmbiencesFilter && ambiencesDivRef.current && (
          <Flyout
            top={
              ambiencesDivRef.current.getBoundingClientRect().top +
              ambiencesDivRef.current.getBoundingClientRect().height
            }
            left={ambiencesDivRef.current.getBoundingClientRect().left}
          >
            <fieldset>
              <label>any</label>
              <input type="checkbox" value="any" />

              <label>1</label>
              <input type="checkbox" value={1} {...register("ambiences")} />

              <label>2</label>
              <input type="checkbox" value={2} {...register("ambiences")} />

              <label>3</label>
              <input type="checkbox" value={3} {...register("ambiences")} />

              <label>4</label>
              <input type="checkbox" value={4} {...register("ambiences")} />

              <label>+5</label>
              <input type="checkbox" value="+5" {...register("ambiences")} />

              <FilterButton
                handleClick={() => setShowAmbiencesFilter(false)}
                text="listo"
                color="white"
              />
            </fieldset>
          </Flyout>
        )}

        <div ref={bathsDivRef}>
          <FilterButton
            color="gray"
            handleClick={() => setShowBathsFilter(true)}
            text="Baños"
          />
        </div>
        {showBathsFilter && bathsDivRef.current && (
          <Flyout
            top={
              bathsDivRef.current.getBoundingClientRect().top +
              bathsDivRef.current.getBoundingClientRect().height
            }
            left={bathsDivRef.current.getBoundingClientRect().left}
          >
            <fieldset>
              <label>any</label>
              <input type="checkbox" value="any" {...register("bathrooms")} />

              <label>1</label>
              <input type="checkbox" value={1} {...register("bathrooms")} />

              <label>2</label>
              <input type="checkbox" value={2} {...register("bathrooms")} />

              <label>3</label>
              <input type="checkbox" value={3} {...register("bathrooms")} />

              <label>+4</label>
              <input type="checkbox" value="+4" {...register("bathrooms")} />

              <FilterButton
                handleClick={() => setShowBathsFilter(false)}
                text="listo"
                color="white"
              />
            </fieldset>
          </Flyout>
        )}
        <FilterButton
          color="gray"
          text="Más filtros"
          handleClick={() => null}
        />
      </form>
    </section>
  );
}
