//Esto agregara a la pantalla el valor del boton de la calculadora que toquemos
function agregar(valor){
    document.getElementById('pantalla').value += valor;
}
//Esta accion vaciara en contenido de la pantalla
function borrar(){
    document.getElementById('pantalla').value = '';
}
//Esta accion evaluara el valor de la pantalla y ejecutara los cambios
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
}