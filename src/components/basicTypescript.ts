const number:number = 1
const str: string = 'sss'
const isActive: boolean = true

// Tipos complejos

// Arrays

const numeros: number [] = [1,2,3]
const palabras: string[] = ["sd",'sdf']

// Tuplas

const tupla: [string,number] = [ 'juan' ,24]

// funciones
function suma( x:number, y:number) :number {
  return x + y;

}

// myFunction tipos genericos permite usar cualquier tipo de datos
function myFunction<T>(value: T){
  return value;
}

const resultado = myFunction(42) //Typescript infiere el tipo de dato

const resultado2 = myFunction({a:1}) 

// Especificando el tipo generico ---- muy usado 

const resultado3 = myFunction<string>('hello')


// Herencia

interface Persona {

  name : string,
  age? : number; // cuando usamos ? es opcional

}

interface Usuario extends Persona {
  password :string,
}
const usuario: Usuario = {
  password : 'number'
}