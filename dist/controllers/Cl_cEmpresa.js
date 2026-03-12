import Cl_mEmpresa from "../models/Cl_mEmpresa.js";
export default class Cl_cEmpresa {
    mEmpresa = new Cl_mEmpresa();
    vEmpresa;
    cEmpleado;
    constructor(vistaEmpresa, controladorEmpleado) {
        this.vEmpresa = vistaEmpresa;
        this.cEmpleado = controladorEmpleado;
        this.vEmpresa.onNuevoEmpleado(() => this.procesar1Empleado());
    }
    procesar1Empleado() {
        this.cEmpleado.solicitarEmpleado((empleado) => {
            if (empleado !== null) {
                this.mEmpresa.procesarEmpleado(empleado);
                this.vEmpresa.reportar(this.mEmpresa.totalHombres(), this.mEmpresa.porcentajeMujeres(), this.mEmpresa.totalTodos());
            }
        });
    }
}
//# sourceMappingURL=Cl_cEmpresa.js.map