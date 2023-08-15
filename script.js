function cadastrar(){
    var nomeEquipe = document.getElementById("inNome").value;
    var numeroEquipe = document.getElementById("inNumero").value;
    var dataFundacao = document.getElementById("inDataFundacao").value;
    var unidade = document.getElementById("inUnidade").value;
    var email = document.getElementById("inEmail").value;
    var tecnico = document.getElementById("inTecnico").value;
    var competicoes = document.getElementById("inCompeticoes").value;
    var senha = document.getElementById("inSenha").value;
    var confSenha = document.getElementById("inConfSenha").value;
    var outNomeNumero = document.getElementById("outNomeNumero");
    var outDFundacaoCategoria = document.getElementById("outDFundacaoCategoria");
    var outTecnico = document.getElementById("outTecnico");
    var outEmail = document.getElementById("outEmail");    

    if (nomeEquipe === ""|| numeroEquipe === "" || dataFundacao === "" || unidade ==="" || email==="" || tecnico ==="" || competicoes ==="" || senha ==="" || confSenha ==="") {
        return window.alert("Preencha todos os campos de resposta!")
    }

    if(senha != confSenha) {
        return window.alert("Revise sua senha!")
    }

    var status = "";
    if (competicoes < 3) {
        status = "Rookie";
    } else {
        status = "Veterano";
    }
    outNomeNumero.textContent = "Olá, " + nomeEquipe + "#" + numeroEquipe + " - " + unidade + ".";
    outDFundacaoCategoria.textContent = "Sua equipe é " + status + "." + "Data de fundação: " + dataFundacao + "."
    outTecnico.textContent = "Técnico: " + tecnico;
    outEmail.textContent = "E-mail: " + email;

    var pnlCadastrado = document.getElementById("pnlCadastrado");
    var pnlCadastro = document.getElementById("pnlCadastro");
    pnlCadastrado.style.opacity=1;
    pnlCadastro.style.opacity=0;
}   

var btnCadastrar = document.getElementById("btnCadastrar");
btnCadastrar.addEventListener("click", cadastrar);