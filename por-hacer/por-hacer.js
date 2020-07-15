const fs = require('fs');

let listadoPorHacer = [];

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion = descripcion
    });

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar');
        console.log('el JSON fue creado con éxito');
    });
};

const crear = (desc) => {
    cargarDB();
    let porHacer = {
        descripcion: desc,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json')

    } catch (error) {
        listadoPorHacer = [];
    }
}



module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}