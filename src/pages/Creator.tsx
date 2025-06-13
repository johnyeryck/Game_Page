import { useForm } from "react-hook-form";
import Options from "@/components/options";
import { useState } from "react";
import Nav from "@/components/Nav";
function Creator() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [Img, setImg] = useState<string | undefined>();

  const onSubmit = async (e: any) => {
    const data = {
      GameName: e.name,
      Url: e.Url,
      descrição: e.Description,
      genero: e.Genero,
      valor: e.Valor,
      lançamento: e.lancamento,
    };
    await fetch("http://localhost:3000/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    window.location.reload();
  };
  return (
    <main className="  rounded-xl  ml-auto mr-auto  mt-32 bg-gray-900 ">
      <Nav />
      <form
        className="flex-col flex mt-32 mb-32 "
        onSubmit={handleSubmit(onSubmit)}
      >
        {/*  */}
        <div className="flex flex-col mb-4">
          <label className="text-white font-bold ml-44">Nome do Jogo</label>
          <input
            className="  rounded-sm bg-gray-800  border border-purple-600  placeholder:text-white placeholder:opacity-70 px-2 text-white w-1/2 ml-auto mr-auto"
            placeholder="Nome do Jogo"
            {...register("name", { required: true })}
          />
        </div>

        {/*  */}
        <div className="text-white flex flex-col">
          <label className="text-white font-bold ml-44">Url Image</label>
          <input
            type="text"
            className=" w-1/2 ml-auto mr-auto rounded-sm border border-purple-600 z-10 px-2"
            {...register("Url", { required: true })}
            onChange={(e) => setImg(e.target.value)}
          ></input>
        </div>

        {/*  */}
        <div className="text-white flex flex-col">
          <label className="text-white font-bold ml-44">Preço</label>
          <input
            className=" w-1/2 ml-auto mr-auto rounded-sm border border-purple-600 z-10 px-2"
            {...register("Valor", { required: true })}
          ></input>
        </div>

        {/*  */}
        <div className="flex flex-col mb-4 mt-4">
          <label className="text-white font-bold ml-44">Gênero</label>
          <select
            className="  rounded-sm bg-gray-800  border border-purple-600  placeholder:text-white placeholder:opacity-70 px-2 text-white w-1/2 ml-auto mr-auto "
            {...register("Genero", { required: true })}
          >
            <option>RPG</option>
            <option>FPS</option>
            <option>Ação</option>
            <option>Esporte</option>
            <option>Terror</option>
            <option>Corrida</option>
          </select>
        </div>

        {/*  */}
        <div className="flex flex-col">
          <label htmlFor="" className="text-white ml-auto mr-auto font-bold">
            Lançamento
          </label>
          <input
            type="date"
            className=" rounded-sm bg-gray-800  border border-purple-600  placeholder:text-white placeholder:opacity-70 px-2 text-white w-1/2 ml-auto mr-auto "
            {...register("lancamento")}
          />
        </div>

        <label className="text-white font-bold text-center mt-4">
          Descrição
        </label>
        <div className="flex mt-4 justify-evenly">
          <Options imageUrl={Img} />
          <textarea
            className="  rounded-sm bg-gray-800  border border-purple-400 px-4  text-white h-72  "
            {...register("Description", { required: true })}
          />
        </div>
        <button
          className="bg-purple-600 w-32  ml-auto rounded-xl mr-auto"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </main>
  );
}

export default Creator;
