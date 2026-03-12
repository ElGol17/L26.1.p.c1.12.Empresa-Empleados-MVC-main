export interface I_vEmpleado {
  get nombre(): string;
  get sexo(): 'F' | 'M';
  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}