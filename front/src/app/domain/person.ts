import { Departement } from "./departement";

export interface Person {
  id?:number;
  firstname?:string;
  lastname?:string;
  age?:number;
  department?:Departement;
  created_at?:string;
  updated_at?:number;
}
