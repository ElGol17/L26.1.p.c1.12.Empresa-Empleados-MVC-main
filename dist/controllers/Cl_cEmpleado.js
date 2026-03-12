import Cl_mEmpleado from "../models/Cl_mEmpleado.js";
export default class Cl_cEmpleado {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
    solicitarEmpleado(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        this.callback(new Cl_mEmpleado({ nombre: this.vista.nombre, sexo: this.vista.sexo }));
        this.vista.ocultar();
    }
}
//# sourceMappingURL=Cl_cEmpleado.js.map