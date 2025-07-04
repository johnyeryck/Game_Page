import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import Nav from "@/components/Nav";
function LoginPage() {
  const [showPass, setvalue] = useState<boolean>(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e: any) => {
    try {
      const dados = { email: e.email, senha: e.senha };
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Login realizado com sucesso");
        localStorage.setItem("isLoged", "true");
        localStorage.setItem("user", data.data);
        window.location.href = "http://localhost:5173";
      }
    } catch (err) {
      alert("Erro ao fazer login");
    }
  };
  return (
    <header>
      <Nav />
    <main className="text-white border-2 border-gray-500 w-1/4  h-auto mr-auto ml-auto rounded-sm mt-32">
      <h1 className="font-bold text-center   ">Login</h1>
      <form className="mt-10 ml-14 " onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label className="font-bold  opacity-75 size-9 ">Email</label>
          <input
            className="bg-gray-600 rounded-sm px-3 w-3/4 mr-auto "
            type="email"
            {...register("email", { required: true })}
            />
          {errors.email && (
            <p className="text-red-400">Esse Campo é Obrigatório</p>
          )}
        </div>
        <div className="mt-3 relative">
          <label className="font-bold   opacity-75 ">Password</label>
          <input
            className="bg-gray-600 rounded-sm mt-2 w-3/4 mr-auto ml-auto px-3 "
            type={showPass ? "text" : "password"}
            {...register("senha", {
              required: { value: true, message: "Esse campo é obrigat" },
              minLength: 4,
            })}
            />
          {errors.senha && (
            <p className="text-red-400 text-sm mt-2">
              *Esse Campo é Obrigatório
            </p>
          )}
          <button
            type="button"
            onClick={() => setvalue(!showPass)}
            className="bg-transparent right-20 transition-all bottom-6 absolute cursor-pointer"
            >
            {" "}
            {showPass ? <EyeOff size={20} color="white" /> : <Eye size={20} />}
          </button>
          <a href="">
            <p className="text-sm text-blue-400">Esqueceu a senha?</p>
          </a>
        </div>
        <button
          className=" border-2 border-purple-600  p-2 rounded-xl mt-3 w-3/4 cursor-pointer hover:bg-purple-700 font-bold"
          type="submit"
          >
          Iniciar Sessão
        </button>
        <div className="flex text-sm   font-bold mb-6 ">
          <p className=" mt-4 mr-1">Não tem uma conta?</p>
          <a
            href="http://localhost:5173/createAccount"
            className="text-blue-400  mt-4"
            >
            Criar Conta
          </a>
        </div>
      </form>
    </main>
  </header>
  );
}

export default LoginPage;