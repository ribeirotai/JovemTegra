let confirmar = document.querySelector("#confirmar");
confirmar.addEventListener("click", calcular());

function calcular(){
    let InputNomeA = document.querySelector("#nomeA").value;
    let InputIdadeA = document.querySelector("#idadeA").value;
    let InputNomeB = document.querySelector("#nomeB").value;
    let InputIdadeB = document.querySelector("#idadeB").value;

    let mediaFixed = (InptIdadeA + InputIdadeB)/2.toFixed(1);
    botao.textContent= (`A idade média entre ${InputNomeA} e ${inputNomeB} é de ${mediaFixed} anos.`);
}