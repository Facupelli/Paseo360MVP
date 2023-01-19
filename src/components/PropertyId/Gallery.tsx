import Image from "next/image";

type Props = {
  address?: string;
};

export default function Gallery({ address }: Props) {
  return (
    <section className="grid grid-cols-10 gap-2 py-6">
      <div className="col-span-7 ">
        <iframe
          width="100%"
          height="384"
          // src="https://my.matterport.com/show/?m=KpBQUvEMirJ"
          src="https://tour-br.metareal.com/apps/player?asset=bbc3992e-8f94-4e71-89be-be128fdc0edb"
          allow="xr-spatial-tracking"
          allowFullScreen
        ></iframe>
      </div>
      <div className="col-span-3 flex h-96 cursor-pointer flex-col gap-2 transition-opacity duration-200 ease-in-out hover:opacity-70">
        <div className="relative w-full basis-1/2 bg-slate-50 ">
          <Image
            src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt={address ?? "alt"}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative h-32 w-full basis-1/2 bg-slate-50 ">
          <Image
            src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt={address ?? "alt"}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
