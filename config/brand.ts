export const brand = {
  name: "RBH Design Studio",
  shortName: "RBH",
  email: "",
  whatsapp: "",
  phone: "",
} as const;

export const contactIsConfigured = Boolean(
  brand.email || brand.whatsapp || brand.phone,
);
