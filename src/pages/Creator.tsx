import Add from "../assets/logo/adicionar-simbolo.png";
import { useForm } from "react-hook-form";
import Options from "@/components/options";
function Creator() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  
  return (
    <main className="w-1/2 border border-purple-500 rounded-xl  ml-auto mr-auto  mt-32 bg-gray-900">
      <form className="flex-col flex mt-32 mb-32">
        <div className="flex flex-col mb-4">
          <label className="text-white font-bold ml-44">Nome do Jogo</label>
          <input
            className="  rounded-sm bg-gray-800  border border-purple-600  placeholder:text-white placeholder:opacity-70 px-2 text-white w-1/2 ml-auto mr-auto"
            placeholder="Nome do Jogo"
            {...register("name", { required: true })}
          />
        </div>

        <div className="text-white flex flex-col">
          <label className="text-white font-bold ml-44">Url Image</label>
          <input
            type="text"
            className=" w-1/2 ml-auto mr-auto rounded-sm border border-purple-600 z-10 px-2"
            {...register("Url", { required: true })}
          ></input>
        </div>
         
          <label className="text-white font-bold text-center mt-4">
            Descrição
          </label>
        <div className="flex mt-4 justify-evenly">
         <Options imageUrl="https://cdn1.epicgames.com/offer/7713e3fa4b234e0d8f553044205d53b6/EGS_TheLastofUsPartIIRemastered_NaughtyDogLLCNixxesSoftwareIronGalaxy_S2_1200x1600-2e13755a6b3fec2ee9dbcc231a1cf39c?resize=1&w=360&h=480&quality=medium" />
          <textarea
            className="  rounded-sm bg-gray-800  border border-purple-400 placeholder:text-white placeholder:opacity-70 px-4 s text-white h-72 "
            {...register("name", { required: true })}
          />
        </div>
      </form>
    </main>
  );
}

export default Creator;
