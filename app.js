const argv = require('./config/yargs').argv;
const colors = require('colors');


const {crearArchivo} = require('./multiplicar/multiplicar');
const {listarTabla} = require('./multiplicar/multiplicar');


let comando = argv._[0];

console.log('algo');

switch(comando){

    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then( archivo =>  console.log(`Archivo creado = `,`${archivo}`.green))
            .catch((err) => console.log(err))
        console.log('crear');
        break;
    
        default:
            console.log('comando no reconocido');
};





