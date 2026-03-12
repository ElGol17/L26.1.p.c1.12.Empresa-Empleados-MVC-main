declare var bootstrap: any;
export default class Cl_vEmpleado {
    inNombre: HTMLInputElement;
    inSexo: HTMLInputElement;
    btCancelar: HTMLButtonElement;
    btAceptar: HTMLButtonElement;
    modal: any;
    constructor() {
            this.inNombre = document.getElementById("empleado_inNombre") as HTMLInputElement;
            this.inSexo = document.getElementById('empleado_inSexo') as HTMLInputElement
            this.btCancelar = document.getElementById(
                "empleado_btCancelar",
            ) as HTMLButtonElement;
            this.btAceptar = document.getElementById(
                "empleado_btAceptar",
            ) as HTMLButtonElement;
            const elementoModal = document.getElementById("empleado");

            this.modal = new bootstrap.Modal(elementoModal);
            this.mostrar();
    }
    get nombre(): string {
        return this.inNombre.value;
    }
    set nombre(nombre: string) {
        this.inNombre.value = nombre;
    }
    get sexo(): string {
        return this.inSexo.value;
    }
    set sexo(sexo: string) {
        this.inSexo.value = sexo;
    }
    mostrar(): void {
        this.modal.show();
    }
    ocultar(): void {
        this.modal.hide();
    }
}
