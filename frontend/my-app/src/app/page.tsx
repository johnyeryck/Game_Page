// app/page.tsx
"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import GameContainer from "@/components/containerGames";
import { Mycontext } from "@/context/context";
import { dataInterface } from "@/context/context";
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
        <Navbar />
        <GameContainer />
      </Mycontext.Provider>
    </>
  );
}
