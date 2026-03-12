import Cl_mEmpresa from "../models/Cl_mEmpresa.js";
import { I_vEmpresa } from "../interfaces/I_vEmpresa.js";
import Cl_cEmpleado from "./Cl_cEmpleado.js";

export default class Cl_cEmpresa {
    private mEmpresa: Cl_mEmpresa = new Cl_mEmpresa();
    private vEmpresa: I_vEmpresa;
    private cEmpleado: Cl_cEmpleado;

    constructor(vistaEmpresa: I_vEmpresa, controladorEmpleado: Cl_cEmpleado) {
        this.vEmpresa = vistaEmpresa;
        this.cEmpleado = controladorEmpleado;

        this.vEmpresa.onNuevoEmpleado(() => this.procesar1Empleado());
    }

    private procesar1Empleado() {
        this.cEmpleado.solicitarEmpleado((empleado) => {
            if (empleado !== null) {
                this.mEmpresa.procesarEmpleado(empleado);
                this.vEmpresa.reportar(this.mEmpresa.totalHombres(), 
                    this.mEmpresa.porcentajeMujeres(), 
                    this.mEmpresa.totalTodos());
            }
        });
    }
}