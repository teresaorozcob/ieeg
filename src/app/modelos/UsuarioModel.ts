export class UsuarioModel {


    matricula: String = '1837';
    apellido1: String = 'Méndez';
    apellido2: String = 'Torres';
    nombre: String = 'Rosario';
    correo: String = 'rosario.mendezt@sabes.edu.mx';

    nombreNA: String = ''
    nombreAN: String = ''

  constructor(
    /*
    public id: number = 1837,
    public apellido1: string,
    public apellido2: string,
    public nombre: string,
    public correo: string
    */
  ) {

    this.nombreNA = this.nombre + ' ' + this.apellido1 + ' ' + this.apellido2
    this.nombreAN = this.apellido1 + ' ' + this.apellido2 + ' ' + this.nombre

  }
}
