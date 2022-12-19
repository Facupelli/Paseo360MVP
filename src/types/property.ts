export type Property = {
  id: string;
  location: string;
  typeId: string;
  type: PropertyType;
  operation: string;
  price: number;
  ambiences: number;
  bathrooms: number;
};

export type PropertyType = {
  id: string;
  name: string;
};
