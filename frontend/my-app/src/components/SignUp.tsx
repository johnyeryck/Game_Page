"use client";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
interface CreateProps {
  onClick: () => void;
  Signin?: () => void;
}

function CreateAccount({ onClick, Signin }: CreateProps) {
  const [showPassword, setShow] = useState<boolean>(false);
  const [buttonMessage, setMessage] = useState<string>("Criar Conta");

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm();

  const onSubmit = async (e: any) => {
    setMessage("carregando...");

    const { data } = await axios.post(
      "http://localhost:4000/signup",
      {
        email: e.email,
        password: e.senha,
        username: e.User,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (data.status != 201) throw new Error("Algum erro ai");
    console.log(data);
  };

  return (
    <section className="text-white backdrop-blur-2xl w-1/4 h-auto mr-auto ml-auto rounded-2xl mt-20 absolute right-[40%]">
      <div className="flex flex-row-reverse">
        <button
          type="button"
          onClick={onClick}
          aria-label="Fechar modal"
          className="hover:opacity-75 transition-opacity"
        >
          <IoIosClose className="size-8" />
        </button>
      </div>

      <header className="mt-3">
        <h1 className="font-bold text-center">Crie sua Conta</h1>
      </header>

      <form className="mt-10 ml-14" onSubmit={handleSubmit(onSubmit)}>
        {/* Campo Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="font-bold ml-2 opacity-75">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="  border-b outline-0 border-white px-3  w-3/4 mt-2"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-400 text-sm">
              Esse Campo é Obrigatório
            </span>
          )}
        </div>

        {/* Campo Senha */}
        <div className="mt-5   relative">
          <label htmlFor="senha" className="font-bold ml-2 opacity-75">
            Password
          </label>

          <input
            id="senha"
            type={showPassword ? "text" : "password"}
            className="border-b outline-0 border-white px-3  w-3/4 mt-2"
            {...register("senha", {
              required: { value: true, message: "Esse campo é obrigatório" },
              minLength: 4,
            })}
          />
          <button
            type="button"
            onClick={() => setShow(!showPassword)}
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            className=" pl-1  cursor-pointer transition-all"
          >
            {showPassword ? (
              <EyeOff size={20} color="gray" />
            ) : (
              <Eye size={20} color="gray" />
            )}
          </button>
        </div>
        {errors.senha && (
          <span className="text-red-400 text-sm">Esse Campo é Obrigatório</span>
        )}

        {/* Campo Username */}
        <div className="mt-5 flex flex-col">
          <label htmlFor="username" className="font-bold ml-2 opacity-75">
            Username
          </label>
          <input
            id="username"
            type="text"
            className=" border-b outline-0 border-white px-3  w-3/4 mt-2"
            {...register("User", {
              required: { value: true, message: "Esse campo é obrigatório" },
              minLength: 4,
            })}
          />
          {errors.User && (
            <span className="text-red-400 text-sm">
              Esse Campo é Obrigatório
            </span>
          )}
        </div>

        {/* Botão Submit */}
        <button
          type="submit"
          className="bg-purple-600 p-2 rounded-xl mt-3 w-3/4 cursor-pointer hover:shadow-2xl shadow-purple-700 font-bold transition-shadow"
        >
          {isLoading === true ? "Carregando" : "Criar Conta"}
        </button>

        {/* Link para Login */}
        <div className="flex gap-2 mt-6 px-3 font-bold mb-6">
          <p>Já tem uma conta?</p>
          <button
            type="button"
            onClick={Signin}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Entrar
          </button>
        </div>
      </form>
    </section>
  );
}

export default CreateAccount;
