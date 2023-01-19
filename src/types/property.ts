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
  floor?: string | null;
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
  bedrooms: number;
  orientation: string;
  amenities: Amenity[];
};

export type PropertyType = {
  id: string;
  name: string;
};

export type Amenity = {
  id: string;
  name: string;
  properties: ExtraInfo[];
};
