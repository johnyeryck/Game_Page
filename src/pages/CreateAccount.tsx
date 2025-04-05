import { useForm } from 'react-hook-form'
import {v4 as uuidv4} from 'uuid'
uuidv4()
function CreateAccount (){
    const {register,handleSubmit, formState : {errors} } = useForm()
    const onSubmit = async (e : any)=>{
        try {
            const dados = {email : e.email , senha : e.senha  , id : uuidv4()}
            await fetch('http://localhost:3000', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dados),
                
               
            }
            ).then((response) => {
                if (response.ok) {
                    alert('Conta criada com sucesso');
                } else {
                    console.error('Erro ao criar conta');
                }
            }
            
        );
       
            
    }catch{
        
    }}
    return(
        <div className="text-white border-2 border-gray-500 w-1/4  h-auto mr-auto ml-auto rounded-sm mt-32">
            <h1 className="font-bold ml-28  mt-3 ">Crie sua Conta</h1>
            <form className="mt-10 ml-14 " onSubmit={handleSubmit(onSubmit)}>
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
               <button className=" bg-purple-600 p-2 rounded-xl mt-3 w-3/4 cursor-pointer hover:bg-purple-700 font-bold"  type="submit" >Criar Conta</button>
               <div className='flex mt-6  px-3 font-bold mb-6'>
                   <p>Já tem uma conta?</p>
                   <a href='http://localhost:5173/login' className='text-blue-400 ml-1'>Entrar</a>
               </div>
            </form>
        </div>
    )
}

export default CreateAccount