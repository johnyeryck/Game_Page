import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
uuidv4();
function CreateAccount() {
  const [showPassword, setShow] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e: any) => {
    const dados = {
      email: e.email,
      senha: e.senha,
      id: uuidv4(),
      CanLoginIN: true,
      user: e.User,
    };
    await fetch("http://localhost:3000/cadastros", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    }).then((response) => {
      if (response.ok) {
        alert("Conta criada com sucesso");
        window.location.href = "http://localhost:5173";
        localStorage.setItem("isLoged", "true");
      }
      if (response.status === 400) {
        alert("Email já cadastrado");
      }
    });
  };
  console.log(errors[0]?.type);
  return (
    <main className="text-white border-2 border-gray-500 w-1/4  h-auto mr-auto ml-auto rounded-sm mt-32">
      <header>
        <h1 className="font-bold text-center  mt-3 ">Crie sua Conta</h1>
      </header>
      <form className="mt-10 ml-14 " onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <div className="flex flex-col">
            <label className="font-bold ml-2 opacity-75 size-9 ">Email</label>
            <input
              className="bg-gray-600 rounded-sm px-3 w-3/4 mr-auto "
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-400 text-sm">Esse Campo é Obrigatório</p>
            )}
          </div>
        </fieldset>
        <fieldset>
          <div className="mt-5 relative">
            <label className="font-bold ml-2  opacity-75 " htmlFor="senha">
              Password
            </label>
            <input
              className="bg-gray-600 rounded-sm px-3 w-3/4 mr-auto ml-auto mt-2 "
              id="senha"
              {...register("senha", {
                required: { value: true, message: "Esse campo é obrigat" },
                minLength: 4,
              })}
              type={showPassword ? "text" : "password"}
            />
            <button
              type="button"
              onClick={() => setShow(!showPassword)}
              className="bg-transparent right-20 transition-all bottom-6 absolute cursor-pointer"
            >
              {" "}
              {showPassword ? (
                <EyeOff size={20} color="gray" />
              ) : (
                <Eye size={20} />
              )}
            </button>

            {errors.senha && (
              <p className="text-red-400 text-sm">Esse Campo é Obrigatório</p>
            )}
          </div>
        </fieldset>
        <div className="mt-5 flex flex-col">
          <label className="font-bold ml-2  opacity-75">Username</label>
          <input
            className="bg-gray-600 rounded-sm px-3 w-3/4 mt-2"
            {...register("User", {
              required: { value: true, message: "Esse campo é obrigat" },
              minLength: 4,
            })}
          />

          {errors.senha && (
            <p className="text-red-400 text-sm ">Esse Campo é Obrigatório</p>
          )}
        </div>
        <button
          className=" border-2 border-purple-600 p-2 rounded-xl mt-3 w-3/4 cursor-pointer hover:bg-purple-700 font-bold "
          type="submit"
        >
          Criar Conta
        </button>
        <div className="flex mt-6  px-3 font-bold mb-6">
          <p>Já tem uma conta?</p>
          <a href="http://localhost:5173/login" className="text-blue-400 ml-1">
            Entrar
          </a>
        </div>
      </form>
    </main>
  );
}

export default CreateAccount;
