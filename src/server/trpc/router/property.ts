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
  propertyCreate: publicProcedure
    .input(
      z.object({
        location: z.string(),
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
          location: input.location,
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
});
