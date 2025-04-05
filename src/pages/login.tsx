import { useForm } from "react-hook-form";
function LoginPage (){
    const { register,formState: {errors}} = useForm()
    return (
        <div className="text-white border-2 border-gray-500 w-1/4  h-80 mr-auto ml-auto rounded-sm mt-32">
        <h1 className="font-bold text-center   ">Login</h1>
        <form className="mt-10 ml-14 " >
            <div className="flex flex-col">
                <label className="font-bold ml-4 opacity-75 size-9 ">Email</label>
                <input className="bg-gray-600 rounded-sm px-3 w-3/4 mr-auto " type="email" {...register("email" ,{required : true } , )} />
                {errors.email && (
                    <p className='text-red-400'>Esse Campo é Obrigatório</p>
                )}
            </div>
           <div className="mt-5">
                <label className="font-bold ml-4  opacity-75" >Password</label>
                <input className="bg-gray-600 rounded-sm px-3 w-3/4 mr-auto ml-auto" type='password' {...register('senha' , {required : {value : true , message : "Esse campo é obrigat" } , minLength : 4 })}/>
                {errors.senha && (
                    <p className='text-red-400'>Esse Campo é Obrigatório</p>
                )}
           </div>
           <button className=" bg-purple-600 p-2 rounded-xl mt-3 w-3/4 cursor-pointer hover:bg-purple-700"  type="submit" >Iniciar Sessão</button>
              <div className='flex mt-6  px-3 font-bold mb-6'>
                      <p>Não tem uma conta?</p>
                      <a href='http://localhost:5173/createAccount' className='text-blue-400 ml-1'>Criar Conta</a>
              </div>
        </form>
    </div>
    )
}
export default LoginPage