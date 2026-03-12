import { I_vEmpresa } from "../interfaces/I_vEmpresa.js";

export default class Cl_vEmpresa implements I_vEmpresa {
  private lblTotalHombres: HTMLElement;
  private lblPorcentajeMujeres: HTMLElement;
  private lblTotalTodos: HTMLElement;
  private btNuevoEmpleado: HTMLButtonElement;
  private vista: HTMLElement;

  constructor() {
    this.vista = document.getElementById("app-bootstrap") as HTMLElement;
    this.btNuevoEmpleado = document.getElementById("body_btNuevoEmpleado") as HTMLButtonElement;
    this.lblTotalHombres = document.getElementById("body_lblTotalHombres") as HTMLElement;
    this.lblTotalTodos = document.getElementById("body_lblTotalTodos") as HTMLElement;
    this.lblPorcentajeMujeres = document.getElementById("body_lblPorcentajeMujeres") as HTMLElement;
  }
  onNuevoEmpleado(callback: () => void): void {
    this.btNuevoEmpleado.onclick = callback;
  }
  reportar(totalHombres : number, porcentajeMujeres : number, totalTodos : number): void {
    this.lblTotalHombres.innerHTML = totalHombres.toString();
    this.lblPorcentajeMujeres.innerHTML = porcentajeMujeres.toString()
    this.lblTotalTodos.innerHTML = totalTodos.toString();
  }
}