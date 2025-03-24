function Creator(){
    return(
    <div className="w-1/2 border border-purple-500 rounded-xl  ml-auto mr-auto">
        <form className="flex-col flex mt-32">
                <label className="text-white font-bold">Nome do Jogo</label>
                <input className="  rounded-sm bg-gray-800  border border-purple-400 placeholder:text-white placeholder:opacity-70 px-1 text-white" placeholder="Nome do Jogo " />
                
        </form>
    </div>
    )
}


export default Creator