import { Amenity } from "../../types/property";

type Props = {
  amenities?: Amenity[];
};

export default function Amenities({ amenities }: Props) {
  return (
    <section>
      <h3 className="pb-2 text-xl font-semibold">Comodidades:</h3>
      <ul className="grid grid-cols-3 ">
        {amenities?.map((amenity) => (
          <li className="basis-1/3 text-gray-300">{amenity.name}</li>
        ))}
      </ul>
    </section>
  );
}
