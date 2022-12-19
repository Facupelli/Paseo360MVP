import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const propertyRouter = router({
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
        typeId: z.string(),
        operation: z.string(),
        price: z.number(),
        ambiences: z.number(),
        bathrooms: z.number(),
      })
    )
    .mutation(async (req) => {
      const newProperty = await prisma?.property.create({
        data: {
          location: req.input.location,
          typeId: req.input.typeId,
          operation: req.input.operation,
          price: req.input.price,
          ambiences: req.input.ambiences,
          bathrooms: req.input.bathrooms,
        },
      });

      return { created: true, newProperty };
    }),
});
