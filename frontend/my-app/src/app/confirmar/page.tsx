import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ConfirmEmail = () => {
  const [status, setStatus] = useState<"success" | "error" | "loading" | null>(
    "loading"
  );

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");

    const verifyEmail = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/confirmar?token=${token}`,
          {
            method: "POST",
          }
        );
        if (response.ok) {
          setStatus("success");
          toast.success("Email confirmado com sucesso!");
          window.location.href = "http://localhost:5173/login";
        } else {
          setStatus("error");
          toast.error("Falha ao confirmar email.");
        }
      } catch (err) {
        setStatus("error");
        toast.error("Erro de conexão com o servidor.");
      }
    };
    if (token) {
      verifyEmail();
    } else {
      setStatus("error");
      toast.error("Token inválido.");
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <main className="w-1/5 h-44 border ml-auto mr-auto flex items-center justify-center mt-32 bg-gray-900 rounded-xl text-white">
        {status === "loading" && <span>Confirmando email...</span>}
        {status === "success" && <span>Email confirmado com sucesso!</span>}
        {status === "error" && <span>Não foi possível confirmar o email.</span>}
      </main>
    </>
  );
};

export default ConfirmEmail;
