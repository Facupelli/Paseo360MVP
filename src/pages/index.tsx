import { type NextPage } from "next";
import Head from "next/head";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import MapContainer from "../components/MapContainer/MapContainer";
import Nav from "../components/Nav";
import PropertyCard from "../components/PropertyCard";
import PropertyFilters from "../components/PropertyFilters";

import { trpc } from "../utils/trpc";

type FormValues = {
  operation: string;
  minPrice: number | undefined;
  maxPrice: number | undefined;
  type: string;
  ambiences: string[];
  bathrooms: string[];
};

const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    defaultValues: {
      type: "all",
      ambiences: ["0"],
      bathrooms: ["0"],
    },
  });

  const operation = watch("operation");
  const minPrice = watch("minPrice");
  const maxPrice = watch("maxPrice");
  const type = watch("type");
  const ambiences = watch("ambiences");
  const bathrooms = watch("bathrooms");

  const properties = trpc.property.getFilteredProperties.useQuery({
    operation,
    typeId: type === "all" ? undefined : type,
    ambiences,
    bathrooms,
    minPrice: Number(minPrice ?? 0),
    maxPrice: maxPrice ? Number(maxPrice) : undefined,
  });

  const [activeProperty, setActiveProperty] = useState<string>("");

  // const createProperty = trpc.property.propertyCreate.useMutation();
  // const createPropertyType = trpc.propertyType.propertyTypeCreate.useMutation();
  // const createPropertyInfo = trpc.property.propertyInfoCreate.useMutation();

  const handleClick = () => {
    // createProperty.mutate({
    //   location: { lat: -31.53576907382949, lng: -68.531095306108 },
    //   ambiences: 2,
    //   bathrooms: 1,
    //   address: "Plaza Laprida 567 oeste",
    //   typeId: "clbz7mo6n0003e7kowfcl1c3t",
    //   operation: "rent",
    //   price: 2700000,
    // });
    // createPropertyType.mutate({ name: "Departamento" });
    // createPropertyInfo.mutate({
    //   description: "lores ckasa scaisc ascisc coias",
    //   surface: 50000,
    //   petsAllowed: true,
    //   parking: false,
    //   airConditioning: true,
    //   buildYear: 2015,
    //   propertyId: "clbz7k3vk0002e7kopotb3vxy",
    // });
  };

  return (
    <>
      <Head>
        <title>Paseo 360</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className="px-2 ">
        <div className="pt-20">
          <MapContainer
            properties={properties.data}
            setActiveProperty={setActiveProperty}
            activeProperty={activeProperty}
          />

          <section className="ml-auto  w-full  pl-6 md:w-3/5">
            <PropertyFilters
              register={register}
              setValue={setValue}
              price={{ minPrice, maxPrice }}
              ambiences={{ ambiences, bathrooms }}
            />
            <div className="grid gap-6 pt-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {!properties.isLoading &&
                properties?.data?.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    activeProperty={activeProperty}
                  />
                ))}
              {properties?.data?.length === 0 && (
                <p className="col-span-2">
                  No se encontraron propiedades. Prueba modificar los filtros!
                </p>
              )}
            </div>
            {/* <button onClick={handleClick}>CREAR PROPIEDAD</button> */}
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
