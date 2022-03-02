export interface exchange {
  base:string,
  date:string,
  rates: {[key:string]:number}[],
  success:boolean,
  timestamp:string
}
