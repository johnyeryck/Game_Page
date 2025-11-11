"use client";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
interface Login {
  onClick: () => void;
  SignUp: () => void;
}
function LoginPage({ onClick, SignUp }: Login) {
  const [showPass, setvalue] = useState<boolean>(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e: any) => {
    try {
      const dados = { email: e.email, senha: e.senha };
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });
      if (res.ok) {
        toast.success("Login realizado com sucesso");
      }
    } catch (err) {
      alert("Erro ao fazer login");
    }
  };

  console.log(onClick);
  return (
    <main className="text-white p-4  absolute w-1/4 right-[40%] backdrop-blur-2xl h-auto  rounded-2xl mt-32 ">
      <div className="flex-row-reverse flex  ">
        <IoIosClose className="size-8" onClick={onClick} />
      </div>
      <ToastContainer className="absolute" />
      <h1 className="font-bold text-center   ">Login</h1>
      <form className="mt-10 ml-14 " onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label className="font-bold  opacity-75 size-9 ">Email</label>
          <input
            className="px-3 w-3/4 mr-auto outline-0 border-b border-white"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="text-red-400">Esse Campo é Obrigatório</p>
          )}
        </div>

        <article className="mt-3 relative">
          <label className="font-bold   opacity-75 ">Password</label>
          <div className="flex  pt-4">
            <input
              className="outline-0  border-b   w-3/4   px-3 "
              type={showPass ? "text" : "password"}
              {...register("senha", {
                required: { value: true, message: "Esse campo é obrigat" },
                minLength: 4,
              })}
            />
            <div className=" ml-2  mr-auto">
              <button
                type="button"
                onClick={() => setvalue(!showPass)}
                className="bg-transparent  transition-all  cursor-pointer"
              >
                {" "}
                {showPass ? (
                  <EyeOff size={20} color="white" />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>
          {errors.senha && (
            <p className="text-red-400 text-sm mt-2">
              *Esse Campo é Obrigatório
            </p>
          )}
          <a href="">
            <p className="text-sm text-blue-400">Esqueceu a senha?</p>
          </a>
        </article>
        <button
          className=" border-2 border-purple-600  p-2 rounded-xl mt-3 w-3/4 cursor-pointer hover:bg-purple-700 hover:shadow-2xl shadow-purple-600 font-bold"
          type="submit"
        >
          Iniciar Sessão
        </button>
        <div className="flex text-sm text-center mb-6 mt-2 ">
          <p className=" text-sm text-blue">Não tem uma conta?</p>
          <p className="text-blue-600 ml-1 cursor-pointer" onClick={SignUp}>
            Criar Conta
          </p>
        </div>
      </form>
    </main>
  );
}

export default LoginPage;
