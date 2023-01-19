import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const propertyRouter = router({
  getFilteredProperties: publicProcedure
    .input(
      z.object({
        operation: z.string().optional(),
        typeId: z.string().optional(),
        minPrice: z.number().optional(),
        maxPrice: z.number().optional(),
        ambiences: z.array(z.string()),
        bathrooms: z.array(z.string()),
        minSurface: z.number().optional(),
        maxSurface: z.number().optional(),
        petsAllowed: z.boolean().optional(),
        minBuildYear: z.number().optional(),
        parking: z.boolean().optional(),
        airConditioning: z.boolean().optional(),
      })
    )
    .query(async ({ input }) => {
      const properties = await prisma?.property.findMany({
        where: {
          operation: input.operation,
          typeId: input.typeId,
          price: { gte: input.minPrice, lte: input.maxPrice },
          ambiences: {
            gte: Number(input.ambiences[0]),
            lte: Number(
              input.ambiences[0] === "0"
                ? 20
                : input.ambiences[input.ambiences.length - 1]
            ),
          },
          bathrooms: {
            gte: Number(input.bathrooms[0]),
            lte: Number(
              input.bathrooms[0] === "0"
                ? 20
                : input.bathrooms[input.bathrooms.length - 1]
            ),
          },
          extraInfo: {
            petsAllowed: input.petsAllowed,
            // buildYear: { gte: input.minBuildYear },
            parking: input.parking,
            airConditioning: input.airConditioning,
            surface: { gte: input.minSurface, lte: input.maxSurface },
          },
        },
        include: {
          type: true,
        },
      });

      return properties;
    }),
  getAllProperties: publicProcedure.query(async (req) => {
    const properties = await prisma?.property.findMany({
      include: { type: true },
    });

    return properties;
  }),
  getPropertyById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const property = await prisma?.property.findUnique({
        where: { id: input.id },
        include: {
          type: true,
          extraInfo: { include: { amenities: true } },
        },
      });

      return property;
    }),
  propertyCreate: publicProcedure
    .input(
      z.object({
        location: z.object({ lat: z.number(), lng: z.number() }),
        address: z.string(),
        typeId: z.string(),
        operation: z.string(),
        price: z.number(),
        ambiences: z.number(),
        bathrooms: z.number(),
      })
    )
    .mutation(async ({ input }) => {
      const newProperty = await prisma?.property.create({
        data: {
          locationLat: input.location.lat,
          locationLng: input.location.lng,
          address: input.address,
          typeId: input.typeId,
          operation: input.operation,
          price: input.price,
          ambiences: input.ambiences,
          bathrooms: input.bathrooms,
        },
      });

      return { created: true, newProperty };
    }),
  propertyInfoCreate: publicProcedure
    .input(
      z.object({
        description: z.string(),
        surface: z.number(),
        petsAllowed: z.boolean(),
        parking: z.boolean(),
        airConditioning: z.boolean(),
        buildYear: z.number(),
        propertyId: z.string(),
        orientation: z.string(),
        bedrooms: z.number(),
      })
    )
    .mutation(async ({ input }) => {
      const newPropertyInfo = await prisma?.propertyInfo.create({
        data: {
          property: { connect: { id: input.propertyId } },
          description: input.description,
          surface: input.surface,
          petsAllowed: input.petsAllowed,
          parking: input.parking,
          airConditioning: input.airConditioning,
          buildYear: input.buildYear,
          orientation: input.orientation,
          bedrooms: input.bedrooms,
        },
      });

      return { created: true, newPropertyInfo };
    }),
});
