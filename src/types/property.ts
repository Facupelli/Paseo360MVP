export type Property = {
  id: string;
  locationLat: number;
  locationLng: number;
  address: string;
  typeId: string;
  type: PropertyType;
  operation: string;
  price: number;
  ambiences: number;
  bathrooms: number;
  extraInfo?: ExtraInfo;
};

export type ExtraInfo = {
  id: string;
  description: string;
  surface: number;
  petsAllowed: boolean;
  parking: boolean;
  airConditioning: boolean;
  buildYear: number;
  property: Property;
  propertyId: string;
  utilities: string[];
};

export type PropertyType = {
  id: string;
  name: string;
};

export type FormValues = {
  operation: string;
  minPrice: number | undefined;
  maxPrice: number | undefined;
  type: string;
  ambiences: string[];
  bathrooms: string[];
  petsAllowed: boolean;
  parking: boolean;
  airConditioning: boolean;
  minSurface: number;
  maxSurface: number;
};
