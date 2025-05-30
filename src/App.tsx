import Nav from "./components/Nav";
import Main from "./components/slide";
import Layout from "./components/acao"
import Rpg from "./components/rpg";
import DataGames from "./interfaces";
import { useQuery } from "@tanstack/react-query";
import MyContext from "./context/gamesContext";
import Genders from "./components/genders";


function App() {
  const { data} = useQuery<DataGames[] | undefined>({
    queryKey: ['games'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/games', {
        method : "GET"
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      
      return response.json()
    }
  })
  
  return (
    <>
      <MyContext.Provider value={data}>
          <Nav />
          <Main />
          <Layout />
          <Genders />
          <Rpg />
      </MyContext.Provider>
    </>
  );
}

export default App;
