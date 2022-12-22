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
        ambiences: z.number().optional(),
        bathrooms: z.number().optional(),
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
          ambiences: input.ambiences,
          bathrooms: input.bathrooms,
          extraInfo: {
            surface: { gte: input.minSurface, lte: input.maxSurface },
            petsAllowed: input.petsAllowed,
            buildYear: { gte: input.minBuildYear },
            parking: input.parking,
            airConditioning: input.airConditioning,
          },
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
          extraInfo: true,
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
        },
      });

      return { created: true, newPropertyInfo };
    }),
});
