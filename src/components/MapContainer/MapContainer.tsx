import { Dispatch, SetStateAction } from "react";
import { Property } from "../../types/property";

import Map from "./Map";

type Props = {
  properties: Property[] | undefined;
  setActiveProperty: Dispatch<SetStateAction<string>>;
  activeProperty: string;
};

export default function MapContainer({
  properties,
  setActiveProperty,
  activeProperty,
}: Props) {
  return (
    <section className="hidden bg-slate-300 md:fixed md:block md:h-[calc(100vh_-_80px)] md:w-2/5">
      <Map
        properties={properties}
        setActiveProperty={setActiveProperty}
        activeProperty={activeProperty}
        zoom={10}
        bounds
        center={[-31.5374719, -68.5216905]}
        iconSize={25}
      />
    </section>
  );
}
