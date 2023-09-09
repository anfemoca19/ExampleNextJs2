import {FC} from 'react'
interface saludarProps{
  name:string;
}
const saludar = ({name}:saludarProps) => {
  return <div>Hola, {name}</div>
}


// otra forma

const saludar2: FC <saludarProps> = ({name}) => {
  return <div>Hola, {name}</div>
}