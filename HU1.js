let curso1 = (id, nombre, duracion, valor, callback)=>{
    setTimeout(function(){
    callback(id,nombre, duracion, valor);
}, 0);
}

let curso2 = (id, nombre, duracion, valor, callback)=>{
    setTimeout(function(){
    callback(id, nombre, duracion, valor);
}, 2000);
}

let curso3 = (id, nombre, duracion, valor, callback)=>{
    setTimeout(function(){
    callback(id, nombre, duracion, valor);
}, 4000);
}

curso1(001,'inglés','1 semana', 1000000,function(id,nombre, duracion, valor){
    console.log('Curso' + '\n' + 'ID: ' + id + '\nNombre: '+ nombre + 
    '\nDuración: ' + duracion + '\nValor: ' + valor);});

curso2(002,'portugés','2 meses', 2000000,function(id,nombre, duracion, valor){
    console.log('Curso' + '\n' + 'ID: ' + id + '\nNombre: '+ nombre + 
    '\nDuración: ' + duracion + '\nValor: ' + valor);});

curso3(003,'francés','3 año', 3000000,function(id,nombre, duracion, valor){
    console.log('Curso' + '\n' + 'ID: ' + id + '\nNombre: '+ nombre + 
    '\nDuración: ' + duracion + '\nValor: ' + valor);});

