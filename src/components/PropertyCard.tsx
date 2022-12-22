import Image from "next/image";
import { Property } from "../types/property";
import { formatPrice } from "../utils/property";

type Props = {
  property: Property;
};

export default function PropertyCard({ property }: Props) {
  return (
    <article className="cursor-pointer rounded-bl rounded-br bg-slate-700 hover:shadow-md ">
      <div className="h-52 w-full bg-slate-50">
        <Image src="" alt={property.address} />
      </div>
      {/* <p>{property.type.name}</p> */}
      <div className="p-2">
        <div className="flex gap-x-2 pt-2">
          <p className="font-semibold">
            {property.operation === "rent" ? "Alquiler" : "Venta"}
          </p>
          <p className="ml-auto text-lg font-semibold">
            {formatPrice(property.price)}
          </p>
        </div>
        <div className="flex gap-x-2  text-slate-400">
          <p>amb: {property.ambiences}</p>
          <p>baths: {property.bathrooms}</p>
        </div>
        <p>{property.address}</p>
      </div>
    </article>
  );
}
