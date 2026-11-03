import { useEffect, useState } from "react";

function Phones(){

     type Phone = {
          id: number;
          nev: string;
          gyarto: string;
          ar: number;
          memoria: number
     }

     const [phones, setPhones] = useState<Phone[]>([])
     const [sort, setSort] = useState(false)
     const URL = "/phones.json"


     useEffect( () => {
          async function adatokBetoltese(){
          try{
               const valasz = await fetch(URL)
               const adatok: Phone[] = await valasz.json()
               setPhones(adatok.sort((a, b) => a.ar - b.ar));

          }catch(err){
               console.error(err)
          }
     }
     adatokBetoltese()
     }, [])

     
    useEffect(() => {
        setPhones(phones.toReversed())
    }, [sort]);

     
     return(
          <>
               <h2>Telefon lista</h2>
               <table>
                    <thead>
                         <th>id</th>
                         <th>nev</th>
                         <th>gyarto</th>
                         <th>ar</th>
                         <th>memoria</th>
                    </thead>
                         {phones.map((phone) => (
                              <tr key={phone.id}>
                                   <td>{phone.id}</td>
                                   <td>{phone.nev}</td>
                                   <td>{phone.gyarto}</td>
                                   <td>{phone.ar}</td>
                                   <td>{phone.memoria}</td>
                              </tr>
                              ))}
               </table>

               <button onClick={() => {setSort(!sort)}}>Sort</button>
          </>
     )
}

export default Phones