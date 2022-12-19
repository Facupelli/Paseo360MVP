import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const propertyTypeRouter = router({
  propertyTypeCreate: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async (req) => {
      const newPropertyType = await prisma?.propertyType.create({
        data: {
          name: req.input.name,
        },
      });

      return { created: true, newPropertyType };
    }),
  getPropertyTypes: publicProcedure.query(async (req) => {
    const propertyTypes = await prisma?.propertyType.findMany({});

    return propertyTypes;
  }),
});
