import { Property } from "../types/property";
import { formatPrice } from "../utils/property";

type Props = {
  property: Property;
};

export default function PropertyCard({ property }: Props) {
  return (
    <article>
      <p>{property.type.name}</p>
      <p>{formatPrice(property.price)}</p>
      <p>{property.location}</p>
      <p>{property.ambiences}</p>
      <p>{property.bathrooms}</p>
    </article>
  );
}
