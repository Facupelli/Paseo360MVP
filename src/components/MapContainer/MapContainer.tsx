import { Property } from "../../types/property";

import Map from "./Map";

type Props = {
  properties: Property[] | undefined;
};

export default function MapContainer({ properties }: Props) {
  return (
    <section className="fixed h-screen w-2/5 bg-slate-300">
      <Map properties={properties} />
    </section>
  );
}
