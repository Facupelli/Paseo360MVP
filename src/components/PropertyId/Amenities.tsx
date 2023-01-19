import { ExtraInfo } from "../../types/property";

type Props = {
  extraInfo?: ExtraInfo;
};

export default function Amenities({ extraInfo }: Props) {
  return (
    <section className="py-4">
      <h3 className="pb-2 text-xl font-semibold">Comodidades:</h3>
      <div className="grid grid-cols-2 ">
        <div className="flex">
          <p className="basis-1/3 text-gray-300">Estacionamiento:</p>
          <p className="font-semibold">{extraInfo?.parking ? "SI" : "NO"}</p>
        </div>
        <div className="flex">
          <p className="basis-1/3 text-gray-300">Mascotas:</p>
          <p className="font-semibold">
            {extraInfo?.petsAllowed ? "SI" : "NO"}
          </p>
        </div>
        <div className="flex">
          <p className="basis-1/3 text-gray-300">A/C:</p>
          <p className="font-semibold">
            {extraInfo?.airConditioning ? "SI" : "NO"}
          </p>
        </div>
        <div className="flex">
          <p className="basis-1/3 text-gray-300">Comodidades:</p>
        </div>
      </div>
    </section>
  );
}
