import Add from "../assets/logo/adicionar-simbolo.png";
function Creator() {
  return (
    <div className="w-1/2 border border-purple-500 rounded-xl  ml-auto mr-auto  mt-32 bg-gray-900">
      <form className="flex-col flex mt-32 mb-32">
        <div className="flex flex-col mb-4">
          <label className="text-white font-bold ml-auto mr-auto">
            Nome do Jogo
          </label>
          <input
            className="  rounded-sm bg-gray-800  border border-purple-400 placeholder:text-white placeholder:opacity-70 px-1 text-white w-1/2 ml-auto mr-auto"
            placeholder="Nome do Jogo "
          />
        </div>
        <label className="text-white font-bold ml-auto mr-auto">
          App Image
        </label>
        <div className="w-1/2 ml-auto mr-auto h-40 rounded-md border border-purple-400 align-middle flex justify-center items-center ">
          <img src={Add} className="size-12  absolute " />
          <input
            type="file"
            accept="image/"
            className=" w-1/2 ml-auto mr-auto h-40 rounded-md z-10 cursor-pointer"
          ></input>
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-white font-bold ml-auto mr-auto">
            Descrição
          </label>
          <textarea className="  rounded-sm bg-gray-800  border border-purple-400 placeholder:text-white placeholder:opacity-70 px-4 pb-40 text-white  w-1/2 h-60 ml-auto mr-auto    " />
        </div>
      </form>
    </div>
  );
}

export default Creator;
