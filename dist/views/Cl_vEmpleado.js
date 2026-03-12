export default class Cl_vEmpleado {
    inNombre;
    inSexo;
    btCancelar;
    btAceptar;
    modal;
    constructor() {
        this.inNombre = document.getElementById("empleado_inNombre");
        this.inSexo = document.getElementById("empleado_inSexo");
        this.btCancelar = document.getElementById("empleado_btCancelar");
        this.btAceptar = document.getElementById("empleado_btAceptar");
        const elementoModal = document.getElementById("empleado");
        this.modal = new bootstrap.Modal(elementoModal);
    }
    get nombre() {
        return this.inNombre.value;
    }
    get sexo() {
        return this.inSexo.value;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    mostrar() {
        this.inNombre.value = "";
        this.inSexo.value = "F";
        this.modal.show();
    }
    ocultar() {
        this.modal.hide();
    }
}
//# sourceMappingURL=Cl_vEmpleado.js.map