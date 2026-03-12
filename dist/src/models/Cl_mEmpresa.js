export default class Cl_mEmpresa {
    acHombresTrabajando;
    acMujeresTrabajando;
    constructor() {
        this.acHombresTrabajando = 0;
        this.acMujeresTrabajando = 0;
    }
    procesarEmpleado(e) {
        if (e.sexo == 'F') {
            this.acMujeresTrabajando += 1;
        }
        else if (e.sexo == 'M') {
            this.acHombresTrabajando += 1;
        }
    }
    totalHombres() {
        return this.acHombresTrabajando;
    }
    porcentajeMujeres() {
        let total = this.acHombresTrabajando + this.acMujeresTrabajando;
        if (total == 0 || this.acMujeresTrabajando == 0)
            return 0;
        return (this.acMujeresTrabajando / total) * 100;
    }
    totalTodos() {
        return this.acHombresTrabajando + this.acMujeresTrabajando;
    }
}
//# sourceMappingURL=Cl_mEmpresa.js.map