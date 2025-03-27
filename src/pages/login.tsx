import axios from 'axios'
import { useForm } from 'react-hook-form'
function LoginPage (){

    const {register,handleSubmit, formState : {errors} } = useForm()
    const onSubmit = async ()=>{
        try {
            const dados = {email : 'joao@gmail.com' , senha : "1234"}
            const response = await fetch('http://localhost:3000', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dados),
            });
            console.log("coisou")
    }catch{
        
    }}
    return(
        <div className="text-white border border-gray-500 w-1/4  h-80 mr-auto ml-auto rounded-sm mt-32">
            <h1 className="font-bold text-center ">Login</h1>
            <form className="mt-10 ml-14 " onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col">
                    <label className="font-bold ml-4 opacity-75 size-9 ">Email</label>
                    <input className="bg-gray-600 rounded-sm px-3 w-3/4 mr-auto " type="email" {...register("email" ,{required : true } , )}/>
                </div>
               <div className="mt-5">
                    <label className="font-bold ml-4  opacity-75" >Password</label>
                    <input className="bg-gray-600 rounded-sm px-3 w-3/4 mr-auto ml-auto" type='password' {...register('senha' , {required : true})}/>
                   
               </div>
               <button className=" bg-purple-600 p-2 rounded-xl mt-3 w-3/4 cursor-pointer hover:bg-purple-700"  type="submit" >Entrar</button>
            </form>
        </div>
    )
}

export default LoginPage