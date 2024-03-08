var  ValorHora = Number, salmin = 450.00, SalInicial=0, alimento, Salfinal
function calcular() {
    const turno = document.getElementById("turnoa").value
    const ID = document.getElementById("ID").value
    const horas = document.getElementById("horas").value
    const cargo = document.getElementById("cargo").value
    const HTLM = document.getElementById('HTLM')

    console.log(turno)
    console.log(ID)
    console.log(horas)
    console.log(cargo)
    if(turno != "M" && turno != "V" && turno != "N"){
        alert(`Digite "M" para o horário Matutino, "V" para o horário Vespertino, e "N" para horário Noturno \nem letras MAIÚSCULAS `)
    }
    if(horas > 200){
        alert(`Seu horário passa das 8 horas diárias de trabalho em escala 6 por 1, denuncie sua empresa caso esteja sofrendo abuso!`)
    }
    if(cargo != ("O") && cargo != ("G")){
        alert(`Digite "O" para Operário, e "G" para Gerente \nem letras MAIÚSCULAS `)
    }
    if(turno == "N" && cargo == "G"){
        ValorHora = salmin * 0.18
        console.log(ValorHora)
    }
    if(turno== "M" && cargo== "G" || turno == "V" && cargo == "G"){
        ValorHora = salmin * 0.15
        console.log(ValorHora)
    }
    if(turno == "N" && cargo == "O"){
        ValorHora = salmin * 0.13
        console.log(ValorHora)
    }
    if(turno== "M" && cargo== "O" || turno == "V" && cargo == "0"){
        ValorHora = salmin * 0.10
        console.log(ValorHora)
    }

    SalInicial = ValorHora * horas
    if(SalInicial<=300 && SalInicial>0){
        alimento = SalInicial * 0.20
    }
    if(SalInicial>300 && SalInicial <= 600){
        alimento = SalInicial * 0.15
    }
    if(SalInicial > 600){
        alimento = SalInicial *0.15
    }
    Salfinal = SalInicial + alimento

    HTLM.innerHTML = `<div class='dados'>O seu salário final foi :${Salfinal}R$ <br>O valor de cada hora trabalhada foi:${ValorHora}R$<br>Você trabalhou por ${horas}<br>O valor do seu auxílio alimentação foi:${alimento}R$<br>E o seu salário foi de ${SalInicial}R$ <div>`
}