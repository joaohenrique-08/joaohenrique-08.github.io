let array = [];

console.log("tipo do meu array: " + typeof(array));

function adicionarNumero(){
    let input = document.querySelector('#numero');
    let n = parseInt(input.value);
    let exibirarray = document.querySelector('#exibir-array');


    if (isNaN (n) ) {
        alert('digite um número válido')
        return;
    }

    array.push(n);

input.value = '';

console.log(array);
    
exibirarray.innerHTML = `Array: ${array} <br/> Tamanho do array: ${array.length}`;
}


