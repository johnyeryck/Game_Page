import { createContext } from "react";
export interface dataInterface {
  id: number;
  titulo: string;
  valor: string;
  tags: string[];
  statics: {
    imagem_url: string;
    logo: string;
    fullhd_img: string;
    trailer: string;
  };
}
export const Mycontext = createContext<dataInterface[] | undefined>(undefined);
