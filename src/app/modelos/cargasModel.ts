export class CargasModel {
    constructor(
        public nombre_original: String,
        public fecha_archivo: String, //Date
        public nombre_fileApi: String,
        public tamanio: String, //Number, 
        public tipo: String,       
        public periodo: String,
        public proceso: String,   
        public fecha_carga: String //Date
    ){}
    
}
