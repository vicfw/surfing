import { StaticImageData } from "next/image";

export interface SurfType {
  id: number;
  image: StaticImageData;
  category: string;
  name: string;
  price: number;
}
