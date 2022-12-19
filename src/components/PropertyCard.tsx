import { Property } from "../types/property";

type Props = {
  property: Property;
};

export default function PropertyCard({ property }: Props) {
  return (
    <article>
      <p>{property.type.name}</p>
      <p>{property.price}</p>
      <p>{property.location}</p>
    </article>
  );
}
