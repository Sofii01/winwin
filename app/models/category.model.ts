export interface Category {
  id: string;
  /** Texto pequeño sobre el título, dentro del banner. */
  eyebrow: string;
  name: string;
  description: string;
  /** Ruta dentro de assets/images/categories. */
  image: string;
}
