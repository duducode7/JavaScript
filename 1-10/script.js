function verificarPar(numero){
    if(numero % 2 === 0) {
        // === é estritamente igual, é igual em tipo e conteudo
        console.log('par')
    }else{
        console.log('impar')
    }
}

verificarPar(4);
verificarPar(7);


function calcular (n1,n2){

    const soma = n1 + n2;
    const subtracao = n1 - n2;
    const divisao = n2 !== 0 ? n1/n2: 'Não pode dividir por zero';
    multiplicacao = n1 * n2;

    console.log(soma);
    console.log(subtracao);
    console.log(divisao);
    console.log(multiplicacao);

}

//let n1 = parseFloat(prompt("Digite seu primeiro numero"))
//let n2 = parseFloat(prompt("Digite seu segundo numero"))

//calcular(n1,n2)


let numero = 10;
let daley =0;

while(numero >=1){
    console.log(numero);
    numero--;
}


    
    let original= "JavaScript"
    let invertido = original.split("").reverse().join("")
    console.log(invertido)


function contarCaracteres (palavras) {
    console.log(palavras.length)
}

//contarCaracteres(prompt("Digite uma palavra"))

let carros = {
    marca: "BMW",
    modelo: "320i",
    ano: "2024"
}

console.log(carros.marca);
console.log(carros.modelo);
console.log(carros.ano);

function mensagemPersonalizada(nome, mensagem = "Olá!") {
    console.log(`${mensagem} ${nome}`);
}


mensagemPersonalizada("Éwerton");

mensagemPersonalizada("Éwerton", "Boa noite!");






function media(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

console.log(media(7, 8, 9));






for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        console.log(`${i}: Múltiplo de 3`);
    } else {
        console.log(`${i}: Não múltiplo de 3`);
    }
}





function verificarPalindromo(palavra) {
    let invertida = palavra.split('').reverse().join('');
    return palavra === invertida;
}


console.log(verificarPalindromo("hello"));

console.log(verificarPalindromo("arara"));