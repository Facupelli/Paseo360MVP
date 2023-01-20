import { Property } from "../../types/property";
import { formatPrice, formatSurface } from "../../utils/property";

type Props = {
  property?: Property;
};

export default function MainInfo({ property }: Props) {
  return (
    <section className="border-b border-gray-400 py-2">
      <h3 className="pb-6 font-semibold">
        {property?.address}{" "}
        <span className="text-base font-normal text-gray-400">
          departamento, San Juan
        </span>
      </h3>
      {/* <p>{property?.operation}</p> */}
      <div className="flex gap-6">
        <p className="self-end text-2xl font-bold">
          {formatPrice(property?.price ?? 0)}
        </p>
        <div className="ml-20 flex flex-col ">
          <p className="text-xl font-semibold"> {property?.ambiences}</p>
          <p className="text-sm text-gray-400">Ambientes</p>
        </div>
        <div>
          <p className="text-xl font-semibold"> {property?.bathrooms}</p>
          <p className="text-sm text-gray-400">Baños</p>
        </div>
        <div>
          <p className="text-xl font-semibold">
            {" "}
            {property?.extraInfo?.bedrooms}
          </p>
          <p className="text-sm text-gray-400">Dormitorios</p>
        </div>
        <div>
          <p className="text-xl font-semibold">
            {formatSurface(property?.extraInfo?.surface ?? 0)} m²
          </p>
          <p className="text-sm text-gray-400">Superficie</p>
        </div>
        {property?.type.name === "Departamento" && (
          <div>
            <p className="text-xl font-semibold">{property.floor}°</p>
            <p className="text-sm text-gray-400">piso</p>
          </div>
        )}
        <div>
          <p className="text-xl font-semibold">
            {property?.extraInfo?.orientation}
          </p>
          <p className="text-sm text-gray-400">Orientación</p>
        </div>
        <div>
          <p className="text-xl font-semibold">
            {property?.extraInfo?.buildYear}
          </p>
          <p className="text-sm text-gray-400">Año construcción</p>
        </div>
      </div>
    </section>
  );
}
