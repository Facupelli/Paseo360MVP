import Image from "next/image";
import { useRouter } from "next/router";
import { Property } from "../types/property";
import { formatPrice } from "../utils/property";

type Props = {
  property: Property;
};

export default function PropertyCard({ property }: Props) {
  const router = useRouter();

  return (
    <article
      className="cursor-pointer rounded-bl rounded-br bg-slate-700 hover:shadow-md"
      onClick={() => router.push(`/property/${property.id}`)}
    >
      <div className="relative h-52 w-full bg-slate-50 ">
        <Image
          src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt={property.address}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      {/* <p>{property.type.name}</p> */}
      <div className="p-2">
        <div className="flex items-baseline gap-x-2 pt-2">
          <p className="text-xs font-semibold">
            {property.operation === "rent" ? "Alquiler" : "Venta"}
          </p>
          <p className="ml-auto text-lg font-semibold">
            {formatPrice(property.price)}
          </p>
        </div>
        <div className="flex gap-x-2 text-slate-400">
          <p>amb: {property.ambiences}</p>
          <p>baths: {property.bathrooms}</p>
        </div>
        <p>{property.address}</p>
      </div>
    </article>
  );
}
