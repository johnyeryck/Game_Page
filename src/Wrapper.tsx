import { RouterProvider } from "react-router-dom";
import MyContext from "./context/gamesContext";
import DataGames from "./interfaces";
import { useQuery } from "@tanstack/react-query";
import router from "./routes/routesConfig";

function Wrapper() {
  const { data } = useQuery<DataGames[] | undefined>({
    queryKey: ["games"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/games", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    },
  });
  return (
    <MyContext.Provider value={data}>
      <RouterProvider router={router} />
    </MyContext.Provider>
  );
}
export default Wrapper;
