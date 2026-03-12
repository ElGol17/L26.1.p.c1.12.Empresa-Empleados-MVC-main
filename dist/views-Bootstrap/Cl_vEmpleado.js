export default class Cl_vEmpleado {
    inNombre;
    inSexo;
    btCancelar;
    btAceptar;
    modal;
    constructor() {
        this.inNombre = document.getElementById("empleado_inNombre");
        this.inSexo = document.getElementById('empleado_inSexo');
        this.btCancelar = document.getElementById("empleado_btCancelar");
        this.btAceptar = document.getElementById("empleado_btAceptar");
        const elementoModal = document.getElementById("empleado");
        this.modal = new bootstrap.Modal(elementoModal);
        this.mostrar();
    }
    get nombre() {
        return this.inNombre.value;
    }
    set nombre(nombre) {
        this.inNombre.value = nombre;
    }
    get sexo() {
        return this.inSexo.value;
    }
    set sexo(sexo) {
        this.inSexo.value = sexo;
    }
    mostrar() {
        this.modal.show();
    }
    ocultar() {
        this.modal.hide();
    }
}
//# sourceMappingURL=Cl_vEmpleado.js.map