import Cl_mEmpleado from "./Cl_mEmpleado.js";

export default class Cl_mEmpresa {
    private acHombresTrabajando: number;
    private acMujeresTrabajando: number;

    constructor() {
        this.acHombresTrabajando = 0;
        this.acMujeresTrabajando = 0;
    }

    procesarEmpleado(e: Cl_mEmpleado): void {
        if (e.sexo == 'F') {
            this.acMujeresTrabajando += 1;
        } else if (e.sexo == 'M') {
            this.acHombresTrabajando += 1;
        }
    }

    totalHombres(): number {
        return this.acHombresTrabajando;
    }

    porcentajeMujeres(): number {
        let total = this.acHombresTrabajando + this.acMujeresTrabajando;
        if (total == 0 || this.acMujeresTrabajando == 0) return 0;
        return (this.acMujeresTrabajando / total) * 100;
    }

    totalTodos(): number {
        return this.acHombresTrabajando + this.acMujeresTrabajando;
    }
}
