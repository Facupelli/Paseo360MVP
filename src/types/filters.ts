export type FormValues = {
  operation: string;
  minPrice: string | undefined;
  maxPrice: string | undefined;
  type: string;
  ambiences: string[];
  bathrooms: string[];
  bedrooms: string[];
  petsAllowed: boolean;
  parking: boolean;
  airConditioning: boolean;
  minSurface: string | undefined;
  maxSurface: string | undefined;
};
