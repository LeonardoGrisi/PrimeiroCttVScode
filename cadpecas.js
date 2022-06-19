let peso = 200;
let QtdPecas = 6;
let nomePeca = "Pneu";

console.log(nomePeca);

if(peso >= 100) {
    console.log("Peso da peça suficiente = " + peso );
} else{
    console.log("Peso da peça insuficiente = " + peso );
}

if(QtdPecas ==10) {
    console.log("Caixa lotada = " + QtdPecas);
}

if(QtdPecas <10) {
    console.log("Espaço suficiente = " + QtdPecas);
}

if(QtdPecas >10) {
    console.log("Limite Excedido = " + QtdPecas);
}

if(nomePeca.length < 3) {
    console.log("Nome inválido, precisa conter mais de 3 caracteres");
} 
