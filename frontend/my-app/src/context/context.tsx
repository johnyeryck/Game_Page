import { createContext } from "react";
export interface dataInterface {
  id: number;
  titulo: string;
  preco: string;
  imagem_url: string;
  categoria: string;
}
export const Mycontext = createContext<dataInterface[] | undefined>(undefined);
