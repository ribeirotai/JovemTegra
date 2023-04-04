let confirmar = document.querySelector("#confirmar");
confirmar.addEventListener("click", calcular);

function calcular(){
    let inputNomeA = document.querySelector("#nomeA").value;
    let inputIdadeA = document.querySelector("#idadeA").value;
    let inputNomeB = document.querySelector("#nomeB").value;
    let inputIdadeB = document.querySelector("#idadeB").value;

    let media = parseInt(inputIdadeA) + parseInt(inputIdadeB)/2;
        mediaFixed = media.toFixed(1);

    resultado.textContent= `A idade média entre ${inputNomeA} e ${inputNomeB} é de ${mediaFixed} anos.`;
}