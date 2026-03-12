export default class Cl_vEmpresa {
  lblTotalHombres: HTMLInputElement;
  lblPorcentajeMujeres: HTMLInputElement;
  lblTotalTodos: HTMLInputElement;
  btNuevoArticulo: HTMLButtonElement;
  constructor() {
    this.btNuevoArticulo = document.getElementById(
      "body_btNuevoArticulo",
    ) as HTMLButtonElement;
    this.lblTotalHombres = document.getElementById(
      "body_lblTotalHombres",
    ) as HTMLInputElement;
    this.lblPorcentajeMujeres = document.getElementById(
      "body_lblPorcentajeMujeres",
    ) as HTMLInputElement;
    this.lblTotalTodos = document.getElementById(
      "body_lblTotalTodos",
    ) as HTMLInputElement;
  }
  reportar({ totalHombres, porcentajeMujeres, totalTodos }: 
        { totalHombres: number, porcentajeMujeres: number, totalTodos: number }): void {
    this.lblTotalHombres!.innerHTML = `${totalHombres}`;
    this.lblPorcentajeMujeres!.innerHTML = `${porcentajeMujeres}`;
    this.lblTotalTodos!.innerHTML = `${totalTodos}`;
  }
}
