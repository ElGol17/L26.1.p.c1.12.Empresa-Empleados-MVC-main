export interface I_vEmpresa {
  onNuevoEmpleado(callback: () => void): void;
  reportar(totalHombres: number, porcentajeMujeres: number, totalTodos: number): void;
}
