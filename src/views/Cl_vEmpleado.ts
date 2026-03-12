import { I_vEmpleado } from "../interfaces/I_vEmpleado.js";
declare var bootstrap: any;

export default class Cl_vEmpleado implements I_vEmpleado {
  private inNombre: HTMLInputElement;
  private inSexo: HTMLSelectElement;
  private btCancelar: HTMLButtonElement;
  private btAceptar: HTMLButtonElement;
  private modal: any;

  constructor() {
    this.inNombre = document.getElementById("empleado_inNombre") as HTMLInputElement;
    this.inSexo = document.getElementById("empleado_inSexo") as HTMLSelectElement;
    this.btCancelar = document.getElementById("empleado_btCancelar") as HTMLButtonElement;
    this.btAceptar = document.getElementById("empleado_btAceptar") as HTMLButtonElement;
    const elementoModal = document.getElementById("empleado");
    this.modal = new bootstrap.Modal(elementoModal);
  }
  get nombre(): string {
    return this.inNombre.value;
  }
  get sexo(): 'F' | 'M' {
    return this.inSexo.value as 'F' | 'M';
  }
  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }
  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }
  mostrar(): void {
    this.inNombre.value = ""; 
    this.inSexo.value = "F";
    this.modal.show();
  }
  ocultar(): void {
    this.modal.hide();
  }
}