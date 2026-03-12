export default class Cl_vEmpresa {
    lblTotalHombres;
    lblPorcentajeMujeres;
    lblTotalTodos;
    btNuevoArticulo;
    constructor() {
        this.btNuevoArticulo = document.getElementById("body_btNuevoArticulo");
        this.lblTotalHombres = document.getElementById("body_lblTotalHombres");
        this.lblPorcentajeMujeres = document.getElementById("body_lblPorcentajeMujeres");
        this.lblTotalTodos = document.getElementById("body_lblTotalTodos");
    }
    reportar({ totalHombres, porcentajeMujeres, totalTodos }) {
        this.lblTotalHombres.innerHTML = `${totalHombres}`;
        this.lblPorcentajeMujeres.innerHTML = `${porcentajeMujeres}`;
        this.lblTotalTodos.innerHTML = `${totalTodos}`;
    }
}
//# sourceMappingURL=Cl_vEmpresa.js.map