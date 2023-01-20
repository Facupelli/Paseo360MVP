import { UseFormWatch } from "react-hook-form";
import { FormValues } from "../types/filters";

export const getTopDivPosition = (ref: HTMLDivElement) => {
  return ref.getBoundingClientRect().top + ref.getBoundingClientRect().height;
};

export const getLeftDivPosition = (ref: HTMLDivElement) => {
  return ref.getBoundingClientRect().left;
};

export const filterDefaultValues = {
  operation: "rent",
  // type: "all",
  ambiences: ["0"],
  bathrooms: ["0"],
  bedrooms: ["0"],
  maxPrice: undefined,
  minPrice: undefined,
  petsAllowed: false,
  parking: false,
  airConditioning: false,
  minSurface: undefined,
  maxSurface: undefined,
};

export const getFilterObject = (watch: UseFormWatch<FormValues>) => {
  const operation = watch("operation");
  const minPrice = watch("minPrice");
  const maxPrice = watch("maxPrice");
  const type = watch("type");
  const ambiences = watch("ambiences");
  const bathrooms = watch("bathrooms");
  const bedrooms = watch("bedrooms");
  const petsAllowed = watch("petsAllowed");
  const parking = watch("parking");
  const airConditioning = watch("airConditioning");
  const minSurface = watch("minSurface");
  const maxSurface = watch("maxSurface");

  const filters = {
    operation,
    minPrice,
    maxPrice,
    type,
    ambiences,
    bathrooms,
    bedrooms,
    petsAllowed,
    parking,
    airConditioning,
    minSurface,
    maxSurface,
  };
  return filters;
};
