import { PrismaClient } from "@prisma/client";
import { GetStaticPaths, GetStaticProps, type NextPage } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";

import { Property } from "../../types/property";

import Nav from "../../components/Nav";
import GoBackButton from "../../components/UI/GoBackButton";
import Map from "../../components/MapContainer/Map";
import Gallery from "../../components/PropertyId/Gallery";
import MainInfo from "../../components/PropertyId/MainInfo";
import Description from "../../components/PropertyId/Description";
import Amenities from "../../components/PropertyId/Amenities";

type Props = {
  property?: Property;
};

const PropertyDetail: NextPage = ({ property }: Props) => {
  console.log(property);
  return (
    <>
      <Head>
        <title>Propiedad detalle</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="mx-auto max-w-screen-lg pb-6">
        <div className="pt-20">
          <div className="pt-2">
            <GoBackButton />
          </div>
          <section className="flex flex-col gap-10">
            <div>
              <Gallery address={property?.address} />
              <MainInfo property={property} />
            </div>
            <Description description={property?.extraInfo?.description} />
            <Amenities extraInfo={property?.extraInfo} />
            <section className="h-96 w-full">
              <Map
                properties={[property]}
                setActiveProperty={() => null}
                activeProperty=""
                zoom={18}
                center={[property?.locationLat, property?.locationLng]}
                bounds={false}
                iconSize={32}
              />
            </section>
          </section>
        </div>
      </main>
    </>
  );
};

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const prisma = new PrismaClient();
  const { id } = context.params as IParams;
  const property = await prisma?.property.findUnique({
    where: { id },
    include: { extraInfo: true, type: true },
  });

  return {
    props: {
      property: JSON.parse(JSON.stringify(property)),
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths<IParams> = async () => {
  const prisma = new PrismaClient();
  const properties = await prisma?.property.findMany({
    select: {
      id: true,
    },
  });

  return {
    paths: properties?.map((property) => ({
      params: {
        id: property.id,
      },
    })),
    fallback: "blocking",
  };
};

export default PropertyDetail;
