// Escolha o programa que quer executar aqui
let programa = 15;

// Variaveis programa 1 a 9 e 12 e 13
let a = -11;
let b = 130;
let c = 60;

// Variavel programa 10
let piece = "Pawn";
let pieceresult = piece.toLowerCase();

// Variavel programa 11
let nota = 14;

switch(programa){
    case 1:
        console.log(a + b);
        break;
    case 2:
        console.log(a - b);
        break;
    case 3:
        console.log(a / b);
        break;
    case 4:
        console.log(a * b);
        break;
    case 5:
        console.log(a % b);
        break;
    case 6:
        if(c > b){
            console.log(c);
        }
        break;
    case 7:
        if(a > b && a > c){
            console.log(a);
        }else if(b > a && b > c){
            console.log(b);
        }else if(c > a && c > b){
            console.log(c);
        }
        break;
    case 8:
        if(a > 0){
            console.log("positive");
        }else if(a < 0){
            console.log("negative");
        }else {
            console.log("zero");
        }
        break;
    case 9:
        if(a + b + c == 180 && a > 0 && b > 0 && c > 0){
            console.log(true)
        }else{
            console.log(false)
        }
        break;
    case 10:
        if(pieceresult === "king"){
            console.log("One square, any direction")
        }else if(pieceresult === "queen"){
            console.log("Any amount of squares, any direction")
        }else if(pieceresult === "rook"){
            console.log("Any amount of squares, vertically or horizontally")
        }else if(pieceresult === "bishop"){
            console.log("Any amount of squares, diagonally")
        }else if(pieceresult === "knight"){
            console.log("L shape, any direction, 2 squares")
        }else if(pieceresult === "pawn"){
            console.log("One square foward or two squares foward if not moved yet.")
        }else{
            console.log("Piece non-existent.")
        }
        break;
    case 11:
        if(nota >= 90 && nota <= 100){
            console.log("Nota A.")
        }else if(nota >= 80 && nota < 90){
            console.log("Nota B.")
        }else if(nota >= 70 && nota < 80){
            console.log("Nota C.")
        }else if(nota >= 60 && nota < 70){
            console.log("Nota D.")
        }else if(nota >= 50 && nota < 60){
            console.log("Nota E.")
        }else if(nota <= 50 && nota >= 0){
            console.log("Nota F.")
        }else{
            console.log("Nota invalida.")
        }
        break;
    case 12:
        if(a % 2 == 0 || b % 2 == 0 || c % 2 == 0){
            console.log(true)
        }else{
            console.log(false)
        }
        break;
    case 13:
        if(a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0){
            console.log(true)
        }else{
            console.log(false)
        }
        break;
    case 14:
        const valorCustoBruto = 1000;
        const valorImposto = valorCustoBruto * 0.20;
        const valorCustoTotal = valorCustoBruto + valorImposto
        const valorVenda = 1500;
        const lucro = (valorVenda - valorCustoTotal) * 1000

        if(valorCustoBruto  > 0 || valorVenda > 0){
        console.log(lucro)}
        break;

    case 15:
        const salarioBruto = 3000;
        let inss;

        if(salarioBruto > 0 && salarioBruto < 1556.94){
            inss = salarioBruto * 0.08;
        }else if(salarioBruto >= 1556.94 && salarioBruto < 2594.92){
            inss = salarioBruto * 0.09;
        }else if(salarioBruto >= 2594.92 && salarioBruto < 5189.82){
            inss = salarioBruto * 0.11;
        }else if(salarioBruto >= 5189.82){
            inss = 570.88;
        }

        let salarioMenosInss = salarioBruto - inss;
        let ir;
        
        if(salarioMenosInss < 1903.98){
            ir = 0;
        } else if(salarioMenosInss >= 1903.99 && salarioMenosInss < 2826.65){
            ir = (salarioMenosInss * 0.075) - 142.80
        } else if(salarioMenosInss >= 2826.65 && salarioMenosInss < 3751.05){
            ir = (salarioMenosInss * 0.15) - 354.80
        } else if(salarioMenosInss >= 3751.05 && salarioMenosInss < 4664.68){
            ir = (salarioMenosInss * 0.225) - 636.13
        } else if(salarioMenosInss >= 4664.68){
            ir = (salarioMenosInss * 0.275) - 869.36
        }
        
        let salarioLiquidoFinal = salarioMenosInss - ir;

        if (salarioBruto < 0){
            console.log("Tá com divída?")
        } else{
            console.log(salarioLiquidoFinal.toFixed(2))
        }
        break;
}

