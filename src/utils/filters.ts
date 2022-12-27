export const getTopDivPosition = (ref: HTMLDivElement) => {
  return ref.getBoundingClientRect().top + ref.getBoundingClientRect().height;
};

export const getLeftDivPosition = (ref: HTMLDivElement) => {
  return ref.getBoundingClientRect().left;
};

export const filterDefaultValues = {
  operation: "rent",
  type: "all",
  ambiences: ["0"],
  bathrooms: ["0"],
  maxPrice: undefined,
  minPrice: undefined,
  petsAllowed: false,
  parking: false,
  airConditioning: false,
  minSurface: undefined,
  maxSurface: undefined,
};
