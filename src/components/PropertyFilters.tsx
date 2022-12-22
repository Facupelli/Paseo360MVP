import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Flyout from "./Flyout";

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

  useEffect(() => {
    console.log("BUTTON REF", priceDivRef);
    console.log(priceDivRef.current?.getBoundingClientRect());
  }, [priceDivRef]);

  return (
    <section className="pb-4 text-gray-900">
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4 py-4">
        <select {...register("operation")}>
          <option value="rent">Alquiler</option>
          <option value="sell">Venta</option>
        </select>

        <div ref={priceDivRef}>
          <button type="button" onClick={() => setShowPriceFilter(true)}>
            Precio
          </button>
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
              <button type="button" onClick={() => setShowPriceFilter(false)}>
                listo
              </button>
            </div>
          </Flyout>
        )}

        <select {...register("type")}>
          <option value="Casa">Casa</option>
          <option value="Departamento">Departamento</option>
        </select>

        <div ref={ambiencesDivRef}>
          <button type="button" onClick={() => setShowAmbiencesFilter(true)}>
            Ambientes
          </button>
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
              <legend>Habitaciones</legend>

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

              <button
                type="button"
                onClick={() => setShowAmbiencesFilter(false)}
              >
                listo
              </button>
            </fieldset>
          </Flyout>
        )}

        <div ref={bathsDivRef}>
          <button type="button" onClick={() => setShowBathsFilter(true)}>
            Baños
          </button>
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
              <legend>Baños</legend>

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

              <button type="button" onClick={() => setShowBathsFilter(false)}>
                listo
              </button>
            </fieldset>
          </Flyout>
        )}
        <button type="button">MÁS FILTROS</button>
      </form>
    </section>
  );
}
