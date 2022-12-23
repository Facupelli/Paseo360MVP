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
    <section className="fixed h-screen w-2/5 bg-slate-300">
      <Map
        properties={properties}
        setActiveProperty={setActiveProperty}
        activeProperty={activeProperty}
      />
    </section>
  );
}
