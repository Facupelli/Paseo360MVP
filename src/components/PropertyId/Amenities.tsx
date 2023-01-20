import { Amenity } from "../../types/property";

type Props = {
  amenities?: Amenity[];
};

export default function Amenities({ amenities }: Props) {
  return (
    <>
      <ul className="grid list-inside list-disc grid-cols-3">
        {amenities && amenities?.length > 0 ? (
          amenities.map((amenity) => (
            <li className="basis-1/3 text-gray-300" key={amenity.id}>
              {amenity.name}
            </li>
          ))
        ) : (
          <div>-</div>
        )}
      </ul>
    </>
  );
}
