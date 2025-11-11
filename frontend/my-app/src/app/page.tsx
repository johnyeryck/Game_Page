// app/page.tsx
"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import GameContainer from "@/components/containerGames";
import { Mycontext } from "@/context/context";
import { dataInterface } from "@/context/context";
import Slide from "@/components/slide";
export default function Home() {
  const [data, setData] = useState<dataInterface[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchGames = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:4000/", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGames();
  }, []);
  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <>
      <Mycontext.Provider value={data}>
        <header className="bg-linear-to-t from-black to-transparent">
          <Navbar />
          <Slide id={[10, 2, 37, 20, 30]} />
          <GameContainer
            categoria="Ação"
            ContainerTitle="Recomendados e Destaques"
          />
          <GameContainer
            categoria="RPG"
            ContainerTitle="Historias Para se Aventurar"
          />
        </header>
      </Mycontext.Provider>
    </>
  );
}
