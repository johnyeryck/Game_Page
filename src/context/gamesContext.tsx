import DataGames from "@/interfaces";
import { createContext  } from "react";
type GamesContextType  = DataGames[] | undefined;
const MyContext = createContext<GamesContextType>(undefined)

export default MyContext