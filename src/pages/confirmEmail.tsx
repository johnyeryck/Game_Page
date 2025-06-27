import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const ConfirmEmail = ()=>{
    const [message, setMessage] = useState<boolean>()
     useEffect(()=>{
        const token = new URLSearchParams(window.location.search).get('token')

         const f = async ()=>{
           await fetch(`http://localhost:3000/confirmar?token=${token}` , {
            method : "POST"
           })
           toast.success("E-mail Confirmado")
            window.location.href = "http://localhost:5173/login";

         }
         f()
 })
    return(
        <>
        <ToastContainer />
        <div className="w-1/5 h-44 border ml-auto mr-auto">
        </div>
        </>
    )
}

export default ConfirmEmail;