import { useForm } from "react-hook-form";
import Options from "@components/game";
import { useState } from "react";
import Nav from "@/components/Navbar";
// import { toast, ToastContainer } from "react-toastify";
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
      logo: e.logo,
      trailer: e.trailer,
    };
    await fetch("http://localhost:3000/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // toast.success("Jogo Cadastrado");
  };
  return (
    <main className="  rounded-xl  ml-auto mr-auto  mt-32 bg-gray-900 ">
      <Nav />
      {/* <ToastContainer /> */}
      <form
        className="flex-col flex mt-32 mb-32 border w-[70%] ml-auto mr-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <header className="flex   border-amber-300 h-50 mt-20">
          <div className="flex flex-col justify-between text-white font-bold ">
            <label className=" ml-44">Nome do Jogo</label>
            <label className=" ml-44">Url Image</label>
            <label className=" ml-44">Valor</label>
            <label className=" ml-44" htmlFor="logo">
              Url Logo
            </label>
            <label className=" ml-44">Trailer link</label>
            <label className=" ml-44">Gênero</label>
          </div>
          <section className="flex flex-col w-1/2 justify-between ml-2">
            <input
              className=" w-full rounded-sm bg-white  border border-purple-600  placeholder:opacity-70 px-2 text-black ml-auto mr-auto"
              placeholder="Nome do Jogo"
              {...register("name", { required: true })}
            />
            <input
              type="text"
              className=" w-full bg-white rounded-sm border border-purple-600 z-10 px-2"
              {...register("Url", { required: true })}
              onChange={(e) => setImg(e.target.value)}
              placeholder="Imagem"
            ></input>

            <input
              className="bg-white w-full rounded-sm border border-purple-600 z-10 px-2"
              {...register("Valor", { required: true })}
              placeholder="Valor"
            />

            <input
              className=" w-full rounded-sm bg-white  border border-purple-600   placeholder:opacity-70 px-2 text-black mr-auto "
              placeholder="Logo"
              {...register("logo", { required: true })}
            />

            <input
              className=" w-full rounded-sm bg-white  border border-purple-600   placeholder:opacity-70 px-2 text-black mr-auto "
              placeholder="Trailer"
              {...register("trailer")}
            />

            <select
              className=" rounded-sm border border-purple-600  placeholder:text-white placeholder:opacity-70 px-2 bg-white mr-auto "
              {...register("Genero", { required: true })}
            >
              <option>RPG</option>
              <option>FPS</option>
              <option>Ação</option>
              <option>Esporte</option>
              <option>Terror</option>
              <option>Corrida</option>
              <option>Luta</option>
            </select>
          </section>

          {/*  */}
        </header>
        <div className="flex flex-col mt-7">
          <label htmlFor="" className="text-white ml-auto mr-auto">
            Lançamento
          </label>
          <input
            type="date"
            className=" rounded-sm bg-white  border border-purple-600  placeholder:text-white placeholder:opacity-70 px-2  w-1/2 ml-auto mr-auto "
            {...register("lancamento")}
          />
        </div>

        <label className="text-white text-center mt-4">Descrição</label>
        <div className="flex mt-4 justify-evenly">
          <Options imageUrl={Img} isInvisible />
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
