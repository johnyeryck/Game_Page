import { createContext } from "react";
export interface dataInterface {
  id: number;
  titulo: string;
  valor: string;
  imagem_url: string;
  fullhd_img: string;
  logo: string;
  categoria: string;
}
export const Mycontext = createContext<dataInterface[] | undefined>(undefined);
