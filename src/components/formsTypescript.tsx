import { ChangeEvent, useState } from "react"

interface FomrState {
  name:string;

}


const MyForm = () => {
  const [formState , setFormState] = useState<FomrState>({name:'',});

  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{ 
    //cuando un proyecto se es grande se generar una reglas 
    // para estos eventos (e) y evitar codigos tangrandes

    setFormState({name: e.target.value})

  }

  return(
    <form action="">
      <input type="text" 
      value={formState.name} 
      onChange={handleChange} 
      />
    </form>
  )
 }