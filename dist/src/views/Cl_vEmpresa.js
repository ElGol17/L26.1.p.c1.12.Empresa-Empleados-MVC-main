export default class Cl_vEmpresa {
    lblTotalHombres;
    lblPorcentajeMujeres;
    lblTotalTodos;
    btNuevoEmpleado;
    vista;
    constructor() {
        this.vista = document.getElementById("app-bootstrap");
        this.btNuevoEmpleado = document.getElementById("body_btNuevoEmpleado");
        this.lblTotalHombres = document.getElementById("body_lblTotalHombres");
        this.lblTotalTodos = document.getElementById("body_lblTotalTodos");
        this.lblPorcentajeMujeres = document.getElementById("body_lblPorcentajeMujeres");
    }
    onNuevoEmpleado(callback) {
        this.btNuevoEmpleado.onclick = callback;
    }
    reportar(totalHombres, porcentajeMujeres, totalTodos) {
        this.lblTotalHombres.innerHTML = totalHombres.toString();
        this.lblPorcentajeMujeres.innerHTML = porcentajeMujeres.toString();
        this.lblTotalTodos.innerHTML = totalTodos.toString();
    }
}
//# sourceMappingURL=Cl_vEmpresa.js.map