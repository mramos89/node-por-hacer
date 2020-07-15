const opts = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripcion de la tarea'
    }
};

const argv = require('yargs')
    .command('listar', 'Listar elementos por hacer')
    .command('crear', 'Crear un elemento por hacer', opts)
    .command('actualizar', 'Azctualiza el estado completado de una tarea', {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: 'Descripcion de la tarea'
        },
        completado: {
            alias: 'c',
            default: true
        }
    })
    .command('borrar', 'Borrar un elemento por hacer', opts)
    .help()
    .argv;



module.exports = {
    argv
}