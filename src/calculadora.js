/**
 * Toda a execução do seu programa deve estar dentro dessa função. 
 * Pode criar outras funções e outros scripts na pasta src, mas o principal deve estar nessa função!
 */
function initCalculadora(){
    
    var numero1 = ""
var numero2 = ""
var operacao = ""
var limpar = false

    document.getElementsByClassName("numero")[0].onclick = function() {
        if (limpar == true) {
            document.getElementById("resultado").value = ""
            limpar = false
        }
        document.getElementById("resultado").value += 9
        numero1 += 9
    }

    document.getElementsByClassName("numero")[1].onclick = function() {
        if (limpar == true) {
            document.getElementById("resultado").value = ""
            limpar = false
        }
            document.getElementById("resultado").value += 8
            numero1 += 8
    }

    document.getElementsByClassName("numero")[2].onclick = function() {
        if (limpar == true) {
            document.getElementById("resultado").value = ""
            limpar = false
        }
        document.getElementById("resultado").value += 7
        numero1 += 7
    }

    document.getElementsByClassName("numero")[3].onclick = function() {
        if (limpar == true) {
            document.getElementById("resultado").value = ""
            limpar = false
        }
        document.getElementById("resultado").value += 6
        numero1 += 6
    }

    document.getElementsByClassName("numero")[4].onclick = function() {
        if (limpar == true) {
            document.getElementById("resultado").value = ""
            limpar = false
        }
        document.getElementById("resultado").value += 5
        numero1 += 5
    }

    document.getElementsByClassName("numero")[5].onclick = function() {
        if (limpar == true) {
            document.getElementById("resultado").value = ""
            limpar = false
        }
        document.getElementById("resultado").value += 4
        numero1 += 4
    }

    document.getElementsByClassName("numero")[6].onclick = function() {
        if (limpar == true) {
            document.getElementById("resultado").value = ""
            limpar = false
        }
        document.getElementById("resultado").value += 3
        numero1 += 3
    }

    document.getElementsByClassName("numero")[7].onclick = function() {
        if (limpar == true) {
            document.getElementById("resultado").value = ""
            limpar = false
        }
        document.getElementById("resultado").value += 2
        numero1 += 2
    }

    document.getElementsByClassName("numero")[8].onclick = function() {
        if (limpar == true) {
            document.getElementById("resultado").value = ""
            limpar = false
        }
        document.getElementById("resultado").value += 1
        numero1 += 1
    }

    document.getElementsByClassName("numero")[9].onclick = function() {
        if (limpar == true) {
            document.getElementById("resultado").value = ""
            limpar = false
        }
        document.getElementById("resultado").value += 0
        numero1 += 0
    }

    document.getElementsByClassName("numero")[10].onclick = function() {
        if (!numero1.includes(".") && numero1 != "") {
        document.getElementById("resultado").value += "."
        numero1 += "."
        }
    }

document.getElementsByClassName("somar")[0].onclick = function() {
    if (numero1 != "") {
    operacao = 'A' 
    document.getElementById("resultado").value += "+"
    numero2 = numero1
    numero1 = ""
    }
}

document.getElementsByClassName("subtrair")[0].onclick = function() {
    if (numero1 != "") {
    operacao = 'S' 
    document.getElementById("resultado").value += "-"
    numero2 = numero1
    numero1 = ""
    }
}

document.getElementsByClassName("multiplicar")[0].onclick = function() {
    if (numero1 != "") {
    operacao = 'M' 
    document.getElementById("resultado").value += "*"
    numero2 = numero1
    numero1 = ""
    }
}

document.getElementsByClassName("dividir")[0].onclick = function() {
    if (numero1 != "") {
    operacao = 'D' 
    document.getElementById("resultado").value += "/"
    numero2 = numero1
    numero1 = ""
    }
}

document.getElementsByClassName("resultar")[0].onclick = function() {
    if (operacao == "") {}
    else if (operacao != "" && numero1 == "") {
        document.getElementById("resultado").value = "Erro de operação"
        limpar = true
    }
    else {
        document.getElementById("resultado").value = operacoesBasicas(operacao, parseFloat(numero2), parseFloat(numero1))
        numero1 = ""
        numero2 = ""
        console.log(numero1)
        console.log(numero2)
        limpar = true
        }
}


function operacoesBasicas(operacao, numero1, numero2) {
    if(operacao == 'A') {
        return numero1 + numero2
    }

    if(operacao == 'S') {
        return numero1 - numero2
    }

    if(operacao == 'M') {
        return numero1 * numero2
    }

    if(operacao == 'D') {
        if(numero2 == 0) { 
            return NaN
        }
        else {
        return numero1 / numero2
        }
    }

    if(operacao == 'P') {
        return numero1 ** numero2
    }
}
}