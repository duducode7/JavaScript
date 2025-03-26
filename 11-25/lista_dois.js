function atividade11(verificarSinal) {
    if (verificarSinal > 0) {
        console.log("Positivo");
    } else if (verificarSinal < 0) {
        console.log("Negativo");
    } else {
        console.log("Zero");
    }
}
//atividade11(-4);   
//atividade11(17);   
//atividade11(0);  

function atividade12(converterTemperatura){
    console.log(converterTemperatura * 1.8 + 32 + ("°F")) 
}

//atividade12(18)

let soma = 0; 
let i = 1;   

while (i <= 100) { 
    soma += i;     
    i++;           
}

//console.log("A soma dos números de 1 até 100 é: " + soma); 

function atividade14(){
    console.log("Substituir palavra Azul por Vermelho")
    let texto = prompt('Digite uma frase ou texto com a palavra azul:'):
    console.log(texto.replace(/azul/g, "vermelho"));
}

function atividade21(){
    console.log("Soma dos elementos de um Array");
    let valores = prompt("Digite números separados por vírgula:").split(",").map(Number);
    console.log("Soma:", valores.reduce((acc,val) => acc + val, 0));
}

function atividade24(){
    
}