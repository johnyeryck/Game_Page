import { openDB, DBSchema } from "idb"
interface Mydatabase extends DBSchema{
    jogos : {
        key: number,
        
        value : {
            id?: number,
            gamename? : string
        }

    }

}

export const dbPromise = openDB<Mydatabase>('IndexDB', 1 ,{
        upgrade(db){
          db.createObjectStore('jogos',{keyPath : 'id'})
        }
      })


export const RemoveDb = async (id : number)=>{
  const db = await dbPromise
  await  db.delete("jogos" , id)
}
