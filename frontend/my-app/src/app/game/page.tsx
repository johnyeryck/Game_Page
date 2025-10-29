import Options from "@/components/game";
import { useContext } from "react";
import Years18 from "@public/classification/numero-18.png";
import Image from "next/image";
import { useRouter } from "next/router";
function BuyPage() {
  const router = useRouter();
  const { id } = router.query;
  const data = useContext(MyContext);
  return (
    <header className="">
      {data && data.length > 0
        ? data.map((item) =>
            item.id === Number(id) ? (
              <main className="w-1/2 mr-auto text-white ml-10 mt-10 border-l border-t rounded-2xl">
                <article className="    ">
                  <div className="ml-5 flex">
                    <Options imageUrl={item.imagem_url} isInvisible name="" />
                    <h1 className="mt-2 text-white font-extrabold ml-2 prettierFONT">
                      {item.titulo}
                    </h1>
                    <Image
                      src={Years18}
                      className="size-8 border rounded-2xl bg-white ml-2"
                      alt=""
                    />
                  </div>
                  <p className="font-sans mt-6 ml-5">{item.descricao}</p>
                </article>

                <video
                  src=""
                  controls
                  width="full"
                  height={500}
                  autoPlay={true}
                  className=" rounded-2xl mt-20 ml-auto mr-auto  size-[90%] border-2 border-black"
                >
                  <source src={item.trailer} />
                </video>

                <section className="w-1/2"></section>
              </main>
            ) : null
          )
        : null}
    </header>
  );
}

export default BuyPage;
