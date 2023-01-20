import { ExtraInfo } from "../../types/property";

type Props = {
  extraInfo?: ExtraInfo;
};

export default function Characteristics({ extraInfo }: Props) {
  return (
    <>
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
      </div>
    </>
  );
}
