export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumSignificantDigits: 12,
  }).format(price);
};

export const formatSurface = (surface: number) => {
  return surface.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
