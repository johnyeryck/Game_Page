// app/page.tsx
"use client";
import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import GameContainer from "@/components/containerGames";
import { Mycontext } from "@/context/context";
import Slide from "@/components/slide";
export default function Home() {
 const {data , isLoading , error} = useQuery({
    queryKey  : ["Games"],
    queryFn : ()=> fetch("http://localhost:4000").then((res)=> res.json())
 })

 if(isLoading) return 'Loading ...'
 if(error) return 'Algo deu errado'

  return (
    <>
        <header className="bg-linear-to-t from-black to-transparent">
          <Navbar data={data} />
          <Slide id={[10, 2, 37, 20, 30]} data={data}/>
          <GameContainer
            categoria="Ação"
            ContainerTitle="Recomendados e Destaques"
            data={data}
          />
          <GameContainer
            categoria="RPG"
            data={data}
            ContainerTitle="Historias Para se Aventurar"
          />
        </header>
    </>
  );
}
