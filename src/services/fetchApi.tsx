import { useEffect, useState } from "react";

const [Res , setRes] = useState()

useEffect(()=>{
    try{
        fetch('http://localhost:3000').then(
            res => {
              return  res.json()
            }
        ).then(
            data => setRes(data)
        )
    }
    catch{
        console.log('algo deu errado')
    }
},[])

