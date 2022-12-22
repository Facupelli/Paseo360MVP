import { trpc } from "../../utils/trpc";

import Map from "./Map";

export default function MapContainer() {
  const properties = trpc.property.getAllProperties.useQuery();

  return (
    <section className="h-500 w-full bg-slate-300">
      <Map properties={properties.data} />
    </section>
  );
}
