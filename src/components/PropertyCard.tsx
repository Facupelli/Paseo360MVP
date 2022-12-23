import Image from "next/image";
import { useRouter } from "next/router";
import Carousel from "nuka-carousel/lib/carousel";
import { Ref, useRef, RefObject } from "react";
import { Property } from "../types/property";
import { formatPrice } from "../utils/property";

type Props = {
  property: Property;
  activeProperty: string;
};

export default function PropertyCard({ property, activeProperty }: Props) {
  const router = useRouter();

  const cardRef = useRef<HTMLDivElement>(null);

  if (property.id === activeProperty && cardRef.current) {
    cardRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <article
      className={`cursor-pointer scroll-m-2 rounded-bl  rounded-br bg-slate-700 hover:shadow-md ${
        activeProperty === property.id
          ? "border border-gray-50 shadow-lg"
          : "border border-gray-800"
      }`}
      ref={cardRef}
      // onClick={() => router.push(`/property/${property.id}`)}
    >
      <Carousel
        dragging={true}
        swiping={true}
        // renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
        //   <button onClick={previousSlide} disabled={previousDisabled}>
        //     {"<"}
        //   </button>
        // )}
        // renderCenterRightControls={({ nextDisabled, nextSlide }) => (
        //   <button onClick={nextSlide} disabled={nextDisabled}>
        //     {">"}
        //   </button>
        // )}
        defaultControlsConfig={{
          nextButtonText: ">",
          prevButtonText: "<",
          pagingDotsStyle: {
            padding: "0 2px",
          },
        }}
      >
        <div className="relative h-52 w-full bg-slate-50 ">
          <Image
            src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt={property.address}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative h-52 w-full bg-slate-50 ">
          <Image
            src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt={property.address}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative h-52 w-full bg-slate-50 ">
          <Image
            src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt={property.address}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative h-52 w-full bg-slate-50 ">
          <Image
            src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt={property.address}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </Carousel>
      {/* <p>{property.type.name}</p> */}
      <div className="p-2">
        <div className="flex items-baseline gap-x-2 pt-2">
          <p className="text-xs font-semibold">
            {property.operation === "rent" ? "Alquiler" : "Venta"}
          </p>
          <p className="ml-auto text-lg font-semibold">
            {formatPrice(property.price)}
          </p>
        </div>
        <div className="flex gap-x-2 text-slate-400">
          <p>amb: {property.ambiences}</p>
          <p>baths: {property.bathrooms}</p>
        </div>
        <p>{property.address}</p>
      </div>
    </article>
  );
}
