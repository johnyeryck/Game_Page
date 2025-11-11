"use client";
import Options from "@/components/game";
import { useEffect, useState } from "react";
import Years18 from "@public/classification/numero-18.png";
import Nav from "@/components/Navbar";
import Image from "next/image";
import { useParams } from "next/navigation";
interface ProfileData {
  description: string;
  titulo: string;
  id: number;
  statics: {
    imagem_url: string;
    trailer: string;
  };
}
function BuyPage() {
  const [data, setData] = useState<ProfileData[] | undefined>();
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const fetchdata = await fetch(
          `http://localhost:4000/game/profile/${id}`,
          {
            method: "GET",
          }
        );

        if (!fetchdata.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await fetchdata.json();
        setData(result);
      } catch (err: any) {
      } finally {
      }
    };

    fetchGames();
  }, []);
  console.log(data);
  return (
    <header className="">
      <Nav />
      {data && data.length > 0
        ? data.map((item) =>
            item.id === Number(id) ? (
              <main className="flex mt-20" key={item.id}>
                <section
                  key={item.id}
                  className="w-[40%] mr-auto  text-white  mt-10 rounded-2xl ml-auto"
                >
                  <article className="flex">
                    <div className=" w-[40%]">
                      <Options
                        imageUrl={item.statics.imagem_url}
                        HiddenCart
                        name=""
                      />
                    </div>
                    <div className=" mb-4 m-auto w-1/2 flex justify-between">
                      <button className="border h-10 rounded-2xl px-2 mt-auto cursor-pointer">
                        Adicionar ao carrinho
                      </button>
                      <button className="bg-purple-600 h-10 rounded-2xl px-2 mt-auto cursor-pointer">
                        Comprar
                      </button>
                    </div>
                  </article>

                  <div className=" flex ">
                    <h1 className="mt-2 text-white font-extrabold ml-2 prettierFONT">
                      {item.titulo}
                    </h1>
                    <Image
                      src={Years18}
                      className="size-8 border rounded-2xl bg-white ml-2"
                      alt=""
                    />
                  </div>
                  <p className="font-sans text-white mt-6 px-2">
                    {item.description}
                  </p>
                </section>

                <section className="w-[40%]  mr-auto mt-10 rounded-2xl">
                  <video
                    src={item.statics.trailer}
                    autoPlay
                    className="  m-auto  size-[90%]"
                  >
                    <source src={item.statics.trailer} />
                  </video>
                </section>
              </main>
            ) : null
          )
        : null}
    </header>
  );
}

export default BuyPage;
